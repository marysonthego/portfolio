import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_03() {
  let TopPic = "media/dashbasepage.png";
  let Title = "BasePage.js";
  let mark = `
  - ##### *Routes* redirects to *BasePage* when the user is logged in.
  - ##### *BasePage* sets the *currentUser* from the *userSlice* in the RTK Query store.
  - ##### /list-customers route is added for admins.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10_02">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post10_04">
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
