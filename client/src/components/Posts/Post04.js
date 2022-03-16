import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Post04 = () => {
  let TopPic = "media/react400x400.png";
  let Title = "React Bits and Javascript Pieces";

  let Toc = (
    <div>
      <div>
        <a className="link-primary toc" href="#arrowFunctions">
          Arrow Functions with array.map
        </a>
      </div>
      <div>
        <a className="link-primary toc" href="#extensible">
          TypeError: Cannot add property st, object is not extensible
        </a>
      </div>
      <div>
        <a className="link-primary toc" href="#dispatch">
        Uncaught TypeError: Object(...)(...) is not a function
        </a>
      </div>
    </div>
  );

  let code1 = `const withBraces = aList.map((name) => {
    return name;
  });`;

  let code2 = `const withParens = aList.map((name) => (
    name;
  ));`;

  let Text1 = (
    <div id="arrowFunctions">
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
      </p>
      <p className="post-text"></p>
    </div>
  );

  let code3 = `// copy stateId to st 
  const locations = list.map((location, i) => (   <=== TypeError: Cannot add property st, object is not extensible
    location.st=(location.stateId), 
  ));`;

  let code4 = `0: {id: 100357, zip: "76706", cell: "9879879876", custid: 10871, nickname: "Waco 10871",…} 
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

  let code5 = `const locations = list.map((location) => ( 
    location = {...location, st: location.stateid} 
  ));`;

  let Text2 = (
    <div id="extensible">
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
          {code3}
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
          {code4}
        </SyntaxHighlighter>{" "}
        <br />
        You cannot create a new property in an object just by assigning
        something to it (that's what they mean by "the object is not
        extensible"), but you <i>can</i> insert a new element by using the Spread
        operator, like this:
        <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code5}
        </SyntaxHighlighter>{" "}
      </p>
      <p className="post-text"></p>
    </div>
  );

  let code6 = `List = locs.map(loc => 
    dispatch(addLocation({loc})) 
    (<LocationsRow key={loc.id} dataLoc = {loc}/>));`;

  let code7 = `List = locs.map(loc => { 
    dispatch(addLocation({loc})) 
    return (<LocationsRow key={loc.id} dataLoc = {loc}/>) 
});`;

  let Text3 = (
    <div id="dispatch">
      <hr />
      <h4 className="subtitle">
        <br />
        Uncaught TypeError: Object(...)(...) is not a function
      </h4>

      <p className="post-text">
      Uncaught TypeError: dispatch(...) is not a function
      <br />
      If you look closely, you might notice how similar to <a className="link-primary" href="#arrowFunctions">
          Arrow Functions with array.map
        </a> this problem is.
      <br />
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code6}
          </SyntaxHighlighter>
        <br />
        The fix is exactly the same, too. Replace the parentheses surrounding the function with braces and add a return statement.
        <br />
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightBlue}
          wrapLongLines
        >
          {code7}
        </SyntaxHighlighter>
      
        <br />
        <br />
        </p>
        </div>
  );
  return (
    <div className="post-wrapper">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>

      <h3 className="post-title text-center">{Title}</h3>
      <div className="toc">{Toc}</div>
      <div className="text1">{Text1}</div>

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
      <div className="text2">{Text2}</div>
      <div className="text3">{Text3}</div>
    </div>
  );
};
