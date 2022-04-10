import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

export function Post10() {
  let TopPic = "media/dashdashboard.png";
  let Title = "Dashboard Overview";
  let mark = `The Alerts for Good service sends text messages to users when weather, corona virus, or air quality alerts are issued for the selected zip codes.


  ##### On the dashboard, users can:
  #### Profile\r\n- Edit profile info\r\n- Change their password\r\n- Update the cell phone number to receive alerts\r\n\r\n#### Locations\r\n- Add, change, or delete alert locations\r\n- Get the most populous zip code for a city and state.\r\n- Have any number of locations within the US\r\n- Specify which types of alerts to get for each location.\r\n- Keep a location in the list and temporarily disable alerts for it.\r\n- Give locations nicknames (Mom's house, Office, etc.)\r\n\r\n#### Friends\r\n- Create a list of friends to also receive alerts.\r\n- Specify one location for the friend to get alerts for.\r\n- Specify what type of alerts to send for the location.\r\n- Add, update, and delete friends from the list.\r\n- Friends get an opt-in text they must respond to before any alerts are sent.\r\n- Friends are invited to join Alerts for Good to be able to specify more than one location, change alert types, and enable/disable alerts as needed.\r\n\r\n#### Donations\r\n- Alerts for Good is a free service\r\n- Donations are accepted through the *GiveLively* API on the Donations page.`;

  let Section1 = (
    <div>
      <h5 className="subsub">Code Walk</h5>

      <ReactMarkdown children={mark}></ReactMarkdown>

      <div>
      <a className="link-primary " href="/post10_01">
        Next
      </a>
      </div>


    </div>
  );
  return (
    <div className="post-wrapper post-walk">
      <div className="post-img-walk1">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">{Section1}</div>
    </div>
  );
}
