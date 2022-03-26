import React, {useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';
import dbfile from './content/db.txt';
import controllerFile from './content/controller.txt';
import routesFile from './content/routes.txt';
import serverFile from './content/server.txt';

function Notes(fileName) {
  const [text, setText] = useState();
   fetch(fileName)
    .then(response => response.text())
    .then(textContent => {
      setText(textContent);
    });
  return text;
}

export function Post06() {

  const db = Notes(dbfile);
  const controller = Notes(controllerFile);
  const routes = Notes(routesFile);
  const server = Notes(serverFile);

  let TopPic = "media/sqlite400t.png";
  let Title = "Use SQLite3 for light-weight Database Emulation";

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

  let code5 = `/d/Repo/sqlite3app$ mkdir server

/d/Repo/sqlite3app$ cd server

/d/Repo/sqlite3app/server$
  `;

  let Section1 = (
    <div>
      <p className="post-text">
        In this article I'll show you how to quickly spin-up a database on your
        local Windows machine for testing a React app. We will use React with
        Node and Express, and create a Sqlite3 database for testing. If you
        already know how to install node and set up a React environment{" "}
        <a href="#step2" className="link-primary">
          skip to Step 2
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
        You must restart your computer
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
      <SyntaxHighlighter id="step2"
          language="bash"
          style={nightOwl}
        >
        {code4}
        </SyntaxHighlighter >

      <h4 className="subtitle">Step 2: Configure the Sqlite3 database</h4>

      <p className="post-text">
        Sqlite3 uses SQL commands just like any regular relational database.
        That's why it's so good for quick testing when you do not have access to
        the actual database your application will use. With only a few
        exceptions, you can use the same queries in Sqlite3 you would use in any
        full-fledged database.
      </p>
      <p className="post-text">
        The main difference between Sqlite3 and other databases is that it can
        store data in memory which is not preserved between sessions, or in a
        disk file that Sqlite3 creates for you from the schema you provide. Data
        in a file persists until you delete the file. We'll learn how to create
        a database stored in a file.
      </p>
      <p className="post-text">
        In the project root, create a <code>server</code> directory and{" "}
        <code>cd</code> into it.
      </p>
      <SyntaxHighlighter
          language="bash"
          style={nightOwl}
        >
          {code5}
        </SyntaxHighlighter >

      <p className="post-text">
        The <code>server</code> directory will contain all the files used by
        node, express, and sqlite3.
      </p>
      <p className="post-text">
        In the <code>server</code> directory, create a new file named{" "}
        <code>db.js</code>. This file opens the connection to the database and
        runs a test query, or creates a new database if it doesn't exist. Here's
        the code:
      </p>
      <h5 className="subsub">db.js</h5>
      <SyntaxHighlighter
          language="jsx"
          style={nightOwl}
        >
          {db}
      </SyntaxHighlighter>

      <p className="post-text">Create a new file named <code>controller.js</code>. The controller defines all the queries to the database.</p>
      <h5 className="subsub">controller.js</h5>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          showLineNumbers
        >
        {controller}
      </SyntaxHighlighter>

      <p className="post-text">Next, create the file <code>server.js</code>. This file configures Express to handle communication and implement middleware.</p>
      <h5 className="subsub">server.js</h5>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          showLineNumbers
        >
        {server}
      </SyntaxHighlighter>

      <p className="post-text">The last file we need is <code>routes.js</code>. This file defines the routing between the server and the database. It routes to the queries defined in <code>controller.js</code>. It is common to see <code>server.js</code> and <code>routes.js</code> combined in one file, but if you have a lot of queries, dividing things up this way makes it easier to read.</p>
      <h5 className="subsub">routes.js</h5>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          showLineNumbers
        >
        {routes}
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
