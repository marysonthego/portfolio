import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";

export const I100322 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

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

  if (width < 410) {
    return (
      <main className="container">
        <article className="itemArticle">
          <h1 className="itemTitle">{Title}</h1>
          <h6 className="itemDate">{Created}</h6>
          <section className="itemSection">
            <p className="itemText">{Sect1}</p>
            <code
              data-gist-id="1f70adb74856db5a2a39946e51820adf"
              data-gist-caption="reduce.js"
            ></code>
            <div>
              <iframe
                title="StackBlitz"
                width={iwidth + 50}
                height={iheight}
                src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=editor"
              ></iframe>
            </div>
          </section>
        </article>
      </main>
    );
  } else {
    return (
      <main className="container">
        <article className="itemArticle">
          <h1 className="itemTitle">{Title}</h1>
          <h6 className="itemDate">{Created}</h6>
          <section className="itemSection">
            <p className="itemText">{Sect1}</p>
            <code
              data-gist-id="1f70adb74856db5a2a39946e51820adf"
              data-gist-caption="reduce.js"
            ></code>
            <div>
              <iframe
                title="StackBlitz"
                width={iwidth}
                height={iheight}
                src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=editor"
              ></iframe>
            </div>
          </section>
        </article>
      </main>
    );
  }
};
