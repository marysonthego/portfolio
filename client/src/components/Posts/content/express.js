//import hljs from "highlight.js";
//import "highlight.js/styles/devibeans.css";
import "components/css/posts.scss";

const expressFile = () => {
  //hljs.highlightAll();
  return (
    <div>
      <h4 className="subtitle">Basic routing</h4>
      <p className="ptext">
        Routing refers to determining how an application responds to a client request to a particular endpoint.
      </p>
      <p className="ptext">
        An endpoint is a URI (or path) and a specific HTTP request method (GET,
        POST, PUT, DELETE).
      </p>
      <p className="ptext">
        Each route can have one or more handler functions, which are executed
        when the route is matched.
      </p>
      <p className="ptext">Route definitions have the following structure:</p>
      <pre>
        <code>app.METHOD(PATH, HANDLER)</code>
      </pre>
      <ul>
        <li>app is an instance of express.</li>
        <li>METHOD is an HTTP request method, in lowercase.</li>
        <li>PATH is a path on the server.</li>
        <li>HANDLER is the function executed when the route is matched.</li>
      </ul>
      <p className="ptext">
        This tutorial assumes that an instance of express named app is created
        and the server is running. See the Hello world example. The following
        examples illustrate defining simple routes.
      </p>
      <p className="ptext">Respond with Hello World! on the homepage:</p>
      <pre>
        <code>
          {`app.get(\/, (req, res) => {
    res.send("Hello World!")});`}
        </code>
      </pre>
      <p className="ptext">
        Respond to POST request on the root route (/), the application’s home
        page:
      </p>
      <pre>
        <code>
          {`app.post('\/', (req, res) => {
    res.send('Got a POST request')
    });`}
        </code>
      </pre>
      <p className="ptext">Respond to a PUT request to the /user route:</p>
      <pre>
        <code>
          {`app.put('\/user', (req, res) => {
    res.send('Got a PUT request at /user')
  });`}
        </code>
      </pre>
      <p className="ptext">Respond to a DELETE request to the /user route:</p>
      <pre>
        <code>{`app.delete('\/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  });`}</code>
      </pre>
      <h4 className="subtitle">Serving static files in Express</h4>
      <p className="ptext">
        to serve static files such as images, CSS files, and JavaScript files,
        use the express.static built-in middleware function in Express.
      </p>
      <pre>
        <code>{`express.static(root, [options])`}</code>
      </pre>
      <p className="ptext">
        The root argument specifies the root directory from which to serve
        static assets. For example, use the following code to serve images, CSS
        files, and JavaScript files in a directory named public:{" "}
      </p>
      <pre>
        <code>{`app.use(express.static('public'))`}</code>
      </pre>
      <p className="ptext">
        Now, you can load the files that are in the public directory:</p>
        <a href="http://localhost:3000/images/kitten.jpg" className="link-primary">http://localhost:3000/images/kitten.jpg</a>
        <a href="http://localhost:3000/css/style.css" className="link-primary">http://localhost:3000/css/style.css</a>
        <a href="http://localhost:3000/images/bg.png" className="link-primary">http://localhost:3000/images/bg.png"</a>
        <a href="http://localhost:3000/hello.html"className="link-primary">http://localhost:3000/hello.html</a>

      <p className="ptext">
        Express looks up the files relative to the static directory, so the name
        of the static directory is not part of the URL. To use multiple static
        assets directories, call the express.static middleware function multiple
        times:
      </p>
      <pre>
        <code>
          {`app.use(express.static('public')) app.use(express.static('files'))`}
        </code>
      </pre>
      <p className="ptext">
        Express looks up the files in the order in which you set the static
        directories with the express.static middleware function. NOTE: For best
        results, use a reverse proxy cache to improve performance of serving
        static assets. To create a virtual path prefix (where the path does not
        actually exist in the file system) for files that are served by the
        express.static function, specify a mount path for the static directory,
        as shown below:
      </p>
      <pre>
        <code>{`app.use('\/static', express.static('public'))`}</code>
      </pre>
      <p className="ptext">
        Now, you can load the files that are in the public directory from the
        /static path prefix.
      </p>
      http://localhost:3000/static/images/kitten.jpg
      http://localhost:3000/static/css/style.css
      http://localhost:3000/static/js/app.js
      http://localhost:3000/static/images/bg.png
      http://localhost:3000/static/hello.html
      <p className="ptext">
        However, the path that you provide to the express.static function is
        relative to the directory from where you launch your node process. If
        you run the express app from another directory, it’s safer to use the
        absolute path of the directory that you want to serve:
      </p>
      <pre>
        <code>
          {`const path = require('path') app.use('/static',
          express.static(path.join(__dirname, 'public')))`}
        </code>
      </pre>
    </div>
  );
};

export default expressFile;
