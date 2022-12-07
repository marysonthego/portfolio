import React from "react";
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


export const B221205 = () => {
  const location = useLocation();

  const Title = "Ideas Series - Embed a Database With Wasm";
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
        <div className="h2Box">
        <p className="blogText"> <br/>
          <b>This is the first </b>in a series of occasional posts about ideas I've had. Since most of my ideas tend to involve doing things I don't know how to do, maybe it will benefit someone else to hear about the research I did (and why), the things I learned, dead-ends I went down, and, ultimately, how I came up with a solution. Based on the premise that we learn more from our mistakes than anything else, I hope people that come here will find something useful.
        </p>
          <p className="blogText">
            When I started working on the series about <a href="/b221121" >SQL Joins</a>, it quickly became clear to me that I needed an interactive connection to a database <b><i>right on the page</i></b>. I wanted a place where people could enter queries and get live results. Screen-shots just wouldn't cut it. They didn't let people experiment, make mistakes, experiment again, and again...
          </p>
          <h2 className="blog">Research - What is the current state of the art?</h2>
          <p className="blogText">
            I looked around to find out what the current state of the art is at tutorial sites, online classes, and blogs where people go to learn SQL. There seems to be a pattern to it. Some big sites with pay-walled courses have what I'm looking for - they let you practice right alongside their course materials - but not always. Other, smaller, sites either teach SQL through YouTube or use screen-shots to show you the results you should get. In either case, you're on your own to find a way to practice - and in my opinion, practice is <i>everything</i>.
          </p>
          <p className="blogText">
            One place that is both free <i>and</i> interactive is <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc" target="_blank" rel="noreferrer">w3schools</a>.  <i>How do they do it?</i> At the bottom of the page is a tiny link about their <i>Try-SQL Editor</i>. Click on it and you learn:</p>
            <p className="blogQuote">
            <i>"Our Try-SQL Editor uses <b>WebSQL</b> to demonstrate SQL. A Database-object is created in your browser, for testing purposes. You can try any SQL statement, and play with the Database as much as you like. The Database can be restored at any time, simply by clicking the "Restore Database" button. <b>WebSQL stores a Database locally, on the user's computer</b>. Each user gets their own Database object. WebSQL is supported in Chrome, Safari, Opera, and Edge(79). If you use another browser you will still be able to use our Try SQL Editor, but a different version, using a server-based ASP application, with a read-only Access Database, where users are not allowed to make any changes to the data."</i> - emphasis mine
          </p>

          <h2 className="blog">A Clue! (and more research) </h2>
          <p className="blogText">
            What is <i>WebSQL</i>? And how do you <i>create a database in the user's browser</i>?
          </p>
          <p className="blogText">
            The bad news. It doesn't take long to find out that WebSQL is <a href="https://developer.chrome.com/blog/deprecating-web-sql/" target="_blank" rel="noreferrer">deprecated</a>. Worse, the alternative Chrome suggests (<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target="_blank" rel="noreferrer">Web Storage API</a>) uses local or session storage, or indexedDB to persist data in the browser. Sort of like cookies. That's fine in some situations, but no substitute for running live queries in a database!
          </p>
          <p className="blogText">
            Chrome Developers know this - <i>'[we're] working with the SQLite community on a replacement for Web SQL based on SQLite implemented in WebAssembly (Wasm).'</i> As it turns out, SQLite3 in Wasm is already <a href="https://sqlite.org/wasm/doc/trunk/demo-123.md" target="_blank" rel="noreferrer">available</a>. The problem is, I don't want to use it. I'll explain why, but first:
          </p>
          <h2 className="blog">A detour! What is Wasm?</h2>
          <p className="blogText">
            Wasm is short for <a href="https://developer.mozilla.org/en-US/docs/WebAssembly" target="_blank" rel="noreferrer">WebAssembly</a> - a low-level binary instruction set. You can write in human-readable languages such as C, C++, Rust, .NET, or something called AssemblyScript and compile to binary. Their original goal was to encapsulate a very fast executable <a href="https://andreabergia.com/blog/2015/03/stack-based-virtual-machines-1/" target="_blank" rel="noreferrer">virtual stack machine</a> in Javascript so it could run in the browser. (Nowdays, it can run stand-alone too.) Wasm is exciting precisely because it can run big applications, unimaginable before, at near-native speed right in the client browser! All that's needed is a fairly modern browser version.
          </p>
          <p className="blogText">
            I said I'd explain why I didn't like SQLite for learning. Well, the problem is it drifts uncomfortably far from standard SQL syntax. For that reason, I don't think it's a good choice for beginners learning SQL. MySQL, MSSql, or Postgres are better, more mainstream choices. So, you can imagine my excitement when a recent <a href="https://news.ycombinator.com/item?id=32498435" target="_blank" rel="noreferrer">Hacker News thread</a> pointed to a <b>Postgres</b> implementation in Wasm!
          </p>
          <h2 className="blog">Implementation Decisions</h2>
          <p className="blogText">
            I'd estimate that reading, research, and Googling took about half the day. The rest of the time was spent on implementation. As you might expect, there are already competitors for Postgres Wasm, and I spent some time playing with each one. Most of them have a PSQL interpreter embedded in a bunch of stuff I don't want or need. My goal was to find one where it looked straight-forward to tease out the xTerm running PSQL from everything else.
            </p>
            <p className="blogText">
            My interface isn't beautiful (it's just a black and white xTerm running PSQL), but it's reliable, and reloads my training database every time you refresh the browser. It's pre-compiled and super fast to start-up. When you load a page, there's no waiting for the database instance to initialize. You can type sql queries into it, get the results, even delete tables if you want to, but as soon as you refresh the browser tab everything is restored to normal. Very quickly. It's a great learning tool, and I can add colors and whatnot to make it even more user friendly in the future.
          </p>
          <h2 className="blog">A Quick and Dirty Implementation</h2>
          <p className="blogText">
            I ended up going with an open-source <i>collabenation</i> (my word for <i>collaborative implementation</i>) between <a href="https://supabase.com/blog/postgres-wasm" target="_blank" rel="noreferrer">Supabase and Snaplet</a>. Here's what their nice, clean implementation <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">looks like</a>.
          </p>
          <p className="blogText">
            <b>Step 1 - clone the repo</b> <br/>
            While you're <a href="https://github.com/snaplet/postgres-wasm" target="_blank" rel="noreferrer">there</a>, give them a Star. They desrve all the encouragement they can get!
          </p>
          <p className="blogText">
          <b>Step 2 - grab the runtime</b> <br/>
            Copy the <b>/packages/runtime</b> directory into your own repo at <b>public/packages/runtime</b>. I know, anything in <b>/public</b> is available for anyone to look at. They can't change it, though. Even so, I want to look into better security alternatives at some point; but as I said, this implementation is <i>quick and dirty</i>!
          </p>
          <p className="blogText">
          <b>Step 3 - grab the scripts</b> <br/>
            Copy the important bits from their public/packages/index.html into your own /public/index.html. That's how we'll load the important stuff from public/packages/runtime into our own app.
          </p>
          <p className="blogText">
            Add these entries to the <b>head</b> section, making changes to use the path <b>%PUBLIC_URL%</b> as shown.
          </p>
          </div>
          <Code Syntax={Syntax1} />
          <br/>
          <p className="blogText">
          <b>Step 4 - Create tables and data in Postgres (optional)</b> <br/>
          You can save an initial state so that your tables and data are always loaded at startup and reloaded whenever the browser window is refreshed.</p>
          <p className="blogText">
            The easiest way to save state is to go to the Postgres Wasm <a href="https://postgres-wasm.netlify.app/" target="_blank" rel="noreferrer">example</a> where you can create tables, relationships, load data - basically do anything you want to configure a starting database. I suggest creating your schema in the default postgres database. That way, users will always start out in the right place.
          </p>
          <p className="blogText">
            When you are happy with the database, select <b>Save state to file</b> to save a <b>v86state.bin</b> file in your downloads directory.
          </p>
          <p className="blogText">
            Before you can use it you must compress it using <a href="https://github.com/facebook/zstd/releases/latest" target="_blank" rel="noreferrer">zstd</a>. Download the appropriate Asset for your OS, extract the files, and follow the README.md to create a compressed <b>state.zst</b> file.
          </p>
          <p className="blogText">
            Copy it over to your <b>public/packages/runtime/state</b> directory and the next time you restart your site, it will use the Postgres configuration you created!
          </p>
      </>
    );
  };

   const Sect3 = () => {
    return (
      <>

        </>
      );
    };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogImg" >
          <img src={TopImage} title="Ideas" alt="Ideas" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect3 />
        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
      </article>
    </main>
  );
};
