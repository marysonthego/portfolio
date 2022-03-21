import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Post03 = () => {
  let TopPic = "media/post03top.png";
  let Title = "Local Authentication with Passport";

  let codeSection1 = `"dependencies": {
  "bcrypt": "^5.0.1",
  "body-parser": "^1.19.0",
  "compression": "^1.7.4",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^10.0.0",
  "express": "^4.17.1",
  "express-session": "^1.17.2",
  "memorystore": "^1.6.7",
  "mysql2": "^2.3.3",
  "passport": "^0.5.2",
  "passport-local": "^1.0.0"
},
`;

  let codeSection2 = `const path = require('path'); 
  require("dotenv").config(); 
  const express = require("express"); 
  const server = express(); 
  const pool = require("./dbConfig.mysql"); 
  const bcrypt = require("bcrypt"); 
  const session = require("express-session"); 
  const MemoryStore = require('memorystore')(session); 
  const passport = require("passport"); 
  const saltRounds = 10;

  const PORT = process.env.PORT || 4000; 
  server.set("view engine", "ejs");

  server.use(express.urlencoded({ extended: true })); 
  server.use(express.json());

  //Always set up the Express session first
  server.use( 
    session({ 
      secret: \`${process.env.secret}\`, 
      resave: false, 
      saveUninitialized: false, 
      sameSite: "none", 
      cookie: { httpOnly: false, maxAge: 86400000 }, 
      store: new MemoryStore({ 
        checkPeriod: 86400000 // prune expired entries every 24h 
      }), 
    }) 
  );

  //initialize Passport after setting up the Express session
  server.use(passport.initialize());

  //Finally, set up the Passport session
  server.use(passport.session());

  require(\`./passportConfig.mysql\`)(passport);

  var app = express.Router({mergeParams: true});

  server.use(app);

  app.get("/api/login", checkAuthenticated, (req, res) => { 
    return res.status; 
  });

  // passport login 
  app.post("/api/login", passport.authenticate("local"), 
  function (req, res) { 
  // If this function gets called, authentication was successful. 
    // \`req.user\` contains the authenticated user. 
    let msg = { 
      custid: req.user.custid, 
      firstname: req.user.firstname, 
      lastname: req.user.lastname, 
      email: req.user.email, 
      cell: req.user.cell, 
      addr1: req.user.addr1, 
      addr2: req.user.addr2, 
      city: req.user.city, 
      st: req.user.st, 
      zip: req.user.zip, 
      usertype: req.user.usertype 
    }; 
    console.error(\`\nreq.session.passport.user: \`,
     req.session.passport.user); 
    return res.status(200).json({ msg }); 
  });

  // if authenticated by passport return the customer object 
  app.get("/api/isAuthenticated", 
  checkAuthenticated, (req, res) => { 
    let msg = { 
      custid: req.user.custid, 
      firstname: req.user.firstname, 
      lastname: req.user.lastname, 
      email: req.user.email, 
      cell: req.user.cell, 
      addr1: req.user.addr1, 
      addr2: req.user.addr2, 
      city: req.user.city, 
      st: req.user.st, 
      zip: req.user.zip, 
      usertype: req.user.usertype 
    }; 
    console.error(\`\nisAuthenticated req.session.passport.user: \`,
     req.session.passport.user); 
    console.error(\`\n\nisAuthenticated msg: \`, msg); 
    
  return res.status(200).json({ msg });  
  });

  // passport logout 
  app.get('/api/logout', function (req, res) { 
    console.error(\`\n logout: \`, req); 
    req.logout(); 
    res.status(200).clearCookie('connect.sid', 
    { path: '/' }).json({ status: "Success" }); 
    req.session.destroy(function (err) { 
      if (!err) 
      { 
        res.status(200).clearCookie('connect.sid', 
        { path: '/' }).json({ status: "Success" }); 
        res.redirect('/'); 
      } else 
      { 
        // handle error case... 
        console.error(\`err: \`, err); 
      } 
    }); 
    return; 
  });

  // add new customer 
  app.post("/api/addcustomer", async (req, res) => { 
    try 
    { 
      let { 
        firstname, 
        lastname, 
        email, 
        cell, 
        addr1, 
        addr2, 
        city, 
        st, 
        zip, 
        pwd, 
        usertype, 
      } = req.body; 

  //Request comes in with password entered by the user in clear-text 
  //Then hashed by bcript.
  //Save the hashed password in the database

      let hashedpwd = await bcrypt.hash(pwd, saltRounds); 
      usertype = "customer";
      //insert new Customer 
      let sql = 'INSERT INTO customer 
      (firstname, lastname, email, cell, 
        addr1, addr2, city, st, zip, 
        pwd, usertype) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?)'; 
      pool.execute(sql, [firstname, lastname, 
        email, cell, addr1, addr2, city, 
        st, zip, hashedpwd, usertype], 
        (error, results) => { 
        if (error) throw error; 
        res.status(200).json(results); 
      }); 
    } catch (error) { 
        return (error); 
      } 
    });

  // change password 
  app.post("/api/changepassword", async function (req, res) { 
    try { 
      const { 
        custid, 
        pwd, 
      } = req.body; 
      const hashedPwd = await bcrypt.hash(pwd, saltRounds); 
      
      let sql = 'UPDATE customer SET pwd=? WHERE custid = ?'; 
      pool.execute(sql, [hashedPwd, custid], (error, results) => { 
        if (error) throw error; 
        return res.status(200).json(results); 
      }); 
    } catch (error) { 
      return error; 
    } 
  });

  // update customer 
  app.post("/api/updatecustomer", async function (req, res) { 
    try { 
      const { 
        custid, 
        firstname, 
        lastname, 
        email, 
        cell, 
        addr1, 
        addr2, 
        city, 
        st, 
        zip, 
        pwd, 
        usertype, 
      } = req.body; 
      if (pwd) { 
        const hashedPwd = await bcrypt.hash(pwd, saltRounds);

        //update existing Customer with NEW password 
        console.error(\`\nUpdate with new password. 
        req.body: \`, req.body); 
        let sql = 'UPDATE customer SET firstname = ?, 
        lastname = ?, email = ?, cell = ?, 
        addr1 = ?, addr2 = ?, city = ?, st = ?, 
        zip = ?, usertype = ?, pwd = ? WHERE custid = ?'; 
        pool.execute(sql, [firstname, 
        lastname, 
        email, 
        cell, 
        addr1, 
        addr2, 
        city, 
        st, 
        zip, 
        usertype, 
        hashedPwd, 
        custid], (error, results) => { 
          if (error) throw error; 
          return res.status(200).json(results); 
        }) 
      } else { 
        //update customer with EXISTING password 
        let sql = 'UPDATE customer SET firstname = ?, 
        lastname = ?, email = ?, cell = ?, 
        addr1 = ?, addr2 = ?, city = ?, st = ?, 
        zip = ?, usertype = ? WHERE custid = ?'; 
        pool.execute(sql, [firstname, 
          lastname, 
          email, 
          cell, 
          addr1, 
          addr2, 
          city, 
          st, 
          zip, 
          usertype, 
          custid], (error, results) => { 
            if (error) throw error; 
            return res.status(200).json(results); 
          }) 
      }; 
    } catch(error) { 
      return res.status(500).json(error); 
    }; 
  });
  //Any other regular database queries you need
//...

//Add this below all the other queries, 
//near the end of the file
function checkAuthenticated (req, res, next) { 
  if (req.isAuthenticated()) 
  { 
    console.error(\`\ncheckAuthenticated res: \`, res); 
    console.error(\`\n\nreq.session.passport.user:\`, 
    req.session.passport.user); 
    return next(); 
  } 
  res.status(401).json("not authenticated"); 
};

//Default location of your application if you are in dev mode
server.get('/*', (req, res) =&gt; { 
  if(process.env.NODE_ENV === 'dev') { 
    res.sendFile(path.join(__dirname, '/dashboard/build', 'index.html'));
//Default location of your application if you are in production mode 
  } else { 
    res.sendFile(path.join(__dirname, '/public', 'index.html')); 
  } 
   
}); 

//Statement to start your Node server
server.listen(PORT, () => { 
  console.error(\`CORS disabled. 
  Running mySQL on port $\{PORT\} 
  NODE_ENV = ${process.env.NODE_ENV}\n\`); 
});  
`;

  let codeSection3 = `const LocalStrategy = 
require("passport-local").Strategy;
const { pool } = require("./dbConfig.mysql");
const bcrypt = require("bcrypt");

function initialize(passport) {

  function authenticateUser(email, pwd, done) {

    pool.query(
      \`SELECT * FROM customer WHERE email = $1\`,
      [email],
      (err, results) => {
        if (err) {
          return done(err);
        }

        if (results.rows.length > 0) {
          const email = results.rows[0];
        
          if(email.pwd) {
            email.pwd = email.pwd.trimEnd();
          } else {
            return done(null, false, {
              message: "Missing password in database",
            });
          }
          bcrypt.compare(pwd, email.pwd, 
            function (err, isMatch) {
            if (err) {
              return done(err);
            }

            if (isMatch) {
              return done(null, email);
            } else {
              return done(null, false, {
                message: "Incorrect email or password",
              });
            }
          });
        } else {
          return done(null, false, 
            { message: "Missing email or password" });
        }
      }
    );
  }

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "pwd",
      },
      authenticateUser
    )
  );

  passport.serializeUser((email, done) => {
    //console.error(\`serializeUser: \`, email.custId);
    done(null, email.custid);
  });

  passport.deserializeUser((id, done) => {
    pool.query(\`SELECT * from customer WHERE custid = $1\`,
    [id], (err, results) => {
      if (err) {
        throw err;
      }
      //console.error(\`deserializeUser: \`, results.rows[0]);
      return done(null, results.rows[0]);
    });
  });
}

module.exports = initialize;
`;

let Text2 = (
  <div>
    <p className="post-text">
      This is part of my app.js file for Express. I changed the name to
      app.mysql.js because the application is also implemented in PostgreSQL.
      Doing it this way I can quickly swap the application from MySql to
      PostgreSQL on a restart by using the appropriate start script.
    </p>
    <p className="post-text">
      The Passport documentation explains the order in which the Passport
      middleware must be implemented. In a Connect or Express-based
      application, passport.initialize() middleware is required first to
      initialize Passport.
    </p>
    <p className="post-text">
      If your application uses persistent login sessions (ours does),
      passport.session() middleware must be installed next.
    </p>
    <p className="post-text">
      In a typical web application, the credentials used to authenticate a
      user will only be transmitted during the login request. If
      authentication succeeds, a session will be established and maintained
      via a cookie set in the user's browser.
    </p>
    <p className="post-text">
      Each subsequent request will not contain credentials, but rather the
      unique cookie that identifies the session. In order to support login
      sessions, Passport will serialize and deserialize user instances to and
      from the session.
    </p>
    <p className="post-text">
      Note that enabling session support is entirely optional, though it is
      recommended for most applications. If enabled, be sure to use
      express.session() before passport.session() to ensure that the login
      session is restored in the correct order.
    </p>
    <p className="post-text">
      This app.mysql.js file is boiled down to the minimum you need for
      Passport to work. The order of the statements is important. Express
      reads app.js from top to bottom.
    </p>
  </div>
);

let Text3 = (
  <div>
    <p className="post-text">
      The last thing we have to do is configure Passport. Create the file
      passportConfig.js in the same directory as package.json. It initializes
      Passport to use the local strategy, authenticates users, and serializes
      and deserializes them to and from the user store.
    </p>
  </div>
);

  let Sec01 = (
    <div>
      <p className="post-text">
        <a href="https://www.passportjs.org/" className="link-primary">
          Passport
        </a>{" "}
        is authentication software for Node JS. You implement it as Node JS
        middleware. Middleware is software running on Node that intercepts
        browser requests to Node and, in this case, performs authentication. If
        authentication is successful, it allows the request to pass on to Node
        proper. Otherwise, it responds to the browser letting it know that
        authentication failed.
      </p>
      <p className="post-text">
        Passport is very flexible. It supports over 500 different authentication
        strategies. A{" "}
        <a href="https://www.passportjs.org/packages/" className="link-primary">
          strategy
        </a>{" "}
        is an API that communicates with an authenticator that is remote from
        the Node server where Passport is running. For example, it supports
        authenticating remotely via Facebook, Twitter, Google, and many specific
        internet sites. It also supports a local authentication strategy - which
        is what I'm going to show you how to set up today.
      </p>
      <p className="post-text">
        The local strategy expects the user names and passwords to be stored
        locally in your database. The password is encrypted before it is stored,
        and I'll show you how to do that too. When authentication is successful,
        the local strategy creates a session token that is stored as a cookie in
        the browser. It uniquely identifies the logged-in user, the browser they
        are using, the server they are connected to, and almost always specifies
        a maximum time the token is valid. The cookie is encrypted before it is
        sent to the browser, and stored on the browser that way too.
      </p>
      <p className="post-text">
        The whole point of authentication strategies is to make it convenient
        for users to use your website. If you couldn't store a user's
        authentication status anywhere, the user would have to enter their user
        name and password every time they made a secured request to the server.
        How tedious that would be! Passport has a reputation for being
        complicated, but that's mainly due to the details missing from their
        official documentation. You can find help for all these things on the
        internet, but I want to save you the trouble of having to do a bunch of
        searches yourself - especially since the internet is full of wrong and
        conflicting information! What I'm going to show you is what I use in my
        example project Admin Dashboard.
      </p>
      <p className="post-text">
        I'm skipping over the steps for starting from ground-zero. You should
        already have Node/npm installed, and MySql installed with your schema
        set up for your application. Since you're interested in authentication,
        you probably already have a user table where you store usernames and
        passwords. The only thing you might not already have in your MySql
        schema is a place to store the user's encrypted password.
      </p>
      <p className="post-text">
        <b>Never store passwords in clear text in a database!</b> It's unlikely,
        but if you're already authenticating users by simply validating their
        password against a clear-text password field, you should delete the
        users from your database, drop the clear-text password column, and
        require them to create a new account the next time they log in.
      </p>
      <p className="post-text">
        What you want is a column in your user table configured as a simple
        char(200) datatype. There's nothing fancy about creating a column to
        store an encrypted password. It's just a very long text field. 200
        characters is more than enough. You do not have to tell MySql the column
        is encrypted - in fact don't. MySql will not be doing any of the
        encryption. We will use{" "}
        <a href="https://www.npmjs.com/package/bcrypt" className="link-primary">
          Bcrypt
        </a>{" "}
        for that.
      </p>
      <p className="post-text">
        This is the dependency list from my package.json for the Node/Express
        server. You need to install these packages with npm or yarn.
      </p>
      <div className="code1">
        <h4>package.json</h4>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          showLineNumbers
          wrapLongLines
        >
          {codeSection1}
        </SyntaxHighlighter>
      </div>
      
      <div className="text2">
        {Text2}
        <br />
      </div>
      <div className="code2">
        <h4>app.js</h4>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          showLineNumbers
          wrapLongLines
        >
          {codeSection2}
        </SyntaxHighlighter>
      </div>
      <div className="text3">
        {Text3}
      </div>
      <div className="code3">
        <h4>passportConfig.js</h4>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          showLineNumbers
          wrapLongLines
        >
          {codeSection3}
        </SyntaxHighlighter>
      </div>
    </div>
  );


  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
        {Sec01}
        <br />
      </div>
    </div>
  );
};
