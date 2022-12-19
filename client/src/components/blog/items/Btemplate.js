import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DefsB221121, DefsB221123, DefsB221201 } from "./JoinDefinitions";


export const Btemplate = () => {

  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "Blog Template Title";
  const Created = "Some-month 01, 2022";
  const TopImage = "media/template1.jpg";
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blogListItem">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }

  const Syntax1 = `This is some example Syntax.
  <script>
  window.onload = () => {
    const baseOptions = {
      wasm_path: "%PUBLIC_URL%/packages/runtime/lib/v86.wasm",
      memory_size: 128 * 1024 * 1024,
      filesystem: {
        basefs: "%PUBLIC_URL%/packages/runtime/filesystem/filesystem.json",
        baseurl: "filesystem/",
      },
      screen_container: document.getElementById("screen_container"),
      serial_container_xtermjs: document.getElementById("terminal"),
      network_relay_url: "wss://relay.widgetry.org/",
      autostart: true,
      disable_keyboard: true,
      disable_mouse: true,
      disable_speaker: true,
      acpi: true,
    };
  };
  </script>
  `;

  const Code = ({ Syntax }) => {
    return (
      <div className="blogPostSyntax">
      <SyntaxHighlighter language="jsx" style={xonokai} wrapLongLines>
        {Syntax}
      </SyntaxHighlighter>
      </div>
    );
  };

  const Sect1 = () => {
    return (
      <>
  <h2 className="blogPostText">This is h2 className="blogPostText".</h2>
          <p className="blogPostText">
            This is some p className="blogPostText"
            This subject felt like a black hole. I needed to do some research. So I looked around to see what the current state of the art is at tutorial sites, online classes, and blogs where people go to learn SQL. A few big, pay-walled sites have what I'm looking for - you can practice right alongside the course materials; but most sites either teach SQL through YouTube or use screen-shots to show the results you should get. In either case, you're on your own to find a way to practice - and in my opinion, <i>practice is everything</i>.
          </p>
          <p className="blogPostText">
            One place that is both free <i>and</i> interactive is <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc" target="_blank" rel="noreferrer">w3schools</a>.  <i>How do they do it?</i> At the bottom of the page is a tiny link about their <i>Try-SQL Editor</i>. I clicked. Maybe this is the answer I'm looking for?
            </p>
            <p className="blogPostQuote"> p className="blogPostQuote"
            <i>"Our Try-SQL Editor uses WebSQL to demonstrate SQL. A Database-object is created in your browser, for testing purposes. You can try any SQL statement, and play with the Database as much as you like. The Database can be restored at any time, simply by clicking the "Restore Database" button. WebSQL stores a Database locally, on the user's computer. Each user gets their own Database object. WebSQL is supported in Chrome, Safari, Opera, and Edge(79). If you use another browser you will still be able to use our Try SQL Editor, but a different version, using a server-based ASP application, with a read-only Access Database, where users are not allowed to make any changes to the data."</i>
          </p>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blogPostText">Section Two h2 className="blogPostText"</h2>
        <p className="blogPostText">Section two text p className="blogPostText"</p>

      </>
    );
  };

  const Definitions = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blogPostText">Definitions</h2>

          <ul>
            <DefsB221201 />
            <DefsB221123 />
            <DefsB221121 />
          </ul>
        </div>
      </>
    );
  };

  const Schema = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blogPostText">Schema</h2>
          <div className="blogPostTopImg">
            <img src={ModelImage} title="Schema" alt="Schema" />
          </div>
        </div>
      </>
    );
  };

  const Iframe = () => {
    return (
    <div className="iframeBox">
      <iframe
        className="codesandbox"
        title="StackBlitz"
        width="100%"
        src="https://stackblitz.com/edit/node-pxt8mk?embed=1&index.js&hideExplorer=1&hideNavigation=1&view=editor"
      ></iframe>
    </div>
    );
  };

    return (
      <div className="blogPostContainer">
        <article className="blogPostPage">
        <div className="blogPostTopImg">
          <img
            src={TopImage}
            title="Img title"
            alt="Top img Alt"
          />
           </div>
          <h1 className="blogPostTitle">{Title}</h1>
          <h2 className="blogPostDate">{Created}</h2>
          <Definitions/>
          <Sect1 />
          <Schema />
          <Code Syntax={Syntax1} />
          <Sect2 />
          <Iframe />

          <p className="blogPostText"> p className="blogPostText"</p>
          <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
        </article>
      </div>
    );
};
