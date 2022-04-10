import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_04() {
  let TopPic = "media/dashdashboardpage.png";
  let Title = "DashboardPage.js";
  let mark = `
  - ##### *Header* constructs the overall site header
  - ##### *DashboardProfileWidget* is the dashboard landing page.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10_03">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post10_05">
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
