import React from "react";
import ReactMarkdown from "react-markdown";

export function Post1003() {
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
      <a className="link-primary-walk" href="/post1002">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post1004">
        Next
      </a>
      </div>
    </div>
  );
  return (
    <div className="post-wrapper post-walk">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="post-img-walk1">
        <img src={TopPic} alt="Post" className="sec01img" />
      </div>

      <div className="sec01">{Section1}</div>

    </div>
  );
}
