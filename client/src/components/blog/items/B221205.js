import React from "react";
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";


export const B221205 = () => {
  const location = useLocation();

  const Title = "Ideas Series - Embed a Live Database in a Web Page";
  const Created = "December 5, 2022";
  const TopImage = "media/ideasw1024.png"
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const Syntax1 = `// public/index.html
  <link rel="stylesheet" href="https://unpkg.com/xterm@4.19.0/css/xterm.css" />
  <link rel="stylesheet" href="%PUBLIC_URL%/packages/runtime//styles.css" />
  <script src="https://unpkg.com/xterm-addon-fit@0.5.0/lib/xterm-addon-fit.js"></script>
  <script src="https://unpkg.com/xterm@4.19.0/lib/xterm.js"></script>
  <script src="%PUBLIC_URL%/packages/runtime/lib/libv86.js"></script>

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

    const params = new URL(document.location).searchParams;
    const boot = params.get("boot") === "true";

    if (boot) {
      document.getElementById("screen_container").style = "display:block";
      document.getElementById("terminal").style = "";
    }

    const bzimageUrl = "%PUBLIC_URL%/packages/runtime/filesystem/27d6e559.bin";
    const options = {
      ...baseOptions,
      ...(boot
        ? {
            bzimage: {
              url: bzimageUrl,
            },
            cmdline: [
              "rw",
              "root=host9p rootfstype=9p rootflags=version=9p2000.L,trans=virtio,cache=loose quiet acpi=off console=ttyS0 tsc=reliable mitigations=off random.trust_cpu=on nowatchdog page_poison=on",
            ].join(" "),
            bios: {
              url: "%PUBLIC_URL%/packages/runtime/bios/seabios.bin",
            },
            vga_bios: {
              url: "%PUBLIC_URL%/packages/runtime/bios/vgabios.bin",
            },
          }
        : { initial_state: { url: "%PUBLIC_URL%/packages/runtime/state/state.zst" } }),
    };

    var emulator = new V86Starter(options);

    function initTerm() {
      const fitAddon = new FitAddon.FitAddon();
      emulator.serial_adapter.term.loadAddon(fitAddon);
      fitAddon.fit();
      window.addEventListener("resize", () => fitAddon.fit());
    }

    function sendBackgroundCommands(commands) {
      const filename = \`\${(Math.random() + 1).toString(36).substring(7)}.sh\`;
      emulator.create_file(
        \`/inbox/\${filename}\`,
        new TextEncoder("UTF-8").encode(commands.join("\n"))
      );
    }

    if (!boot) {
      emulator.add_listener("emulator-ready", function () {
        initTerm();
        setTimeout(() => {
          sendBackgroundCommands(["/etc/init.d/S40network restart"]);
          emulator.serial0_send(
            \`\\! stty rows \${emulator.serial_adapter.term.rows} cols \${emulator.serial_adapter.term.cols} && reset\n\`
          );
          emulator.serial_adapter.term.focus();
        }, 0);
      });
    }

    var state;
  };
</script>
`;

const Code = ({ Syntax }) => {
  return (
    <SyntaxHighlighter language="jsx" style={xonokai} wrapLongLines>
      {Syntax}
    </SyntaxHighlighter>
  );
};

  const Sect1 = () => {
    return (
      <>
        <p className="blogText"> <br/>
          <intro><em>This is the first </em></intro>in a series of occasional posts about ideas I want to pursue. I feel obligated to warn you before the start: most of my ideas tend to involve things I don't know how to do! So, "ideas" posts will usually begin with an <i>"odessey of discovery"</i>, and I can't guarantee they'll always end well! This one does, though, so I hope you enjoy the ride!
        </p>
        <p className="blogText">
          In this post, I explain how I did research, what I learned, the dead-ends I went down, and how I ultimately arrived at a solution.
        </p>
        <p className="blogText">
            I suppose the first question I should answer is <i>why I wanted to embed a live database in a web page in the first place?</i> When I started working on the <a href="/b221121" >SQL Joins</a> series, it quickly became apparent to me that I needed an interactive database connection<i> right on the page</i>. I wanted a place where users could enter queries and get live results. Screen-shots weren't gonna cut it. I wanted a place where people could experiment, experiment again, and repeat.
          </p>
          <h2 className="blog">What is the current state of the art?</h2>
          <p className="blogText">
            I needed to do some research, so I looked around to see what the current state of the art is at tutorial sites, online classes, and blogs where people go to learn SQL. A few big, pay-walled sites have what I'm looking for - you can practice right alongside the course materials; but,  most sites either teach SQL through YouTube or use screen-shots to show the results you should get. In either case, you're on your own to find a way to practice - and in my opinion, <i>practice is everything</i>.
          </p>
          <p className="blogText">
            One place that is both free <i>and</i> interactive is <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc" target="_blank" rel="noreferrer">w3schools</a>.  <i>How do they do it?</i> At the bottom of the page I noticed a tiny link about their <i>Try-SQL Editor</i>. I clicked on it. Maybe this was the answer I was looking for?
            </p>
            <p className="blogQuote">
            <i>"Our Try-SQL Editor uses WebSQL to demonstrate SQL. A Database-object is created in your browser, for testing purposes. You can try any SQL statement, and play with the Database as much as you like. The Database can be restored at any time, simply by clicking the "Restore Database" button. WebSQL stores a Database locally, on the user's computer. Each user gets their own Database object. WebSQL is supported in Chrome, Safari, Opera, and Edge(79). If you use another browser you will still be able to use our Try SQL Editor, but a different version, using a server-based ASP application, with a read-only Access Database, where users are not allowed to make any changes to the data."</i>
          </p>

          <h2 className="blog">A Clue!</h2>
          <p className="blogText">
            My questions: What is <i>WebSQL</i>? And how do you <i>create a database in the user's browser</i>? Time for more research.
          </p>
          <p className="blogText">
            The bad news. It didn't take long to find out that WebSQL is <a href="https://developer.chrome.com/blog/deprecating-web-sql/" target="_blank" rel="noreferrer">deprecated</a>. Worse, the alternative Chrome suggests (<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target="_blank" rel="noreferrer">Web Storage API</a>) uses local/session storage, or indexedDB to persist data in the browser. Sort of like cookies. That's fine for some things, but no substitute for running live queries in a database!
          </p>
          <p className="blogText">
            Chrome Developers know this though, and say, <i>"[we're] working with the SQLite community on a replacement for Web SQL based on SQLite implemented in WebAssembly (Wasm)."</i> More research reveals that SQLite3 in Wasm is <a href="https://sqlite.org/wasm/doc/trunk/demo-123.md" target="_blank" rel="noreferrer">available now</a>. The problem is, I don't want to use it. I'll explain why in a minute, but first...
          </p>
          <h2 className="blog">A detour! What is Wasm?</h2>
          <p className="blogText">
            Wasm is short for <a href="https://developer.mozilla.org/en-US/docs/WebAssembly" target="_blank" rel="noreferrer">WebAssembly</a> - a low-level binary instruction set. You can write in human-readable languages such as C, C++, Rust, .NET, or AssemblyScript and compile to binary. The original goal was to encapsulate a very fast executable <a href="https://andreabergia.com/blog/2015/03/stack-based-virtual-machines-1/" target="_blank" rel="noreferrer">virtual stack machine</a> in Javascript so it could run in the browser. (Nowdays, it can run stand-alone too.) Wasm is exciting precisely because it can embed big applications, unimaginable before, running at near-native speed right in the browser! All you need is a fairly <a href="https://webassembly.org/" target="_blank" rel="noreferrer">modern one</a> .
          </p>
          <p className="blogText">
            I said I'd explain why I don't like SQLite for learning. In my opinion, it drifts uncomfortably far from the standard SQL syntax used by most databases you're likely to use for full-stack development. When you invest time in learning something, what you learn should be as widely applicable as possible. I think MySQL, MSSql, MariaDB, or Postgres are better, more mainstream choices. They do have their quirks, but these are mostly differences in database administration - not SQL query language. Given that, you can imagine my excitement when a recent <a href="https://news.ycombinator.com/item?id=32498435" target="_blank" rel="noreferrer">Hacker News thread</a> pointed to a Postgres implementation in Wasm! </p>

          <h2 className="blog">Implementation Decisions</h2>
          <p className="blogText">
            I'd estimate the reading, research, and Googling took about half the day. The rest was spent  doing an implementation. As you might expect, there are already competitors for Postgres Wasm, and I spent some time playing with each one. Most of them have a PSQL interpreter embedded in a bunch of stuff I don't need or want. My goal was to find one where it looked straight-forward to tease out the xTerm running PSQL from all the bells and whistles.
            </p>
            <p className="blogText">
              <br/>
            <intro><em>I really like </em></intro>the open-source <i>collabenation</i>  (<i>collaborative implementation</i>, get it?) between <a href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">Supabase and Snaplet</a>. The way they've done it, Wasm embeds a stripped-down Linux OS running a Postgres server at near-native speed. Here's what a demo of their no-frills interface <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">looks like</a>.
          </p>  <br/>
          <h2 className="blog">Quick and Dirty Implementation</h2>
            <p className="blogText">
            Here we go! The rest of this post explains how <i>YOU TOO</i> can spin up Postgres running in your browser in an afternoon or less!
          </p>
          <p className="blogText">
            My interface isn't beautiful (it's just a black and white xTerm running PSQL in a web page); but thanks to <a href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">Supabase and Snaplet</a>, it's reliable and instant-on. Since it's pre-compiled, there's no waiting for initialization, and no build step. Just drop in the runtime and go. You can type in SQL queries, see the results, even delete tables if you want to; but as soon as you refresh the browser, everything is instantly restored to its initial state. It's a great simple-to-implement learning tool or even a collaboration tool!
          </p>

          <p className="blogText">
            Step 1 - clone the repo <br/>
            While you're <a href="https://github.com/snaplet/postgres-wasm" target="_blank" rel="noreferrer">there</a>, give them a Star. They have created an awesome implementation, and even came up with an innovation that supports networking and allows you to transfer files to and from the Wasm instance and your local machine!
          </p>
          <p className="blogText">
          Step 2 - grab the runtime <br/>
            The cloned repo contains a /packages directory with buildroot, runtime, and websockproxy directories inside. You use <code>buildroot </code> to generate a new runtime. <code>websockproxy</code> contains their innovations supporting file sharing and networking. For this project, all we need is the pre-built Wasm runtime. Simply copy the <code>/packages/runtime</code> directory into your own repo at <code>/public/packages/runtime</code>.
          </p>
          <p className="blogText">
          Step 3 - grab the scripts<br/>
            Copy the important bits from <code>/public/packages/index.html</code> into your <code>/public/index.html</code> to load the important stuff from /public/packages/runtime into your app.
          </p>
          <p className="blogText">
            Add these entries in the <code>head</code> section of your <code>/public/index.html</code>. Make changes to use the path <code>%PUBLIC_URL%</code> as shown below:
          </p>

          <Code Syntax={Syntax1} />
          <br/>
          <p className="blogText">
          Step 4 - Create tables and data in Postgres (optional) <br/>
          You can save initial state so that your tables and data load at startup and reload whenever the browser is refreshed. If you choose not to pre-configure the database with your own tables and data it will startup with an empty default database named "postgres".
          </p>
          <p className="blogText">
            The easiest way to save state is to go to the Postgres Wasm <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">demo</a> where you can create tables, relationships, load data, etc. I suggest creating your schema in the default postgres database. That way, users will always start out in the right place.
          </p>
          <p className="blogText">
            When you are happy with the database, select <code>Save state to file</code> to save a <code>v86state.bin</code> file in your downloads directory.
          </p>
          <p className="blogText">
            Next, compress the v86state.bin file using <a href="https://github.com/facebook/zstd/releases/latest" target="_blank" rel="noreferrer">zstd</a> from Facebook. Download the appropriate zstd asset for your OS and extract the files.
          </p>
          <p className="blogText">
            In Windows, copy the v86state.bin file to the directory where you extracted zstd, and run the following command to create a v86state.bin.zst file: <code> ./zstd v86state.bin</code>
          </p>
          <p className="blogText">
            Copy <code>v86state.bin.zst</code> to your <code>/public/packages/runtime/state</code> directory. Refresh the browser to load the new state.
          </p>
          <intro><em>That's it! You're done!</em></intro>

      </>
    );
  };

   const Sect3 = () => {
    return (
        <>
          <br/>
          <h2 className="blog">Some PSQL Help</h2>
          <p className="blogText">
            The name of the active database is in the prompt. <code>postgres=#</code> means the active database is  <code>postgres</code>.
          <ul>
            <li className="blogLi">PSQL commands begin with a slash (<code>\</code>)
              <ul>
                <li className="blogLi">List all databases: <code>\l</code></li>
                <li className="blogLi">Change the active database: <code>\c databasename</code></li>
                <li className="blogLi">List all tables in the active database: <code>\dt</code></li>
                <li className="blogLi">Get help with slash commands: <code>\?</code></li>
                <li className="blogLi">List SQL commands: <code>\h</code></li>
                <li className="blogLi">Get help on the "show" command: <code>\h show</code></li>
              </ul>
            </li>
          </ul>
          SQL queries are different from slash commands. Be sure to end queries with a semi-colon.
        </p>

            <h2 className="blog">Learn More</h2>
            <ul>
              <li className="blogLi">
              <a className="listItem" href="https://developer.chrome.com/blog/deprecating-web-sql/" target="_blank" rel="noreferrer">
              Chrome Developers - Deprecating WebSql
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://developer.mozilla.org/en-US/docs/WebAssembly" target="_blank" rel="noreferrer">
              MDN - What is WebAssembly?
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://webassembly.org/" target="_blank" rel="noreferrer">
              WebAssembly.org
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">
              Supabase-Snaplet - Technical Deep Dive
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://supabase.com/docs/guides/with-react" target="_blank" rel="noreferrer">
              Supabase React QuickStart (includes Postgres, Auth, Storage, Row-Level Security)
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://github.com/mbasso/awesome-wasm" target="_blank" rel="noreferrer">
              Awesome-Wasm - A Curated List of Awesome WebAssembly Things
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://sqliteonline.com/" target="_blank" rel="noreferrer">
              SQLite3 Online
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://news.ycombinator.com/item?id=33067962" target="_blank" rel="noreferrer">
              Hacker News - Snaplet technical thread
              </a>
              </li>
              <li className="blogLi">
                <a className="listItem" href="https://www.postgresql.org/docs/current/app-psql.html" target="_blank" rel="noreferrer">
                  PSQL Documentation
                </a>
              </li>
            </ul>
        </>
      );
    };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogTopImg" >
          <img src={TopImage} title="Ideas" alt="Ideas" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />

        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
        <Sect3 />
      </article>
    </main>
  );
};
