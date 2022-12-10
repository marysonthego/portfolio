import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "components/css/posts.scss";

function ExpressFileBasicRouting() {
  return (
    <div>
      <h4 className="subtitle">Basic Routing</h4>
      <p className="ptext">
        <code>Routing</code> refers to determining how an application responds
        to a client request to a particular endpoint.
      </p>
      <p className="ptext">
        An <code>endpoint</code> is a URI (or path) and a specific HTTP request
        method (GET, POST, PUT, DELETE).
      </p>
      <p className="ptext">
        Each route can have one or more <code>handler</code> functions, which
        are executed when the route is matched.
      </p>
      <p className="ptext">Route definitions have the following structure:</p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.METHOD(PATH, HANDLER)`}
      </SyntaxHighlighter>
      <ul>
        <li>
          <code>app</code> is an instance of express.
        </li>
        <li>
          <code>METHOD</code> is an HTTP request method, in lowercase.
        </li>
        <li>
          <code>PATH</code> is a path on the server.
        </li>
        <li>
          <code>HANDLER</code> is the function executed when the route is
          matched.
        </li>
      </ul>
      <p className="ptext">
        This tutorial assumes that an instance of express named <code>app</code>{" "}
        is created and the server is running. The
        following examples illustrate defining simple routes.
      </p>
      <p className="ptext">Respond with Hello World! on the homepage:</p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.get(/, (req, res) => {
    res.send("Hello World!")});`}
      </SyntaxHighlighter>
      <p className="ptext">
        Respond to a POST request on the root route (/), the application’s home
        page:
      </p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.post('/', (req, res) => {
    res.send('Got a POST request')
    });`}
      </SyntaxHighlighter>
      <p className="ptext">Respond to a PUT request to the /user route:</p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  });`}
      </SyntaxHighlighter>
      <p className="ptext">Respond to a DELETE request to the /user route:</p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  });`}
      </SyntaxHighlighter>
      <h4 className="subtitle">Serving static files in Express</h4>
      <p className="ptext">
        to serve static files such as images, CSS files, and JavaScript files,
        use the <code>express.static</code> built-in middleware function in
        Express.
      </p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`express.static(root, [options])`}
      </SyntaxHighlighter>
      <p className="ptext">
        The root argument specifies the root directory from which to serve
        static assets. For example, use the following code to serve images, CSS
        files, and JavaScript files in a directory named public:{" "}
      </p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.use(express.static('public'))`}
      </SyntaxHighlighter>
      <p className="ptext">
        Now, you can load the files that are in the public directory:
      </p>
      http://localhost:3000/images/kitten.jpg<br/>
      http://localhost:3000/css/style.css<br/>
      http://localhost:3000/images/bg.png<br/>
      http://localhost:3000/hello.html<br/>
      <br />
      <p className="ptext">
        Express looks up the files relative to the static directory, so the name
        of the static directory is not part of the URL.
        <br /> To use multiple static assets directories, call the
        express.static middleware function multiple times:
      </p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.use(express.static('public')) app.use(express.static('files'))`}
      </SyntaxHighlighter>
      <p className="ptext">
        Express looks up the files in the order in which you set the static
        directories with the express.static middleware function.
        </p>
        <SyntaxHighlighter language="asciidoc" style={xonokai} wrapLongLines >
        NOTE: For best results, use a reverse proxy cache to improve
        performance of serving static assets.
        A forward proxy is a web proxy that the client puts forward between itself and the target server. The reverse proxy is at the other end, between the server and the client. In other words, a forward proxy is used by a client, whereas a reverse proxy is used by an internet server.
        </SyntaxHighlighter>
        <p className="ptext">
        To create a <code>virtual path prefix</code> (where the path does not actually
        exist in the file system) for files that are served by the
        express.static function, specify a mount path for the static directory,
        as shown below:
      </p>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`app.use('/static', express.static('public'))`}
      </SyntaxHighlighter>
      <p className="ptext">
        Now, you can load the files that are in the public directory from the
        /static path prefix.
      </p>
      http://localhost:3000/static/images/kitten.jpg
      <br />
      http://localhost:3000/static/css/style.css
      <br />
      http://localhost:3000/static/js/app.js
      <br />
      http://localhost:3000/static/images/bg.png
      <br />
      http://localhost:3000/static/hello.html
      <br /><br />
      <SyntaxHighlighter language="asciidoc" style={xonokai} wrapLongLines >
        NOTE: The path that you provide to the express.static function is
        relative to the directory from where you launch your node process. If
        you run the express app from another directory, it’s safer to use the
        absolute path of the directory that you want to serve:
        </SyntaxHighlighter>
      <SyntaxHighlighter language="bash" style={xonokai}>
        {`const path = require('path') app.use('/static',
          express.static(path.join(__dirname, 'public')))`}
      </SyntaxHighlighter>
    </div>
  );
}

export default ExpressFileBasicRouting;
