import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {tomorrowNightBlue} from "react-syntax-highlighter/dist/esm/styles/hljs";

export const P04_extensible = () => {

  let code1 = `// copy stateId to st 
  const locations = list.map((location, i) => (   <=== TypeError: Cannot add property st, object is not extensible
    location.st=(location.stateId), 
  ));`;

  let code2 = ` 
  airalert: false 
  cell: "9879879876" 
  city: "Waco" 
  custid: 10871 
  id: 100357 
  nickname: "Waco 10871" 
  stateid: "TX" 
  virusalert: true 
  weatheralert: true 
  zip: "76706"`;

  let code3 = `const locations = list.map((location) => ( 
    location = {...location, st: location.stateid} 
  ));`;

  let Post = (
    <div className="postb" id="extensible">
      <br />
      <hr />
      <h4 className="subtitle">
        <br />
        TypeError: Cannot add property st, object is not extensible
      </h4>

      <p className="post-text">
        I was trying to copy stateId to st when I received this error:
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code1}
        </SyntaxHighlighter>
        After looking to see what was actually in the location object, I
        discovered that 'st' was not defined.
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
        You cannot create a new property in an object just by assigning
        something to it (that's what they mean by "the object is not
        extensible"), but you <i>can</i> insert a new property by using the Spread
        operator, like this:
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code3}
        </SyntaxHighlighter>{" "}
      </p>
    </div>
  );

  
  return (
      <>{Post}</>
  );
};
