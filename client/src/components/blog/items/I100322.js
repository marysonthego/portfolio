import React from "react";
import { useLocation } from "react-router-dom";

export const I100322 = () => {
  const location = useLocation();

  const Title = "Using Array.reduce";
  const Created = "October 03, 2022";

  if (location.pathname.toString() === "/blog") {
    return (
      <>
        <div>{Title}</div>
        <div className="listDate">{Created}</div>
      </>
    );
  }

  const text1 = "Text 1";

  const Sect1 = text1;

  return (
    <main>
      <article className="itemArticle">
        <h1 className="itemTitle">{Title}</h1>
        <h6 className="itemDate">{Created}</h6>
        <section className="itemSection">
          <p className="itemText">{Sect1}</p>
          <code data-gist-id="1f70adb74856db5a2a39946e51820adf" data-gist-caption="reduce.js"></code>
          <br />
          <br />
        </section>
      </article>
    </main>
  );
};
