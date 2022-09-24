import React from "react";
import ReactMarkdown from "react-markdown";

export function Post1005() {
  let TopPic = "media/dashdashboardprofilewidget.png";
  let Title = "DashboardProfileWidget.js";
  let mark = `
- A page of links that mirrors the links in the slider and top menus.
- **UserProfileDropdown** is where users can logout, make a donation, or recurring donation by linking to the *GiveLively* API.
- Admins also get a **List Customers** link on the dashboard and on the menus.
- The Account link opens **UserProfilePage**, a wrapper to the components that let users update their account profile and change their password.
- The links to /friends-list and /locations-list work the same.
- Locations goes to **LocationsStep** (also used by **ProfileStepper**).
- Friends goes to **FriendsStep** (also used by **ProfileStepper**).
  `;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary-walk" href="/post1004">
        Back
      </a>
      <a className="link-primary " margin="10px" href="/post1006">
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
