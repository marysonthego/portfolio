import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_06() {
  let TopPic = "media/dashlocationstep.png";
  let Title = "LocationsStep.js";
  let mark = `
- The container component for Alert Locations. Also used by the sign-up **ProfileStepper**
- If **LocationsStep** has a value for **step**, blurbs about each kind of alert are shown in the alerts cards.
- Otherwise, only the alert image and title are shown.
- Builds the page with **LocationsHeader** (in the **LocationsStep** component)
- **AddLocationForm**
- **ListLocations** table of current locations for the user.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10_05">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post10_07">
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
