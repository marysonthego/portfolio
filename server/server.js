const path = require('path');
require("dotenv").config();
//const cors = require('cors');
const express = require("express");
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
const server = express();
const { pool } = require("./dbConfig.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const ROLES = require("./utils/roles.js");
const saltRounds = 10;
const PORT = process.env.PORT || 4000;

server.set("view engine", "ejs");

// var whitelist = ['http://localhost:3002', 'http://localhost:3000']; //white list consumers
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1)
//     {
//       callback(null, true);
//     } else
//     {
//       callback(null, false);
//     }
//   },
//   methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
// };

// server.use(cors(corsOptions)); //adding cors middleware to the express with above configurations

server.use(express.urlencoded({ extended: true }));
server.use(express.json());



//TODO store secret in .env

server.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    sameSite: "none",
    cookie: { httpOnly: false },
  })
);
server.use(passport.initialize());
server.use(passport.session());
require(`./passportConfig`)(passport);

// make the express `Router` first.
var router = express.Router({ mergeParams: true });

router.get('/error', function (req, res, next) {
  // cause an error in the pipeline to see express-winston in action.
  return next(new Error("This is an error and it should be logged to the console"));
});

router.get('/normal', function (req, res, next) {
  res.write('This is a normal request, it should be logged to the console too');
  res.end();
});

// express-winston logger should be BEFORE the router
router.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  options: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  }
}));


// now tell the app to use the router:
server.use(router);

//router.use(express.static(path.join(__dirname, 'build')));
router.use(express.static(path.join(__dirname, 'dashboard/build')));

// express-winston errorLogger goes AFTER the router.
server.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  options: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  }
}));

server.get("/api", (req, res) => {
  return res.status;
});

router.get("/api/login", checkAuthenticated, (req, res) => {
  return res.status;
});

// passport login
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
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
  console.log(`\n\nreq.session.passport.user: `, req.session.passport.user);
  return res.status(200).json({ msg });
});

// passport if authenticated return customer object
router.get("/api/isAuthenticated", checkAuthenticated, (req, res) => {
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
  console.log(`\n\nisAuthenticated req.session.passport.user: `, req.session.passport.user);
  console.log(`\n\nisAuthenticated msg: `, msg);
  return res.status(200).json({ msg });
  //return res.status(200).send("Ok");
});

// passport logout
router.get('/api/logout', function (req, res) {
  console.log(`\n logout: `, req);
  req.logout();
  res.status(200).clearCookie('connect.sid', { path: '/' }).json({ status: "Success" });
  req.session.destroy(function (err) {
    // if (!err)
    // {
      // res.status(200).clearCookie('connect.sid', { path: '/' }).json({ status: "Success" });
      //res.redirect('/');
    // } else
    // {
    //   // handle error case...
    //   console.log(`err: `, err);
    // }
  });
  return;
});

// add new customer
router.post("/api/addcustomer", async (req, res) => {
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

    let hashedpwd = await bcrypt.hash(pwd, saltRounds);
    usertype = "customer";
    console.log(`\nPOST addcustomer req.body: `, req.body);
    //insert new Customer
    pool.query(`INSERT INTO customer (firstname, lastname, email, cell, addr1, addr2, city, st, zip, pwd, usertype)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype`,
      [firstname, lastname, email, cell, addr1, addr2, city, st, zip, hashedpwd, usertype],
      (err, result) => {
        //Insert failed
        if (err)
        {
          console.error(`\naddcustomer INSERT failed. error: `, err.message);
          let msg = err.message;
          return res.status(409).send(msg);
        }
        if (result.rowCount === 0)
        {
          let msg = "insert failed"
          return res.status(406).send(msg);
        }
        else
        {   //Insert succeeded
          console.error(`\naddcustomer INSERT success: `, result);
          //return res.status(200).json(result.rows[0]);
          return res.status(200).send(result.rows[0]);
          //return res.status(200).send(result);
        }
      }
    );
    return res.status;
  } catch (error)
  {
    return error;
  }
});

// change password
router.post("/api/changepassword", async function (req, res) {
  console.error(`POST /changepassword req.body: `, req.body);
  const {
    custid,
    pwd,
  } = req.body;

  let hashedPwd = await bcrypt.hash(pwd, saltRounds);
  //update existing Customer with NEW password
  console.error(`\nUpdate with new password. req.body: `, req.body);
  pool.query(
    'UPDATE customer SET pwd = $2 WHERE customer.custid = $1 RETURNING custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype',
    [custid, hashedPwd],
    (err, results) => {
      //Update failed
      if (err)
      {
        console.error(`\nchangepassword failed. error: `, err.message);
        let msg = err.message;
        return res.status(409).send({ msg });

        //Update succeeded
      } else
      {
        console.error(`\nchangepassword success: `, results);
        let msg = results;
        return res.status(200).json({ msg });
      }
    }
  );
});

