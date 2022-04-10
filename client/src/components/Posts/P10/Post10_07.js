import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10_07() {
  let TopPic = "media/dashaddlocationform.png";
  let Title = "AddLocationForm.js";
  let mark = `
- The form component where users add a new location. Also used by the sign-up **ProfileStepper**.
- Called by **LocationsStep**.
- **HandleChange** updates local locations state with new data.
- **handleLocationsRefetch** forces a refetch of **apiSlice** to keep the locations table current.
- **OnSaveLocationClicked** async
  - Calls **useFindZipMutation** to query for the zipcode of the provided city and state. If it finds it, it updates local **location** state. Otherwise it sets an error message and shows it in a snackbar pop-up.
  - If the zip was found, it checks for a duplicate location entry for the user with **useFindDuplicateLocationMutation**.
  - If **useFindDuplicateLocationMutation** is successful, there is a duplicate location. The user gets a snackbar error message.
  - If **useFindDuplicateLocationMutation** fails, this is a good location. Set **canSave** to true.
  - Update the **locationsSlice** with the new location.
  - Update the **stepperSlice** to set the state of the forward and back arrows.
- **HandleOnBlur** fixes capitalization, and calls **FormValidation** if the field should be validated.
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post10_06">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post10_08">
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
