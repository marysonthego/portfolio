import React, {useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';
import nodejsFile from './examples/nodejs.txt';
import httpFile from './examples/http.txt';
import flamegraphFile from './examples/flamegraphs.txt';
import backpressureFile from './examples/backpressure.txt';
import profilingFile from './examples/profiling.txt';
import dependenciesFile from './examples/dependencies.txt';
import debuggingFile from './examples/debugging.txt';

function Notes(fileName) {
  const [text, setText] = useState();
   fetch(fileName)
    .then(response => response.text())
    .then(textContent => {
      setText(textContent);
    });
  return text;
}

export function Post07() {

  const nodejs = Notes(nodejsFile);
  const http = Notes(httpFile);
  const flamegraph = Notes(flamegraphFile);
  const backpressure = Notes(backpressureFile);
  const profiling = Notes(profilingFile);
  const dependencies = Notes(dependenciesFile);
  const debugging = Notes(debuggingFile);

  let TopPic = "media/node.png";
  let Title = "Node JS Guide";

  let code1 = `/d/Repo$ npx create-react-app sqlite3app

  Creating a new React app in D:\\Repo\\sqlite3app.

  Installing packages. This might take a couple of minutes.
  Installing react, react-dom, and react-scripts with cra-template...

    ...

  Success! Created sqlite3app at D:\\Repo\\sqlite3app

  We suggest that you begin by typing:

    cd sqlite3app
    npm start

  Happy hacking!

/d/Repo$`;

  let code2 = `/d/Repo/sqlite3app$ npm -v
8.1.2

/d/Repo/sqlite3app$ node -v
v16.13.1
  `;

  let code3 = `/d/Repo/sqlite3app$ npm i express

/d/Repo/sqlite3app$ npm i sqlite3
  `;

  let code4 = `  "dependencies": {
    "body-parser": "^1.19.2",
    "compression": "^1.7.4",
    "express": "^4.17.3",
    "path": "^0.12.7",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "sqlite3": "^5.0.2"
  }, `;

  let Toc = (
    <div className="toc">
      Contents
      <hr/>
      <ul>
        <li>
        <a className="link-primary " href="#part1">
          Part 1: Install Node, Express, and React
        </a>
        </li>

      <li>
        <a className="link-primary " href="#part2">
          Part 2: Node Basics
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part3">
          Part 3: Anatomy of an HTTP Transaction
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part4">
          Part 4: Flame Graphs
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part5">
          Part 5: Backpressure in Streams
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part6">
          Part 6: Performance Profiling
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part7">
          Part 7: Node Dependencies
        </a>
      </li>
      <li>
        <a className="link-primary " href="#part8">
          Part 8: Debugging Node Applications
        </a>
      </li>
      </ul>
    </div>
  );


  let Section1 = (
    <div>
      <div className="toc">{Toc}</div>
      <p className="post-text">
        This article covers Node JS. If you
        already know how to install node and set up a React environment{" "}
        <a href="#part2" className="link-primary">
          skip to Part 2: Node Basics
        </a>
        .
      </p>
      <h4 className="subtitle">
        Step 1: Install Node, React, Express, and Sqlite3
      </h4>
      <h5 className="subsub">
        Install node and npm package manager for Windows
      </h5>
      <p className="post-text">
        On Windows, node and npm get installed together from an executable
        installer.
        <br />
        Download the msi installer from{" "}
        <a href="https://nodejs.org/en/" className="link-primary">
          nodejs.org
        </a>
        &nbsp;and run it, taking the defaults.
        <br />
        <br />
        <b>You must restart your computer</b>
        <br />
        <br />
        Test to be sure node and npm are installed by running node and npm with
        the version flag (-v):
      </p>
      <SyntaxHighlighter
          language="bash"
          style={nightOwl}
        >
          {code2}
        </SyntaxHighlighter>

      <h5 className="subsub">Install React using create-react-app</h5>
      <p className="post-text">
        Let's create a fresh React app named <code> sqlite3app</code> on the
        command line by running the command
        <br /> <code> npx create-react-app sqlite3app</code> <br />
      </p>
      <SyntaxHighlighter
          language="bash"
          style={nightOwl}
        >
          {code1}
        </SyntaxHighlighter>

      <p className="post-text">
        As you can see, <code>create-react-app </code> created a new
        subdirectory named <code>sqlite3app</code> and installed a basic React
        application in it.
      </p>
      <h5 className="subsub">Install Express and Sqlite3 with npm</h5>
      <p className="post-text">
        Now we'll use <code>npm</code> to install the rest of the dependencies
        we need. In the command prompt, be sure you are in the{" "}
        <code>sqlite3app</code> directory created by{" "}
        <code>create-react-app</code>, then execute the following commands:
      </p>
      <SyntaxHighlighter
          language="bash"
          style={nightOwl}
        >
          {code3}
        </SyntaxHighlighter >

      <p className="post-text">
        Continue by installing <code>path</code>, <code>body-parser</code>, and{" "}
        <code>compression</code>. The dependency list in{" "}
        <code>package.json</code> should now contain these items at a minimum,
        though the versions may be different:
      </p>
      <SyntaxHighlighter id="part2"
          language="bash"
          style={nightOwl}
        >
        {code4}
        </SyntaxHighlighter >

      <h4 className="subtitle">Part 2: Node Basics</h4>
      <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {nodejs}
        </SyntaxHighlighter>

        <h4 className="subtitle" id="part3">Part 3: Anatomy of an HTTP Transaction</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {http}
        </SyntaxHighlighter>

        <h4 className="subtitle" id="part4">Part 4: Flame Graphs</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {flamegraph}
        </SyntaxHighlighter>

        <h4 className="subtitle" id="part5">Part 5: Backpressure in Streams</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {backpressure}

        </SyntaxHighlighter>
        <h4 className="subtitle" id="part6">Part 6: Performance Profiling</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {profiling}
        </SyntaxHighlighter>

        <h4 className="subtitle" id="part7">Part 7: Node Dependencies</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {dependencies}
        </SyntaxHighlighter>

        <h4 className="subtitle" id="part8">Part 8: Debugging Node Applications</h4>
        <SyntaxHighlighter
          language="unrealscript"
          style={nightOwl}
          wrapLongLines
        >
          {debugging}
        </SyntaxHighlighter>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">{Section1}</div>
    </div>
  );
};