// update customer
router.post("/api/updatecustomer", async function (req, res) {
  console.error(`\nPOST /updatecustomer req.body: `, req.body);
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

  if (pwd)
  {
    let hashedPwd = await bcrypt.hash(pwd, saltRounds);
    //update existing Customer with NEW password
    console.error(`\nUpdate with new password. req.body: `, req.body);
    pool.query(
      'UPDATE customer SET firstname = $2, lastname = $3, email = $4, cell = $5, addr1 = $6, addr2 = $7, city = $8, st = $9, zip = $10, usertype = $11, pwd = $12 WHERE customer.custid = $1 RETURNING custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype',
      [custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype, hashedPwd],
      (err, results) => {
        //Update failed
        if (err)
        {
          console.error(`\nupdatecustomer failed. error: `, err.message);
          let msg = err.message;
          return res.status(409).send({ msg });

          //Update succeeded
        } else
        {
          console.error(`\nupdatecustomer success: `, results.rowCount);
          let msg = results.rowCount;
          return res.status(200).send({ msg });
        }
      }
    );
  } else
  {
    //update customer with existing password
    console.error(`\nUpdate with existing password. req.body: `, req.body);
    pool.query(
      'UPDATE customer SET firstname = $2, lastname = $3, email = $4, cell = $5, addr1 = $6, addr2 = $7, city = $8, st = $9, zip = $10, usertype = $11 WHERE customer.custid = $1 RETURNING custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype',
      [custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype],
      (err, results) => {
        //Update failed
        if (err)
        {
          console.error(`\nUpdate failed. error: `, err.message);
          let msg = err.message;
          return res.status(409).send(msg);

          //Update succeeded
        } else
        {
          console.error(`\nUpdate success: `, results.rowCount);
          let msg = results.rows[0];
          return res.status(200).send(msg);
        }
      }
    );
  };
});

// get customer by custid
router.get("/api/getcustomerbycustid/:custid", async (req, res) => {
  let custid = req.params.custid;
  try
  {
    const response = await pool.query(
      `SELECT custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype, username, createdate FROM customer WHERE customer.custid = $1`, [custid]);
    if (response.rows.length > 0)
    {
      console.log(`\ngetcustomerbycustid response: `, response);
      return res.status(200).json(response.rows[0]);
    }
  } catch (err)
  {
    return res.status(404).json(err.message);
  }
});

router.get("/api/listcustomers", async (req, res) => {
  const response = await pool.query(`SELECT custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype,  createdate, lastupdate FROM customer`);
  if (response.rows.length > 0)
  {
    console.log(`\n\nlistcustomers response.rows: `, response.rows);
    return res.status(200).send(response.rows);
  }
  return res.status(404);
});

// delete customer by custid
router.delete("/api/deletecustomer/:custid", async function (req, res) {
  try {
  let custid = req.params.custid;
  
  const response = await pool.query(
    `DELETE from customer WHERE customer.custid = $1 RETURNING custid`, [custid]);

    if (response) {
      console.log(`\n\ndeletecustomer response: `, response.rows);
      return res.status(200).send(response.rows);
    }
  } catch (err) {
    console.log(`\n\ndelete customer err: `, err);
    return res.status(404).send(err);
  }
});

// add new subscription for custid and zip
router.post("/api/addsubscription", async (req, res) => {
  try
  {
    const foundSubscription = await pool.query(
      `SELECT * from subscriber WHERE subscriber.custid = $1 AND subscriber.zip = $2`, [req.body.custid, req.body.zip]
    );
    if (foundSubscription.rows.length > 0)
    {
      return res.status(409).send('error: duplicate subscription found');
    } else
    {
      const {
        custid,
        cell,
        zip,
        nickname,
        weatheralert,
        virusalert,
        airalert,
      } = req.body;
      pool.query(`INSERT INTO subscriber (custid, cell, zip, nickname, weatheralert, virusalert, airalert) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, custid, cell, zip, nickname, weatheralert, virusalert, airalert`,
        [custid, cell, zip, nickname, weatheralert, virusalert, airalert],
        (err, results) => {
          //Insert failed
          if (err)
          {
            console.error(`\naddsubscription INSERT failed. error: `, err.message);
            let msg = err.message;
            return res.status(409).send(msg);

            //Insert succeeded
          } else
          {
            console.error(`\n\naddsubscription INSERT success: `, results.rows);
            return res.status(200).send(results.rows);
          }
        }
      );
      //return res;
    };
  } catch (err)
  {
    return (err);
  }
});

