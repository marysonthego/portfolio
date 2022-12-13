import * as items from "./items";
import * as posts from "../posts";

export const BlogList = () => {
  let PageTitle = "blog list";

  return (
    <div className="blogListContainer">
      <h1 className="blogList">{PageTitle}</h1>
      <ul className="blogListUl">
        <li>
          <a className="blogListItem" href="/b221205">
            <img
              className="blogListImg"
              src="media/ideasw200.png"
              alt="Ideas Series"
            />{" "}
            {items.B221205()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b221201">
            <img
              className="blogListImg"
              src="media/rowinwavesw200.png"
              alt=""
            />{" "}
            {items.B221201()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b221123">
            <img
              className="blogListImg"
              src="media/joinpeoplew200.png"
              alt=""
            />{" "}
            {items.B221123()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b221121">
            <img className="blogListImg" src="media/joinhandsw200.png" alt="" />{" "}
            {items.B221121()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b220927">
            <img className="blogListImg" src="media/routew200.png" alt="" />{" "}
            {items.B220927()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b221003">
            <img className="blogListImg" src="media/secretsw200.jpg" alt="" />{" "}
            {items.B221003()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/arrowfunctions">
            <img className="blogListImg" src="media/arrow200.png" alt="" />{" "}
            {posts.ArrowFunctions()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post01">
            <img className="blogListImg" src="media/amazonw200.png" alt="" />{" "}
            {posts.Post01()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post00">
            <img
              className="blogListImg"
              src="media/reactnativeoptw200.png"
              alt=""
            />{" "}
            {posts.Post00()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post02">
            <img
              className="blogListImg"
              src="media/post02top03w200.png"
              alt=""
            />{" "}
            {posts.Post02()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post05">
            <img className="blogListImg" src="media/avifw200.png" alt="" />{" "}
            {posts.Post05()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post09">
            <img className="blogListImg" src="media/pythonw200.png" alt="" />{" "}
            {posts.Post09()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/bnpm">
            <img
              className="blogListImg"
              src="media/npmpackagesw200.jpg"
              alt=""
            />{" "}
            {items.Bnpm()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/post07">
            <img className="blogListImg" src="media/nodew200.png" alt="" />{" "}
            {posts.Post07()}
          </a>
        </li>
      </ul>
    </div>
  );
};
