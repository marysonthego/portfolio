import React, { useEffect } from "react";
export function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mainContainer">
      <div className="mainImage">
        <img
          src="media/mary.png"
          title="Mary"
          className="pic rounded-circle"
          alt="Mary"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
        <h1 className="mainTitle">Hi! Mary Clark here.</h1>
        <h2 className="mainSubtitle">
          I do full-stack React, NodeJS, & Express{" "}
        </h2>
        <h2 className="mainSubtitle">with SQL & NoSQL.</h2>

        <h2 className="mainSubtitle">Feel free to &nbsp;
        <span className="gif-embed">
          <iframe src="media/animated-eye-image-0282.gif"
          width="65"
          height="40"
          name="eyes"
          title="animated eyes"></iframe>
        </span>!
        </h2>
        </div>
        <div className="mainSquiggle"></div>
    </div>
  );
}
