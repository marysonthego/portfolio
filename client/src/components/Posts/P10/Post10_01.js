import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_01() {
  let TopPic = "media/dashindex.png";
  let Title = "index.js";
  let mark = `- #### the entry point to the app\r\n- #### Uses the Metronic Theme\r\n- #### React Router V5\r\n- #### Redux Tookkit Query aka (RTK Query)`;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post10_02">
        Next
      </a>
      </div>
    </div>
  );
  return (
    <div className="post-wrapper post-walk">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="post-img-walk1">
        <img src={TopPic} alt="Post" />
      </div>

      <div className="sec01">{Section1}</div>

    </div>
  );
}
