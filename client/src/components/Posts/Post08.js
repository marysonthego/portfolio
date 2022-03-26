import React from "react";
import ExpressFileServer from "./content/expressFileServer.js";

function Notes(fileName) {
  let element;
  fetch(fileName)
    .then((response) => response.text())
    .then((textContent) => {
      element = textContent;
    });
  return element;
}

export function Post08() {
  let TopPic = "media/expressjs2.png";
  let Title = "Express Guide";

  let ExpressServer = ExpressFileServer();
  let Section1 = <div>{ExpressServer}</div>;
  let Toc = (
    <div className="toc">
      Contents
      <hr />
      <ul>
        <li>
          <a className="link-primary " href="/examples">
            Examples
          </a>
        </li>

        <li>
          <a className="link-primary " href="/routing">
            Routing
          </a>
        </li>

        <li>
          <a className="link-primary" href="https://expressjs.com/en/guide/writing-middleware.html">Writing Express Middleware</a>
        </li>

        <li>
          <a className="link-primary" href="https://expressjs.com/en/guide/using-middleware.html">
            Using Middleware
          </a>
        </li>

        <li>
          <a className="link-primary" href="/expressmysql">
            Connect MySQL to Express
          </a>
        </li>

        <li>
          <a className="link-primary" href="/expresspostgres">
            Connect PostgreSQL to Express
          </a>
        </li>

        <li>
          <a className="link-primary" href="/expresssqlite">
            Connect Sqlite to Express
          </a>
        </li>

        <li>
          <a className="link-primary" href="https://expressjs.com/en/guide/error-handling.html">
            Error Handling
          </a>
        </li>

        <li>
          <a className="link-primary" href="https://expressjs.com/en/guide/debugging.html">
            Debugging Express
          </a>
        </li>

        <li>
          <a className="link-primary" href="https://expressjs.com/en/guide/behind-proxies.html">
            Running Express behind a Reverse Proxy
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
        {Section1}
        {Toc}
      </div>

    </div>
  );
}
