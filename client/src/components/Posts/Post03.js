import react from "react";
import Container from "react-bootstrap/Container";
import "components/css/cards.scss";

export const Post03 = () => {
  let TopPic = "media/post03top.png";
  let Title =
    "Local Authentication with Passport";
  let Section1 = (
    <div>
      <p className="card-text">
      <a href="https://www.passportjs.org/" className="link-primary">Passport</a> is authentication software for Node JS. You implement it as Node JS middleware. Middleware is software running on Node that intercepts browser requests to Node and, in this case, performs authentication. If authentication is successful, it allows the request to pass on to Node proper. Otherwise, it responds to the browser letting it know that authentication failed.
      </p>
      <p className="card-text">
    Passport is very flexible. It supports over 500 different authentication strategies. A  <a href="https://www.passportjs.org/packages/" className="link-primary">strategy</a> is an API that communicates with an authenticator that is remote from the Node server where Passport is running. For example, it supports authenticating remotely via Facebook, Twitter, Google, and many specific internet sites. It also supports a local authentication strategy - which is what I'm going to show you how to set up today.
    </p>
    <p className="card-text">
    The local strategy expects the user names and passwords to be stored locally in your database. The password is encrypted before it is stored, and I'll show you how to do that too.  When authentication is successful, the local strategy creates a session token that is stored as a cookie in the browser. It uniquely identifies the logged-in user, the browser they are using, the server they are connected to, and almost always specifies a maximum time the token is valid. The cookie is encrypted before it is sent to the browser, and stored on the browser that way too. 
    </p>
    <p className="card-text">
    The whole point of authentication strategies is to make it convenient for users to use your website. If you couldn't store a user's authentication status anywhere, the user would have to enter their user name and password every time they made a secured request to the server. How tedious that would be! Passport has a reputation for being complicated, but that's mainly due to the details missing from their official documentation. You can find help for all these things on the internet, but I want to save you the trouble of having to do a bunch of searches yourself - especially since the internet is full of wrong and conflicting information! What I'm going to show you is what I use in my example project Admin Dashboard.
    </p>
    <p className="card-text">
    I'm skipping over the steps for starting from ground-zero. You should already have Node/npm installed, and MySql installed with your schema set up for your application. Since you're interested in authentication, you probably already have a user table where you store usernames and passwords. The only thing you might not already have in your MySql schema is a place to store the user's encrypted password. 
    </p>
    <p className="card-text">
    <b>Never store passwords in clear text in a database!</b> It's unlikely, but if you're already authenticating users by simply validating their password against a clear-text password field, You should delete the users from your database, drop the clear-text password column, and require them to create a new account the next time they log in. 
    </p>
    <p className="card-text">
    What you want is a column in your user table configured as a simple char(200) datatype. There's nothing fancy about creating a column to store an encrypted password.  It's just a very long text field. 200 characters is more than enough. You do not have to tell MySql the column is encrypted - in fact don't. MySql will not be doing any of the encryption. We will use Bcrypt for that.
    </p>
    <p className="card-text">
    This is the dependency list from my package.json for the Node/Express server. You need to install these packages with npm or yarn.
    </p>
    <img className="card-img-top" src='media/post0301.png' alt="Card image" />
</div>
  );
  return (
    <Container className="grid">
      <div></div>
      <div>
        <img className="card-img-top" src={TopPic} alt="Card image" />
        <h3 className="card-title text-center">{Title}</h3>
        {Section1}
      </div>
      <div></div>
    </Container>
  );
};
