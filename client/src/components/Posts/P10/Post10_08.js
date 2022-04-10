import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_08() {
  let TopPic = "media/dashlistlocations.png";
  let Title = "ListLocations.js";
  let mark = `
- The table component listing the user's locations. Also used by the sign-up **ProfileStepper**.
- Called by **LocationsStep**.
- When making a request, you can track the state in several ways. You can always check data, status, and error to determine the right UI to render. In addition, useQuery also provides utility booleans like isLoading, isFetching, isSuccess, and isError for the latest request. Here's an example.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10_07">
        Back
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
