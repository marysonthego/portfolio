import react from "react";
import { P04_arrowFunctions } from "./P04_arrowFunctions";
import { P04_extensible } from "./P04_extensible";
import { P04_dispatch } from "./P04_dispatch";

export const Post04 = () => {
  let TopPic = "media/react400x400.png";

  let Title = "React Bits and Javascript Pieces";

  let Toc = (
    <div className="toc">
      Contents
      <hr/>
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
        <P04_arrowFunctions id="arrowFunctions" />
      </div>
      <div className="postb">
        <P04_extensible id="extensible" />
      </div>
      <div className="postc">
        <P04_dispatch id="dispatch" />
      </div>
    </div>
  );
};
