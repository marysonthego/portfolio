import React from "react";
import ReactMarkdown from "react-markdown";

export function Post1002() {
  let TopPic = "media/dashapp.png";
  let Title = "App.js";
  let mark = `
  - ##### *DebugRouter* is enabled automatically only in Development mode.

  - ##### *AuthInit* shows/hides the opening splashscreen.

  - ##### *Routes* redirects based on whether or not the user is logged in.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post1001">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post1003">
        Next
      </a>
      </div>
    </div>
  );
  return (
    <div className="post-wrapper post-walk">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="post-img-walk1">
        <img src={TopPic} alt="Post"  className="sec01img" />
      </div>

      <div className="sec01">{Section1}</div>

    </div>
  );
}
