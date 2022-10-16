import React from 'react';
import {useLocation} from 'react-router-dom';
import useWindowDimensions from "components/helpers/UseWindowDimensions";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Template = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;


  const Title = "Template Title";
  const Created = "Some-month 01, 2022";
  const TopImage = "media/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg";

  if (location.pathname.toString() === "/blog") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const Sect1 = () => {
    return (
      <>
        <h2 className="blog">Five bullet points</h2>
        <ul>
          <li className="blogText">
            bullet point one
          </li>
          <li className="blogText">
            bullet point two
          </li>
          <li className="blogText">
            bullet point three
          </li>
          <li className="blogText">
           bullet point four
          </li>
          <li className="blogText">
            bullet point five
          </li>
        </ul>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blog">Section Two</h2>
        <p className="blogText">
          Section two text
        </p>
        <p>
          <b>Note:</b> Small text with details
        </p>
      </>
    );
  };

  if (width < 410) {
    return (
      <main className="container">
        <article className="blog">
          <img src={TopImage} title="640x340 is ok" className="pic" alt="Top Image Alt" />
          <h1 className="blog">{Title}</h1>
          <h2 className="itemDate">{Created}</h2>
          <h2 className="blog">
            First item in a box{" "}<em>Optional something</em>
          </h2>
          <h2 className="blog">
            Second item in a box {" "}<i>optional thing</i>
          </h2>
          <Sect1 />
          <Sect2 />
          <div>
            <iframe
              title="StackBlitz"
              width={iwidth + 50}
              height={iheight}
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-sum-no-initial-value.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
          <p className="blogText">
            Another thing.
          </p>
          <p>
            Here's an example:
          </p>
          <div>
            <iframe
              title="StackBlitz"
              width={iwidth + 50}
              height={iheight}
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
        </article>
      </main>
    );
  } else {
    return (
      <main className="container">
        <article className="blog">
          <img src={TopImage} title="640x340 is ok" className="pic" alt="Top Image Alt" />
          <h1 className="blog">{Title}</h1>
          <h2 className="itemDate">{Created}</h2>
          <div className="h2Box">
            <h2 className="blogBox">
              <span>
                First thing in a box{" "}<em>optional something</em>)
              </span>
            </h2>
            <h2 className="blogBox">
              <span>
                Second thing in a box{" "}
                <em>optional something</em>)
              </span>
            </h2>
          </div>
          <Sect1 />
          <Sect2 />
          <div>
            <iframe
              title="StackBlitz"
              width="800px"
              height="600px"
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-sum-no-initial-value.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
          <p className="blogText">
            Another thing.
          </p>
          <p>
            Here's an example:
          </p>
          <div>
            <iframe
              title="StackBlitz"
              width="800px"
              height="600px"
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
        </article>
      </main>
    );
  }
};
