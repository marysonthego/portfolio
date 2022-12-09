import React from "react";
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


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
    <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
      {Syntax}
    </SyntaxHighlighter>
  );
};

  const Sect1 = () => {
    return (
      <>
        <p className="blogText"> <br/>
          <code>This is the first </code>in a series of occasional posts I plan to write about ideas I want to try. Since most of my ideas tend to involve things I don't know how to do, I'm hopeful that writing about the <i>journey of discovery </i>will inspire someone else to pursue their own!
        </p>
        <p className="blogText">
          In this post, I'll tell you about the research I did, the things I learned, dead-ends I went down, and how I ultimately arrived at a solution. But, as we have all probably experienced, trying to do something that's outside your comfort zone - something you don't know the first thing about - doesn't always have a happy ending. I think that's ok too. Sometimes, learning what <i>not to do </i>turns out to be very valuable later on. I'll write about some of those journeys too; but not this time!
        </p>
          <p className="blogText">
            When I started working on the <a href="/b221121" >SQL Joins</a> series, it quickly became apparent to me that I needed an interactive database connection<code><i> right on the page</i></code>. I wanted a place where you could enter queries and get live results. Screen-shots wouldn't cut it. I wanted a place where people could experiment, make mistakes, experiment again, and repeat as many times as they wanted.
          </p>
          <h2 className="blog">Research - What is the current state of the art?</h2>
          <p className="blogText">
            I looked around to see what the current state of the art is at tutorial sites, online classes, and blogs where people go to learn SQL. Some big, pay-walled courses have what I'm looking for - you can practice right alongside the course materials - but not always. Other sites either teach SQL through YouTube or use screen-shots to show you the results you should get. In either case, you're on your own to find a way to practice - and in my opinion, <i>practice is everything</i>.
          </p>
          <p className="blogText">
            One place that is both free <i>and</i> interactive is <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc" target="_blank" rel="noreferrer">w3schools</a>.  <i>How do they do it?</i> At the bottom of the page is a tiny link about their <i>Try-SQL Editor</i>. Click on it and you learn:</p>
            <p className="blogQuote">
            <i>"Our Try-SQL Editor uses <code>WebSQL</code> to demonstrate SQL. A Database-object is created in your browser, for testing purposes. You can try any SQL statement, and play with the Database as much as you like. The Database can be restored at any time, simply by clicking the "Restore Database" button. <code>WebSQL stores a Database locally, on the user's computer</code>. Each user gets their own Database object. WebSQL is supported in Chrome, Safari, Opera, and Edge(79). If you use another browser you will still be able to use our Try SQL Editor, but a different version, using a server-based ASP application, with a read-only Access Database, where users are not allowed to make any changes to the data."</i> - emphasis mine
          </p>

          <h2 className="blog">A Clue! (and more research) </h2>
          <p className="blogText">
            What is <i>WebSQL</i>? And how do you <i>create a database in the user's browser</i>?
          </p>
          <p className="blogText">
            The bad news. It doesn't take long to find out that WebSQL is <a href="https://developer.chrome.com/blog/deprecating-web-sql/" target="_blank" rel="noreferrer">deprecated</a>. Worse, the alternative Chrome suggests (<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target="_blank" rel="noreferrer">Web Storage API</a>) uses local or session storage, or indexedDB to persist data in the browser. Sort of like cookies. That's fine for some things, but no substitute for running live queries in a database!
          </p>
          <p className="blogText">
            Chrome Developers know this - <i>"[we're] working with the SQLite community on a replacement for Web SQL based on SQLite implemented in WebAssembly (Wasm)."</i> As it turns out, SQLite3 in Wasm is already <a href="https://sqlite.org/wasm/doc/trunk/demo-123.md" target="_blank" rel="noreferrer">available</a>. The problem is, I don't want to use it. I'll explain why, but first:
          </p>
          <h2 className="blog">A detour! What is Wasm?</h2>
          <p className="blogText">
            Wasm is short for <a href="https://developer.mozilla.org/en-US/docs/WebAssembly" target="_blank" rel="noreferrer">WebAssembly</a> - a low-level binary instruction set. You can write in human-readable languages such as C, C++, Rust, .NET, or AssemblyScript and compile to binary. The original goal was to encapsulate a very fast executable <a href="https://andreabergia.com/blog/2015/03/stack-based-virtual-machines-1/" target="_blank" rel="noreferrer">virtual stack machine</a> in Javascript so it could run in the browser. (Nowdays, it can run stand-alone too.) Wasm is exciting precisely because it can embed big applications, unimaginable before, running at near-native speed right in the browser! All you need is a fairly <a href="https://webassembly.org/" target="_blank" rel="noreferrer">modern browser</a> .
          </p>
          <p className="blogText">
            I said I'd explain why I don't like SQLite for learning. In my opinion, it drifts uncomfortably far away from the standard SQL syntax used by most databases you're likely to encounter in full-stack development. When you invest time in learning something, what you learn should be as widely applicable as possible. MySQL, MSSql, MariaDB, or Postgres are better, more mainstream choices. They do have their quirks, but these are mostly differences in database administration commands - not SQL query language. So, you can imagine my excitement when a recent <a href="https://news.ycombinator.com/item?id=32498435" target="_blank" rel="noreferrer">Hacker News thread</a> pointed to a <code>Postgres</code> implementation in Wasm!
          </p>
          <h2 className="blog">Implementation Decisions</h2>
          <p className="blogText">
            I'd estimate that reading, research, and Googling took about half the day. The rest of the time was spent on implementation. As you might expect, there are already competitors for Postgres Wasm, and I spent some time playing with each one. Most of them have a PSQL interpreter embedded in a bunch of stuff I don't want or need. My goal was to find one where it looked straight-forward to tease out the xTerm running PSQL from all the add-on bells and whistles.
            </p>
            <p className="blogText">
            <code>I really like </code>the open-source <i>collabenation</i>  (<i>collaborative implementation</i>, get it?) between <a href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">Supabase and Snaplet</a>. In their implementation, Wasm embeds Linux running a Postgres server at near-native  speed. Here's what their no-frills interface <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">looks like</a>.
          </p>
          <h2 className="blog">Quick and Dirty Implementation</h2>
            <p className="blogText">
            My interface isn't beautiful (it's just a black and white xTerm running PSQL in a web page); but thanks to <a href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">Supabase and Snaplet</a>, it's <code>reliable and instant-on.</code> Since it's pre-compiled, there's no waiting for initialization. You can type in SQL queries, see the results, even delete tables if you want to; but as soon as you refresh the browser, everything is restored to its initial state very quickly. It's a great simple-to-implement learning tool!
          </p>

          <p className="blogText">
            <code>Step 1 - clone the repo</code> <br/>
            While you're <a href="https://github.com/snaplet/postgres-wasm" target="_blank" rel="noreferrer">there</a>, give them a Star. They have created an awesome implementation, and even came up with an innovation that supports networking and allows you to transfer files to and from the Wasm instance and your local machine!
          </p>
          <p className="blogText">
          <code>Step 2 - grab the runtime</code> <br/>
            The cloned repo contains a <code>packages</code> directory with <code>buildroot</code>, <code>runtime</code>, and <code>websockproxy</code> directories inside. You use <code>buildroot </code> to generate a new runtime. <code>websockproxy</code> contains their innovations supporting file sharing and networking. For this project, all we need is the pre-built Wasm runtime. So, you only need to copy the <code>/packages/runtime</code> directory into your own repo at <code>/public/packages/runtime</code>.
          </p>
          <p className="blogText">
          <code>Step 3 - grab the scripts</code> <br/>
            Copy the important bits from <code>/public/packages/index.html</code> into your <code>/public/index.html</code>. That's how you load the important stuff from /public/packages/runtime into your app.
          </p>
          <p className="blogText">
            Add these entries to the <code>head</code> section of your <code>/public/index.html</code>. Make changes to use the path <code>%PUBLIC_URL%</code> as shown below:
          </p>

          <Code Syntax={Syntax1} />
          <br/>
          <p className="blogText">
          <code>Step 4 - Create tables and data in Postgres (optional)</code> <br/>
          You can save initial state so that your tables and data load at startup and reload whenever the browser  is refreshed. If you choose not to pre-configure the database with your own initial state, you will startup with an empty default database named "Postgres".
          </p>
          <p className="blogText">
            The easiest way to save state is to go to the Postgres Wasm <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">example</a> where you can create tables, relationships, load data - basically do anything you want to configure a starting database. I suggest creating your schema in the default postgres database. That way, users will always start out in the right place.
          </p>
          <p className="blogText">
            When you are happy with the database, select <code>Save state to file</code> to save a <code>v86state.bin</code> file in your downloads directory.
          </p>
          <p className="blogText">
            Before you can use it you must compress the v86state.bin file using <a href="https://github.com/facebook/zstd/releases/latest" target="_blank" rel="noreferrer">zstd</a> from Facebook. Download the appropriate zstd asset for your OS, extract the files, and follow the README to create a compressed <code>v86state.bin.zst</code> file.
          </p>
          <p className="blogText">
            Make a backup of the original <code>v86state.bin.zst</code> file in your <code>/public/packages/runtime/state</code> directory, then paste in your new file. If all is well, the next time you restart your site, it will use the Postgres configuration you created! If something is wrong, restore the original .zst file and restart the browser.
          </p>
          <p className="blogText">
          If you're unfamiliar with using the Postgres PSQL command-line, here's a <a href="https://tomcam.github.io/postgres/#reference" target="_blank" rel="noreferrer">quick tutorial</a>.
          <br/><br/>The active database is shown in the prompt. <code>postgres=#</code> means the active database is named <code>postgres</code>.
          <br/><br/>PSQL commands begin with <code>\</code>
          <br/>&nbsp;&nbsp;List all databases: <code>\l</code>
          <br/>&nbsp;&nbsp;Connect to "databasename": <code>\c databasename</code>

          <br/>&nbsp;&nbsp;List all tables in the active database: <code>\dt</code>
          <br/>&nbsp;&nbsp;Get help: <code>\h</code>, Get help on "show" command: <code>\h show</code>
          <br/><br/>SQL queries are different from commands. Be sure to end queries with a semi-colon. If you hit enter instead, PSQL thinks you are entering another line of the query. It doesn't recognize the end of a query until you enter a semi-colon.
          </p>
      </>
    );
  };

   const Sect3 = () => {
    return (
        <>
          <br/>
            <h2 className="blog">Learn More</h2>
            <ul>
              <li className="blogLi">
              <a className="listItem" href="https://developer.chrome.com/blog/deprecating-web-sql/">
              Chrome Developers - Deprecating WebSql
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://developer.mozilla.org/en-US/docs/WebAssembly">
              MDN - What is WebAssembly?
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://webassembly.org/">
              WebAssembly.org
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://supabase.com/blog/postgres-wasm">
              Supabase-Snaplet - Technical Deep Dive
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://supabase.com/docs/guides/with-react">
              Supabase React QuickStart (includes Postgres, Auth, Storage, Row-Level Security)
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://github.com/mbasso/awesome-wasm">
              Awesome-Wasm - A Curated List of Awesome WebAssembly Things
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://sqliteonline.com/">
              SQLite3 Online
              </a>
              </li>
              <li className="blogLi">
              <a className="listItem" href="https://news.ycombinator.com/item?id=33067962">
              Hacker News - Snaplet technical thread
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
