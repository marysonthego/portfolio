import { Inpm } from "./items/Inpm";
import { I100322 } from "./items/I100322";
import { I092522 } from "./items/I092522";
import { I092722 } from "./items/I092722";
import { Template } from "./items/template";

export const Blog = () => {
  let PageTitle = "The Blog";

  return (
    <main className="container">
      <h1 className="blog">{PageTitle}</h1>
      <section className="blogList">
        <a className="listItem" href="/Inpm">
          <img
            className="blogListImg"
            src="media/npmpackagesw200.jpg"
          />{" "}
          {Inpm()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/I100322">
          <img
            className="blogListImg"
            src="media/secretsw200.jpg"
          />{" "}
          {I100322()}
        </a>
      </section>
      <section className="blogList">
        <a className="listItem" href="/template">
          <img
            className="blogListImg"
            src="media/template1w200.jpg"
          />{" "}
          {Template()}
        </a>
      </section>
    </main>
  );
};