// update existing subscription for custid & zip
router.post("/api/updatesubscription", async (req, res) => {
  try
  {
    const {
      custid,
      id,
      cell,
      zip,
      nickname,
      weatheralert,
      virusalert,
      airalert,
    } = req.body;

    const foundSubscription = await pool.query(
      `SELECT * from subscriber WHERE subscriber.custid = $1 AND subscriber.id = $2`, [custid, id]);
    if (foundSubscription.rows.length > 0)
    {

      await pool.query(`UPDATE subscriber SET cell = $3, zip = $4, nickname = $5, weatheralert = $6, virusalert = $7, airalert = $8 WHERE subscriber.custid = $1 AND subscriber.id = $2 RETURNING subscriber.id, subscriber.custid, cell, zip, nickname, weatheralert, virusalert, airalert`, [custid, id, cell, zip, nickname, weatheralert, virusalert, airalert],
        (err, results) => {
          if (results)
          {
            console.log(`\n\nupdatesubscription success results.rows[0]: `, results.rows[0])
            return res.status(200).send(results.rows[0]);
          }
          return res.status(404).send(err);
        }
      );
    };
    return res;
  } catch (err)
  {
    console.log(`\n\nupdatesubscription error: `, err.name, err.message);
    return (err)
  }
});


// delete subscription by subscriber.id
router.delete("/api/deletesubscription/:id", async function (req, res) {
  try
  {
    let id = req.params.id;
    console.log(`\n\ndeletesubscription id: `, id);

    const response = await pool.query(`DELETE FROM subscriber WHERE subscriber.id = $1 RETURNING id, custid, zip`, [id]);
    if (response)
    {
      console.log(`\n\ndeletesubscription response: `, response.rows);
      return res.status(200).send(response.rows);
    }
    //console.log(`\n\ndeletesubscription response: `, response.rows);
    //return res.status(404).send(response.rows);
  } catch (err)
  {
    console.log(`\n\ndelete subscription err: `, err);
    return res.status(404).send(err);
  }
});

// getLocationsByCustid
router.get("/api/getlocationsbycustid/:custid", async (req, res) => {
  let custid = req.params.custid;

  try
  {
    const response = await pool.query(`SELECT subscriber.id, subscriber.zip, cell, custid, nickname, weatheralert, virusalert, airalert, stateid, city FROM subscriber INNER JOIN zipdata ON zipdata.zip = subscriber.zip WHERE subscriber.custid = $1`, [custid]);
    if (response.rowCount > 0)
    {
      console.log(`\n\ngetlocationsbycustid response: `, response.rows);
      return res.status(200).send(response.rows);
    }
    console.log(`\n\ngetlocationsbycustid 404 response: `, response);
    return res.status(404).send(response.rows);
    //return res.status(404).send(`locations not found for custid ${custid}`);
  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return res.status(404).send(err.message);
  }
});

// getLocationById
router.get("/api/getlocationbyid/:id", async (req, res) => {
  let id = req.params.id;

  try
  {
    const response = await pool.query(`SELECT subscriber.id, subscriber.zip, cell, custid, nickname, weatheralert, virusalert, airalert, stateid, city FROM subscriber INNER JOIN zipdata ON zipdata.zip = subscriber.zip WHERE subscriber.id = $1`, [id]);
    if (response.rowCount > 0)
    {
      console.log(`\n\ngetlocationbyid response: `, response.rows);
      return res.status(200).send(response.rows[0]);
    }
    console.log(`\n\ngetlocationbyid 404 response: `, response);
    return res.status(404).send(response.rows);
    //return res.status(404).send(`locations not found for custid ${custid}`);
  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return res.status(404).send(err.message);
  }
});


// list subscriptions for custid
router.post("/api/listsubscriptions", async (req, res) => {
  try
  {
    const {
      custid
    } = req.body;

    const response = await pool.query(`SELECT subscriber.id, subscriber.zip, cell, custid, nickname, weatheralert, virusalert, airalert, stateid, city FROM subscriber INNER JOIN zipdata ON zipdata.zip = subscriber.zip WHERE subscriber.custid = $1`, [custid]);
    if (response.rowCount > 0) 
    {
      console.log(`\n\nresponse: `, response);
      return res.status(200).json(response.rows);
    }
    console.log(`\n\nrowCount = 0 response: `, response);
    return res.status(404).json(`No subscriptions found for custid ${custid}`);
  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return (err);
  }
});

