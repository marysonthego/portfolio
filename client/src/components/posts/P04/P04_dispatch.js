import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const P04Dispatch = () => {
  let code1 = `List = locs.map(loc =>
    dispatch(addLocation({loc}))
    (<LocationsRow key={loc.id} dataLoc = {loc}/>));`;

  let code2 = `List = locs.map(loc => {
    dispatch(addLocation({loc}))
    return (<LocationsRow key={loc.id} dataLoc = {loc}/>)
});`;

  let Post = (
    <div className="sec" id="dispatch">
      <h4 className="subtitle">
        Uncaught TypeError: Object(...)(...) is not a function
      </h4>
      <hr/>
      <p className="ptext">
        Uncaught TypeError: dispatch(...) is not a function
        <br />
        If you look closely, you might notice how similar to{" "}
        <a className="link-primary" href="#arrowFunctions">
          Arrow Functions with array.map
        </a>{" "}
        this problem is.
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={xonokai}
        >
          {code1}
      </SyntaxHighlighter>

      <p className="ptext">
        The fix is exactly the same, too. Replace the parentheses surrounding
        the function with braces and add a return statement.
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={xonokai}
        >
          {code2}
      </SyntaxHighlighter>

    </div>
  );
  return <>{Post}</>;
};
