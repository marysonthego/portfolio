import React from 'react';

function ExpressExamples() {
  let TopPic = "media/expressjs2.png";
  let Title = "Express Examples";
let Examples =
<div>
<p>Express <a className="link-primary" href="https://expressjs.com/en/4x/api.html">API</a>
</p>
<ul>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/auth">auth</a> - Authentication with login and password</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/content-negotiation">content-negotiation</a> - HTTP content negotiation</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/cookie-sessions">cookie-sessions</a> - Working with cookie-based sessions</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/cookies">cookies</a> - Working with cookies</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/downloads">downloads</a> - Transferring files to client</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/ejs">ejs</a> - Working with Embedded JavaScript templating (ejs)</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/error-pages">error-pages</a> - Creating error pages</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/error">error</a> - Working with error middleware</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/hello-world">hello-world</a> - Simple request handler</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/markdown">markdown</a> - Markdown as template engine</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/multi-router">multi-router</a> - Working with multiple Express routers</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/multipart">multipart</a> - Accepting multipart-encoded forms</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/mvc">mvc</a> - MVC-style controllers</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/online">online</a> - Tracking online user activity with <code>online</code> and <code>redis</code> packages</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/params">params</a> - Working with route parameters</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/resource">resource</a> - Multiple HTTP operations on the same resource</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/route-map">route-map</a> - Organizing routes using a map</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/route-middleware">route-middleware</a> - Working with route middleware</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/route-separation">route-separation</a> - Organizing routes per each resource</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/search">search</a> - Search API</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/session">session</a> - User sessions</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/static-files">static-files</a> - Serving static files</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/vhost">vhost</a> - Working with virtual hosts</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/view-constructor">view-constructor</a> - Rendering views dynamically</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/view-locals">view-locals</a> - Saving data in request object between middleware calls</li>
<li><a  className="link-primary" href="https://github.com/expressjs/express/tree/master/examples/web-service">web-service</a> - Simple API service</li>
</ul>
</div>;

return (
  <div className="post-wrapper post">
    <div className="post-img-top">
      <img src={TopPic} alt="Post" id="express-examples"/>
    </div>
    <h3 className="post-title text-center">{Title}</h3>
    <div className="sec01">
        {Examples}
    </div>
  </div>
);
};
export default ExpressExamples;