// add new friend for custid
router.post("/api/addfriend", async (req, res) => {
  try
  {
    const foundFriend = await pool.query(
      `SELECT * from friends WHERE friends.custid = $1 AND friends.cell = $2`, [req.body.custid, req.body.cell]);

    if (foundFriend.rows.length > 0)
    {
      return res.status(418).send('error: friend with duplicate cell found');
    } else
    {
      const {
        custid,
        firstname,
        zip,
        cell,
      } = req.body;
      pool.query(`INSERT INTO friends (custid, firstname, zip, cell) VALUES ($1, $2, $3, $4) RETURNING id, custid, zip, firstname, cell`,
        [custid, firstname, zip, cell],
        (err, results) => {
          //Insert failed
          if (err)
          {
            console.error(`\nFriend INSERT failed. error: `, err.message);
            let msg = err.message;
            return res.status(409).send({ msg });

            //Insert succeeded
          } else
          {
            console.error(`\n\nFriend INSERT success: `, results.rows);
            return res.status(200).send(results.rows);
          }
        }
      );
      //return res;
    };
  } catch (err)
  {
    return (err);
  };
});

// update existing friend for custid & id
router.post("/api/updatefriend", async function (req, res) {
  try
  {
    const {
      custid,
      firstname,
      zip,
      cell,
      id,
    } = req.body;

    const foundFriend = await pool.query(`SELECT * from friend WHERE friend.custid = $1 and friend.id = $2`, [custid, id]);

    if (foundFriend.rows.length > 0)
    {
      await pool.query(`UPDATE friends SET firstname = $2, zip = $3, cell = $4 WHERE friends.custid = $1 AND friends.id = $5 RETURNING *`,
        [custid, firstname, zip, cell, id],
        (err, results) => {
          if (results)
          {
            console.log(`\n\nupdatefriend success results.rows[0]: `, results.rows[0])
            return res.status(200).send(results.rows[0]);
          }
          return res.status(404).send(err);
        }
      );
    };
    return res;
  } catch (err)
  {
    console.log(`\n\nupdatefriend error: `, err.name, err.message);
    return (err)
  }
});


// delete friend 
router.delete("/api/deletefriend/:id", async function (req, res) {
  try
  {
    let id = req.params.id;
    const response = await pool.query(
      `DELETE from friends WHERE friends.id = $1 RETURNING *`, [id]);
    if (response)
    {
      console.log(`\n\ndeletefriend response: `, response.rows);
      return res.status(200).send(response.rows);
    }
  } catch (err)
  {
    console.log(`\n\ndelete friend err: `, err);
    return res.status(404).send(err);
  }
});

//getfriendsbycustid
router.get("/api/getfriendsbycustid/:custid", async (req, res) => {
  let custid = req.params.custid;

  try
  {
    const response = await pool.query(`SELECT friends.id, friends.zip, cell, custid, firstname, stateid, city FROM friends INNER JOIN zipdata ON zipdata.zip = friends.zip WHERE friends.custid = $1`, [custid]);
    if (response.rowCount > 0)
    {
      console.log(`\n\ngetfriendsbycustid response: `, response.rows);
      return res.status(200).send(response.rows);
    }
    console.log(`\n\ngetfriendsbycustid 404 response: `, response);
    return res.status(404).send(response.rows);
    //return res.status(404).send(`friends not found for custid ${custid}`);
  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return res.status(404).send(err.message);
  }
});

// get list of friends for custid
router.post("/api/listfriends", async function (req, res) {
  let {
    custid
  } = req.body;

  const friendcount = await pool.query(`SELECT COUNT(*) as num FROM friends WHERE friends.custid = $1`, [custid]);
  console.log(`friendcount: `, friendcount);
  if (friendcount.rows[0].num === '0')
  {
    return res.status(204).json('No friends found');
  }
  let list;
  if (friendcount.rows[0].num > 0)
  {
    list = await pool.query(`SELECT * from friends WHERE friends.custid = $1`, [custid]);
    return res.status(200).json({ list });
  }
  return res.status(200).json({ list });
});

// verify zip
router.post("/api/verifyzip", async (req, res) => {
  try
  {
    const {
      zip,
    } = req.body;
    const foundZip = await pool.query(`SELECT zipdata.zip FROM zipdata WHERE zipdata.zip = $1`, [zip]
    );
    if (foundZip.rows.length > 0)
    {
      return res.status(200).send(foundZip.rows[0]);
    }
    return res.status(404).json({ msg: `zip code ${req.body.zip} not found` });
  } catch (err)
  {
    return (err);
  }
});

