import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import "components/css/posts.scss";
import ExpressFileBasicRouting from "./expressFileBasicRouting";

function ExpressFileRouting() {
  let ExpressBasic = ExpressFileBasicRouting();
  let Title = "Express Routing";
  return (
    <div className="post-wrapper post">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
        {ExpressBasic}
        <h4 className="subtitle">Express Routing</h4>
        <p className="ptext">
          Define routing using methods of the Express app object that correspond
          to HTTP methods; for example, <code>app.get()</code> to handle GET
          requests and <code>app.post()</code> to handle POST requests.
          <br />
          <br />
          Use <code>app.all()</code> to handle all HTTP methods.
          <br />
          <br />
          Use <code>app.use()</code> to specify middleware as the callback
          function.
        </p>
        <p className="ptext">
          Routing methods specify a callback function (sometimes called “handler
          functions”) called when the application receives a request to the
          specified route (endpoint) and HTTP method. In other words, the
          application “listens” for requests that match the specified route(s)
          and method(s), and when it detects a match, it calls the specified
          callback function.
        </p>
        <p className="ptext">
          The routing methods can have more than one callback function as
          arguments. With multiple callback functions, it is important to
          provide <code>next</code> as an argument to the callback function and
          then call <code>next()</code> within the body of the function to hand
          off control to the next callback.
        </p>
        <p className="ptext">
          <code>app.all()</code> is used to load middleware functions at a path
          for all HTTP request methods. For example, the following handler is
          executed for requests to the route “/secret” whether using GET, POST,
          PUT, DELETE, or any other HTTP request method supported in the http
          module.
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})`}
        </SyntaxHighlighter>
        <br />
        <h5 className="subsub">Route Path Rules</h5>
        <p className="ptext">
          Route paths, in combination with a request method, define the
          endpoints at which requests can be made. Route paths can be strings,
          string patterns, or regular expressions.
          <br />
          <br />
          The characters ?, +, *, and () are subsets of their regular expression
          counterparts. The hyphen (-) and the dot (.) are interpreted literally
          by string-based paths.
          <br />
          <br />
          If you need to use the dollar character ($) in a path string, enclose
          it escaped within ([ and ]). For example, the path string for requests
          at “/data/$book”, would be “/data/([\$])book”.
          <br />
          <br />
          Express uses path-to-regexp for matching the route paths; see the
          path-to-regexp documentation for all the possibilities in defining
          route paths.{" "}
          <a
            href="https://forbeslindesay.github.io/express-route-tester/"
            target="_blank" rel="noreferrer"
            className="link-primary"
          >
            Express Route Tester
          </a>{" "}
          is a handy tool for testing basic Express routes, although it does not
          support pattern matching.
          <br />
          <br />
          Query strings are not part of the route path.
        </p>
        <p className="ptext">Route paths based on strings:</p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`
This route path will match requests to the root route, /.

app.get('/', (req, res) => {
  res.send('root')
})
This route path will match requests to /about.

app.get('/about', (req, res) => {
  res.send('about')
})
This route path will match requests to /random.text.

app.get('/random.text', (req, res) => {
  res.send('random.text')
})`}
        </SyntaxHighlighter>
        <p className="ptext">Route paths based on string patterns:</p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`
This route path will match acd and abcd.

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
This route path will match /abe and /abcde.

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})`}
        </SyntaxHighlighter>
        <p className="ptext">Route paths based on regular expressions:</p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`
This route path will match anything with an “a” in it.

