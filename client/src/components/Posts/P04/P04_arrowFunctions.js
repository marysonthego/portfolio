import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function P04_arrowFunctions() {
  let code1 = `const withBraces = aList.map((name) => {
    return name;
  });`;

  let code2 = `const withParens = aList.map((name) => (
    name;
  ));`;

  let Post = (
    <div className="posta" id="arrowFunctions">
      <br />
      <hr />
      <h4 className="subtitle">Arrow Functions with array.map</h4>
      <p className="post-text">
        For the longest time the only way I'd ever used the map function was
        with braces {} like this:
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code1}
        </SyntaxHighlighter>
        Then I noticed someone using it like this:
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code2}
        </SyntaxHighlighter>{" "}
        <br />
        <br />
        Use arrow functions with parentheses around the function body when you
        are only executing ONE statement. Leave out 'return' because the result
        of the statement will be returned automatically.
        <br />
        <br />
        If you need to do more than one thing inside an arrow function, put
        braces around the function body, and use the return statement -
        otherwise nothing will be rendered.
      </p>
      <p className="post-text text-center">
        <i>Try it out for yourself!</i>
      </p>
      <iframe
        src="https://codesandbox.io/embed/arrow-functions-37rfnc?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
        className="sb1"
        width="100%"
        height="600px"
        border="0"
        border-radius="4px"
        overflow="hidden"
        title="Arrow Functions"
        allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );

  return <>{Post}</>;
}
