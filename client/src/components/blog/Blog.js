import { Bnpm } from "./items/Bnpm";
import {B221123} from "./items/B221123";
import {B221121} from "./items/B221121";
import { B221003 } from "./items/B221003";
import { B220927 } from "./items/B220927";
import {Post00} from "components/posts/Post00";
import {Post01} from "components/posts/Post01";
import {Post02} from "components/posts/Post02";
import {Post05} from "components/posts/Post05";
import {Post07} from "components/posts/Post07";
import {Post09} from "components/posts/Post09";
import {ArrowFunctions} from "components/posts/ArrowFunctions";
import { Btemplate } from "./items/Btemplate";

export const Blog = () => {
  let PageTitle = "The Blog";

  return (
    <main className="container">
      <h1 className="blog">{PageTitle}</h1>
      <section className="blogList">
        <a className="listItem" href="/B221123">
          <img
            className="blogListImg"
            src="media/mysql-buttonx200blue.jpg"
          />{" "}
          {B221123()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/B221121">
          <img
            className="blogListImg"
            src="media/mysql-buttonx200blue.jpg"
          />{" "}
          {B221121()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/Bnpm">
          <img
            className="blogListImg"
            src="media/npmpackagesw200.jpg"
          />{" "}
          {Bnpm()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/B221003">
          <img
            className="blogListImg"
            src="media/secretsw200.jpg"
          />{" "}
          {B221003()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post07">
          <img
            className="blogListImg"
            src="media/nodew200.png"
          />{" "}
          {Post07()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/arrowfunctions">
          <img
            className="blogListImg"
            src="media/arrow200.png"
          />{" "}
          {ArrowFunctions()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post09">
          <img
            className="blogListImg"
            src="media/pythonw200.png"
          />{" "}
          {Post09()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post01">
          <img
            className="blogListImg"
            src="media/amazonw200.png"
          />{" "}
          {Post01()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post00">
          <img
            className="blogListImg"
            src="media/reactnativeoptw200.png"
          />{" "}
          {Post00()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post02">
          <img
            className="blogListImg"
            src="media/post02top03w200.png"
          />{" "}
          {Post02()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/post05">
          <img
            className="blogListImg"
            src="media/avifw200.png"
          />{" "}
          {Post05()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/Btemplate">
          <img
            className="blogListImg"
            src="media/template1w200.jpg"
          />{" "}
          {Btemplate()}
        </a>
      </section>
    </main>
  );
};
