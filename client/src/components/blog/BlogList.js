import * as items from "./items";
import * as posts from '../posts';

export const BlogList = () => {
  let PageTitle = "BlogList";

  return (
    <main className="container">
      <h1 className="blog">{PageTitle}</h1>
      <section className="blogList">
        <a className="listItem" href="/b221201">
          <img
            className="blogListImg"
            src="media/rowinwavesw200.png"
            alt=""
          />{" "}
            {items.B221201()}
        </a>
      </section>
        <section className="blogList">
        <a className="listItem" href="/b221123">
          <img
            className="blogListImg"
            src="media/joinpeoplew200.png"
            alt=""
          />{" "}
            {items.B221123()}
        </a>
      </section>
       <section className="blogList">
        <a className="listItem" href="/b221121">
          <img
            className="blogListImg"
            src="media/joinhandsw200.png"
            alt=""
          />{" "}
          {items.B221121()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/b220927">
          <img
            className="blogListImg"
            src="media/routew200.png"
            alt=""
          />{" "}
          {items.B220927()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/b221003">
          <img
            className="blogListImg"
            src="media/secretsw200.jpg"
            alt=""
          />{" "}
          {items.B221003()}
        </a>
      </section>


      <section className="blogList">
        <a className="listItem" href="/arrowfunctions">
          <img
            className="blogListImg"
            src="media/arrow200.png"
            alt=""
          />{" "}
          {posts.ArrowFunctions()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/post01">
          <img
            className="blogListImg"
            src="media/amazonw200.png"
            alt=""
          />{" "}
          {posts.Post01()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post00">
          <img
            className="blogListImg"
            src="media/reactnativeoptw200.png"
            alt=""
          />{" "}
          {posts.Post00()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post02">
          <img
            className="blogListImg"
            src="media/post02top03w200.png"
            alt=""
          />{" "}
          {posts.Post02()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post05">
          <img
            className="blogListImg"
            src="media/avifw200.png"
            alt=""
          />{" "}
          {posts.Post05()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/post09">
          <img
            className="blogListImg"
            src="media/pythonw200.png"
            alt=""
          />{" "}
          {posts.Post09()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/bnpm">
          <img
            className="blogListImg"
            src="media/npmpackagesw200.jpg"
            alt=""
          />{" "}
          {items.Bnpm()}
        </a>
      </section>

      <section className="blogList">
        <a className="listItem" href="/post07">
          <img
            className="blogListImg"
            src="media/nodew200.png"
            alt=""
          />{" "}
          {posts.Post07()}
        </a>
      </section>
    </main>
  );
};
