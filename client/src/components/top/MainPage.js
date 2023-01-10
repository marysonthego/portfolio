import React, { useEffect } from "react";
import { BlogFeatured } from "../blog/BlogFeatured";

export function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="mainContainer">
      <div className="mainImgDiv">
        <img
          src="media/mary.png"
          title="Mary"
          className="mainImage"
          alt="Mary"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
        </div>
        <h1 className="mainTitle">Hi! I'm Mary Clark</h1>
        <h2 className="mainSubtitle">
          I create <i>delightful</i> full-stack React, NodeJS, Express,{" "}
        </h2>
        <h2 className="mainSubtitle">SQL, and NoSQL apps and derivatives thereof every day!</h2>
        <h2 className="mainSubtitle">Feel free to &nbsp;
        <span>
        <a href="https://www.animatedimages.org/cat-eyes-35.htm"><img src="https://www.animatedimages.org/data/media/35/animated-eye-image-0282.gif" border="0" alt="animated-eye" /></a>
        </span>
        </h2>
        <div className="mainSquiggle"></div>
        <div>{<BlogFeatured />}</div>
    </main>
  );
}