app.get(/a/, (req, res) => {
  res.send('/a/')
})
This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})`}
        </SyntaxHighlighter>
        <br />
        <h5 className="subsub">Route Parameters</h5>
        <p className="ptext">
          Route parameters are named URL segments that are used to capture the
          values specified at their position in the URL. The captured values are
          populated in the <code>req.params</code> object, with the name of the
          route parameter specified in the path as their respective keys.
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }`}
        </SyntaxHighlighter>
        <p className="ptext">
          To define routes with route parameters, simply specify the route
          parameters in the path of the route as shown below
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`}app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})`}
        </SyntaxHighlighter>
        <p className="ptext">
          The name of route parameters must be made up of “word characters”
          ([A-Za-z0-9_]). Since the hyphen (-) and the dot (.) are interpreted
          literally, they can be used along with route parameters for useful
          purposes.
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }`}
        </SyntaxHighlighter>
        <p className="ptext">
          To have more control over the exact string that can be matched by a
          route parameter, you can append a regular expression in parentheses
          (()):
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}`}
        </SyntaxHighlighter>
        <p className="ptext">
          Because the regular expression is usually part of a literal string, be
          sure to escape any \ characters with an additional backslash, for
          example \\d+. In Express 4.x, the * character in regular expressions
          is not interpreted in the usual way. As a workaround, use instead of
          *. This will likely be fixed in Express 5.
        </p>
        <h5 className="subsub">Route Handlers</h5>
        <p className="ptext">
          You can provide multiple callback functions that behave like
          middleware to handle a request. The only exception is that these
          callbacks might invoke next('route') to bypass the remaining route
          callbacks. You can use this mechanism to impose pre-conditions on a
          route, then pass control to subsequent routes if there’s no reason to
          proceed with the current route. Route handlers can be in the form of a
          function, an array of functions, or combinations of both, as shown in
          the following examples. A single callback function can handle a route.
          For example:
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})`}
        </SyntaxHighlighter>
        <p className="ptext">
          More than one callback function can handle a route (make sure you
          specify the next object). For example:
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})`}
        </SyntaxHighlighter>
        <p className="ptext">
          An array of callback functions can handle a route. For example:
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
A combination of independent functions and arrays of functions can handle a route. For example:

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})`}
        </SyntaxHighlighter>
        <br />
        <h5 className="subsub">Response Methods</h5>
        <p className="ptext">
          The methods on the response object (res) in the following table can
          send a response to the client and terminate the request-response
          cycle. If none of these methods are called from a route handler, the
          client request will be left hanging.
        </p>
        <ul>
          <li>
            <code>res.download()</code> Prompt a file to be downloaded.
          </li>
          <li>
            <code>res.end()</code> End the response process.
          </li>
          <li>
            <code>res.json()</code> Send a JSON response.
          </li>
          <li>
            <code>res.jsonp()</code> Send a JSON response with JSONP support.
          </li>
          <li>
            <code>res.redirect()</code> Redirect a request.
          </li>
          <li>
            <code>res.render()</code> Render a view template.
          </li>
          <li>
            <code>res.send()</code> Send a response of various types.
          </li>
          <li>
            <code>res.sendFile()</code> Send a file as an octet stream.
          </li>
          <li>
            <code>res.sendStatus()</code> Set the response status code and send
            its string representation as the response body.
          </li>
          <li>
            <code>app.route()</code> You can create chainable route handlers for
            a route path by using <code> app.route()</code>. Because the path is
            specified at a single location, creating modular routes is helpful,
            as is reducing redundancy and typos.
          </li>
        </ul>
        <p className="ptext">
          chained route handlers that are defined by using
          <code> app.route()</code>.
        </p>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })`}
        </SyntaxHighlighter>
        <h5 className="subsub">express.Router</h5>
        <p className="ptext">
          Use the express.Router class to create modular, mountable route
          handlers. A Router instance is a complete middleware and routing
          system; for this reason, it is often referred to as a “mini-app”.
        </p>
        <p className="ptext">
          The following example creates a router as a module, loads a middleware
          function in it, defines some routes, and mounts the router module on a
          path in the main app.
        </p>
        Create a router file named birds.js in the app directory, with the
        following content:
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {`const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router
Then, load the router module in the app:

const birds = require('./birds')

// ...

app.use('/birds', birds)]`}
        </SyntaxHighlighter>

        <p className="ptext">
          The app will now be able to handle requests to /birds and
          /birds/about, as well as call the timeLog middleware function that is
          specific to the route.
        </p>
      </div>
    </div>
  );
}
export default ExpressFileRouting;
