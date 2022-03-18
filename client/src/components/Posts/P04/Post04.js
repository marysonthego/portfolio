import react from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { P04_arrowFunctions } from "./P04_arrowFunctions";
import { P04_extensible } from "./P04_extensible";
import { P04_dispatch } from "./P04_dispatch";

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

  return (
    <div className="post-wrapper">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>

      <h3 className="post-title text-center">{Title}</h3>

      <div className="toc">{Toc}</div>

      <P04_arrowFunctions id="arrowFunctions" />

      <P04_extensible id="extensible" />

      <P04_dispatch id="dispatch" />
    </div>
  );
};
