import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {a11yDark, atomDark, cb, darcula, coldarkDark, dark, dracula, duotoneDark, duotoneEarth, duotoneForest, duotoneSea, duotoneSpace, gruvboxDark, hopscotch, lucario, materialDark,nightOwl, nord, oneDark, pojoaque, solarizedDarkAtom, synthwave84, tomorrow, twilight, vscDarkPlus, xonokai, zTouch} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const P04DarkStyles = () => {
  let Title =
    "React Syntax Highlighter";

  let Post = (
    <div className="sec" id="darkstyles">
      <h4 className="subtitle">
        {Title}
      </h4>
      <hr/>
    <div>
      <p className="ptext">
        A syntax highlighter lets you embed formatted code in a web page. I recently started using one because screen shots were just too inflexible. With a syntax highlighter you can copy and paste, add line numbers, pick a pre-built style, or create your own. Some don't just display code, but let you edit it too. I may evolve into a web page editor, but for now I just want a way to display presentable code on the page.
      </p>
      <p className="ptext">
        My primary requirement is that any syntax highlighter must work well with React. That alone quickly diminishes the field of possibilities. After trying several packages that claimed to support React JSX, I settled on <a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter" className="link-primary">React Syntax Highlighter</a>.
      </p>
      <h5 className="subsub">
      Dark Styles
      </h5>
      <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
        >
          a11yDark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={atomDark}
        >
          atomDark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={cb}
        >
          cb
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={coldarkDark}
        >
          coldarkDark
      </SyntaxHighlighter>

      <SyntaxHighlighter
          language="javascript"
          style={darcula}
        >
          darcula
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={dark}
        >
          dark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={dracula}
        >
          dracula
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={duotoneDark}
        >
          duotoneDark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={duotoneEarth}
        >
          duotoneEarth
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={duotoneForest}
        >
          duotoneForest
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={duotoneSea}
        >
          duotoneSea
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={duotoneSpace}
        >
          duotoneSpace
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={gruvboxDark}
        >
          gruvboxDark
      </SyntaxHighlighter>

      <SyntaxHighlighter
          language="javascript"
          style={hopscotch}
        >
          hopscotch
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={lucario}
        >
          lucario
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={materialDark}
        >
          materialDark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
        >
          nightOwl
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={nord}
        >
          nord
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={oneDark}
        >
          oneDark
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={pojoaque}
        >
          pojoaque
      </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={solarizedDarkAtom}
        >
          solarizedDarkAtom
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={synthwave84}
        >
          synthwave84
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
        >
          tomorrow
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={twilight}
        >
          twilight
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
        >
          vscDarkPlus
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={xonokai}
        >
          xonokai
      </SyntaxHighlighter>
      <SyntaxHighlighter
          language="javascript"
          style={zTouch}
        >
          zTouch
      </SyntaxHighlighter>
    </div>
    </div>
  );
  return (
    <>{Post}</>
  );
};
