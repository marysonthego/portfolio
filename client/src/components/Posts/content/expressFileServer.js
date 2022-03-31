import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import "components/css/posts.scss";

function ExpressFileServer() {
  return (
    <div>
      <h4 id="express-server">The Simplest Express Server Ever</h4>
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {`const express = require('express');
          const app = express();
          const port = 3000;

          app.get('/', (req, res) => {
          res.send('Hello World!')
          });

          app.listen(port, () => {
          console.log('Example app listening on port 3000')
          });`}
      </SyntaxHighlighter>
      <p className="ptext">
        This app starts a server and listens on port 3000 for connections. The
        app responds with “Hello World!” for requests to the root URL (/). For
        every other path, it will respond with 404 Not Found.
      </p>
    </div>
  );
}

export default ExpressFileServer;
