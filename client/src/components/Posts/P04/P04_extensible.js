import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const P04Extensible = () => {
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
    <div className="sec" id="extensible">
      <h4 className="subtitle">
        TypeError: Cannot add property st, object is not extensible
      </h4>
      <hr/>
      <p className="ptext">
        I was trying to copy stateId to st when I received this error:
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
        >
          {code1}
      </SyntaxHighlighter>

      <p className="ptext">
        After looking to see what was actually in the location object, I
        discovered that 'st' was not defined.
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
        >
          {code2}
      </SyntaxHighlighter>

      <p className="ptext">
        You cannot create a new property in an object just by assigning
        something to it (that's what they mean by "the object is not
        extensible"), but you <i>can</i> insert a new property by using the
        Spread operator, like this:
      </p>
      <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
        >
          {code3}
      </SyntaxHighlighter>

    </div>
  );

  return <>{Post}</>;
};