// POST get zip with highest pop for city/st
router.post("/api/findzip", async (req, res) => {
  try
  {
    const {
      city,
      st,
    } = req.body;
    const foundZip = await pool.query(`SELECT zipdata.zip FROM zipdata WHERE zipdata.city = $1 AND zipdata.stateid = $2 ORDER BY zipdata.pop DESC LIMIT 1`, [city, st]
    );
    if (foundZip.rows.length > 0)
    {
      console.log(`\nZip found `, foundZip.rows[0].zip, req.body.city, req.body.st);
      return res.status(200).json(foundZip.rows[0].zip);
    }
    return res.status(404).json({ msg: `Zip not found for ${req.body.city}, ${req.body.st}` });
  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return (err);
  }
});

// get zip with highest pop for city/st 
router.get("/api/getzip", async (req, res) => {
  try
  {
    let city = req.params.city;
    let stateid = req.params.st;

    const foundZip = await pool.query(`SELECT zipdata.zip FROM zipdata WHERE zipdata.city = $1 AND zipdata.stateid = $2 ORDER BY zipdata.pop DESC LIMIT 1`, [city, stateid]);
    console.log(`\n\nZip found `, foundZip.rows[0], city, stateid);
    return res.status(200).json(foundZip.rows[0]);

  } catch (err)
  {
    console.log(`\n\nerr: `, err);
    return (err);
  }
});

// get city/st for zip
router.get("/api/getcityst/:zip", async (req, res) => {
  let zip = req.params.zip;
  try
  {
    const response = await pool.query(`SELECT zipdata.city, zipdata.stateid FROM zipdata WHERE zipdata.zip = $1`, [zip]);
    return res.status(200).json(response.rows[0]);
  } catch (err)
  {
    return res.status(err.status).json(err.message);
  }
});

// check for duplicate customer email
router.get("/api/checkemail", async (req, res) => {
  let custid = req.params.custid;
  let email = req.params.email;
  try
  {
    const foundEmail = await pool.query(`SELECT customer.custid, customer.email FROM customer WHERE customer.email = $1 AND customer.custid != $2`, [email, custid]);
    if (foundEmail.rows.length > 0)
    {
      return res.status(418).json(`Duplicate email found. `, foundEmail.rows[0]);
    }
    return res.status(200).json(`Email ${email} for custid ${custid} not a duplicate `);
  } catch (err)
  {
    return (err);
  }
});

//check for duplicate customer cell
router.get("/api/checkcell", async (req, res) => {
  let custid = req.params.custid;
  let cell = req.params.cell;
  try
  {
    const foundCell = await pool.query(`SELECT customer.custid, customer.cell FROM customer WHERE customer.cell = $1 AND customer.custid != $2`, [cell, custid]);

    return res.status(200).json(`Cell ${cell} for custid ${custid} not a duplicate `)
  } catch (err)
  {
    return res.status().json(err.name, err.message);
  }
});

// check for duplicate email in customer table
router.post("/api/checkemail", async (req, res) => {
  try
  {
    const {
      email,
      custid
    } = req.body;

    const foundEmail = await pool.query(`SELECT customer.custid, customer.email FROM customer WHERE customer.email = $1 AND customer.custid != $2`, [email, custid]
    );
    if (foundEmail.rows.length > 0)
    {
      return res.status(418).json(`Duplicate email found. `, foundEmail.rows[0]);
    }
    return res.status(200).json(`Email ${email} for custid ${custid} not a duplicate `);
  } catch (err)
  {
    return (err);
  }
});

// check for duplicate cell in customer table
router.post("/api/checkcell", async (req, res) => {
  try
  {
    const {
      cell,
      custid
    } = req.body;

    const foundCell = await pool.query(`SELECT customer.custid, customer.cell FROM customer WHERE customer.cell = $1 AND customer.custid != $2`, [cell, custid]
    );
    if (foundCell.rows.length > 0)
    {
      return res.status(418).json(`Duplicate cell found. `, foundCell.rows[0]);
    }
    return res.status(200).json(`Cell ${cell} for custid ${custid} not a duplicate `);
  } catch (err)
  {
    return (err);
  }
});

function checkAuthenticated (req, res, next) {
  if (req.isAuthenticated())
  {
    console.log(`\ncheckAuthenticated res: `, res);
    console.log(`\n\nreq.session.passport.user: `, req.session.passport.user);
    return next();
  }
  res.status(401).json("not authenticated");
};


server.get('/*', (req, res) => {
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.sendFile(path.join(__dirname, 'dashboard/build', 'index.html'));
});

server.listen(PORT, () => {
  //console.error(`CORS enabled Server with whitelist is running on port ${PORT}\n`);
  console.error(`CORS disabled on port ${PORT}
  \n`);
});
