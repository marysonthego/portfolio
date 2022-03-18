import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const P04_dispatch = () => {
  let code1 = `List = locs.map(loc => 
    dispatch(addLocation({loc})) 
    (<LocationsRow key={loc.id} dataLoc = {loc}/>));`;

  let code2 = `List = locs.map(loc => { 
    dispatch(addLocation({loc})) 
    return (<LocationsRow key={loc.id} dataLoc = {loc}/>) 
});`;

  let Post = (
    <div className="postc" id="dispatch">
      <hr />
      <h4 className="subtitle">
        <br />
        Uncaught TypeError: Object(...)(...) is not a function
      </h4>

      <p className="post-text">
        Uncaught TypeError: dispatch(...) is not a function
        <br />
        If you look closely, you might notice how similar to{" "}
        <a className="link-primary" href="#arrowFunctions">
          Arrow Functions with array.map
        </a>{" "}
        this problem is.
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code1}
        </SyntaxHighlighter>
        <br />
        The fix is exactly the same, too. Replace the parentheses surrounding
        the function with braces and add a return statement.
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code2}
        </SyntaxHighlighter>
        <br />
        <br />
      </p>
    </div>
  );
  return (
      <>{Post}</>
  );
};
