import { P04ArrowFunctions } from "./P04_arrowFunctions";
import { P04Extensible } from "./P04_extensible";
import { P04Dispatch } from "./P04_dispatch";
import { P04DarkStyles } from "./P04_DarkStyles";
import { P04Conflicted } from "./P04_conflicted";

export const Post04 = () => {
  let TopPic = "media/reactjs.png";

  let Title = "React Bits and Javascript Pieces";

  let Toc = (
    <div className="toc">
      Contents
      <hr />
      <ul>
        <li>
          <a className="link-primary " href="#arrowFunctions">
            Arrow Functions with array.map
          </a>
        </li>

        <li>
          <a className="link-primary " href="#extensible">
            TypeError: Cannot add property st, object is not extensible
          </a>
        </li>
        <li>
          <a className="link-primary " href="#dispatch">
            Uncaught TypeError: Object(...)(...) is not a function
          </a>
        </li>
        <li>
          <a className="link-primary " href="#conflicted">
            Error in plugin react was conflicted
          </a>
        </li>
        <li>
          <a className="link-primary " href="#darkstyles">
            React Syntax Highlighter
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="post-wrapper post-bits04">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>

      <h3 className="post-title text-center">{Title}</h3>

      <div className="toc">{Toc}</div>
      <div className="posta">
        <P04ArrowFunctions id="arrowFunctions" />
      </div>
      <div className="postb">
        <P04Extensible id="extensible" />
      </div>
      <div className="postc">
        <P04Dispatch id="dispatch" />
      </div>
      <div className="postd">
        <P04Conflicted id="conflicted" />
      </div>
      <div className="poste">
        <P04DarkStyles id="darkstyles" />
      </div>
    </div>
  );
};
