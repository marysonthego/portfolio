import React from "react";
import { useLocation } from "react-router-dom";
//import useWindowDimensions from "components/helpers/UseWindowDimensions";

export const B221003 = () => {
  const location = useLocation();
  // const { width, height } = useWindowDimensions();
  // let iwidth = width * 0.8 * 0.8;
  // let iheight = height;

  const Title = "Secrets of Array.reduce";
  const Created = "October 03, 2022";
  const TopImage = "media/secretsw640.jpg";

  if (location.pathname.toString() === "/bloglist"  || location.pathname.toString() === "/") {
    return (
      <span>
        <span className="blogListItem">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }

  const TopSect = () => {
    return (
      <>
        <div className="blogPostTopImg">
          <img
            src={TopImage}
            title="Secrets"
            alt="Secrets of a woman"
          />
          </div>
          <h1 className="blogPostTitle">{Title}</h1>
          <h2 className="blogPostDate">{Created}</h2>
      </>
    );
  };

  const TopBox = () => {
    return (
      <div className="h2Box">
        <div className="blogPostText">
          <span>
            Array.reduce(callbackFn, <em>optional initialValue</em>)
          </span>
        </div>
        <div className="blogPostText">
          <span>
            callbackFn(previousValue, currentValue,{" "}
            <em>optional currentIndex</em>)
          </span>
        </div>
      </div>
    );
  };

  const Sect1 = () => {
    return (
      <>
        <h2 className="blogPostText">The rules:</h2>
        <div className="h2Box">
        <ul>
          <li className="blogLiDot">
            reduce() executes your callbackFn for each element of an array, one
            at a time, in order.
          </li>
          <li className="blogLiDot">
            reduce() is a <em>recursive function</em>. That means it passes the
            result of the callbackFn as the new previousValue to the next call
            to the callbackFn - and it keeps doing it over and over until it
            hits the end of the array.
          </li>
          <li className="blogLiDot">
            {" "}
            The final result is a single value - that is, it's the result of the
            final callbackFn.
          </li>
          <li className="blogLiDot">
            If you don't specify an initial value, the element at array[0] is
            used as the initial value and the current value starts at array[1].
          </li>
          <li className="blogLiDot">
            If you do specify an initial value, it is used as the previous value
            and the current value starts with array[0].
          </li>
        </ul>
        </div>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blogPostText">What do the rules imply?</h2>
        <p className="blogPostText">
          Have you noticed that Reduce was misnamed? It should have been called
          'Accumulate' since every recursion passes the result of the previous
          callbackFn as the previousValue of the next callbackFn. Like this:
        </p>
        <div className="h2Box">
        <p className="blogPostNote">
          <b>Note:</b> The code below is interactive. You can change anything
          you want and run it by typing 'node filename' in the terminal prompt!
           Hit enter to run it. Unfortunately, your
          changes can't be saved. If you refresh the page or leave it and come
          back your changes will be lost. Sad! But you can use Notepad++, VS
          Code, or any other text editor to save your changes for posterity.
        </p>
        </div>
        <div className="iframeBox">
          <iframe className = "codesandbox"
            title="StackBlitz"
            width= "100%"
            src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-sum-no-initial-value.js&hideExplorer=1&hideNavigation=1&view=editor"
          ></iframe>
        </div>
      </>
    );
  };

  const Sect3 = () => {
    return (
      <>
        <p className="blogPostText">
          Another thing. If you specify an initial value it simply tacks one
          more iteration onto the start of the queue. Otherwise, the initial
          value will simply be array[0].
        </p>
        <p className="blogPostText">
          Here's an example showing reduce with an initial value and without:
        </p>
        <div className="iframeBox">
          <iframe className = "codesandbox"
            title="StackBlitz"
            width= "100%"
            src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce.js&hideExplorer=1&hideNavigation=1&view=editor"
          ></iframe>
        </div>
      </>
    );
  };

  const Sect4 = () => {
    return (
      <>
        <p className="blogPostText">
          Did you know you can even return an object from a reduce callbackFn?
        </p>
        <p className="blogPostText">
          Here's an example showing how to use reduce with an array of objects.
          The first example demonstrates returning an object from reduce without
          an initial value. The second example demonstrates returning an object
          from reduce with an initial value.
        </p>
        <div className="iframeBox">
          <iframe className = "codesandbox"
            title="StackBlitz"
            width= "100%"
            src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-return-an-object.js&hideExplorer=1&hideNavigation=1&view=editor"
          ></iframe>
        </div>
      </>
    );
  };

  const Sect5 = () => {
    return (
      <>
        <p className="blogPostText">
          You can use reduce to flatten an array of arrays.
        </p>
        <p className="blogPostText">Here's an example:</p>
        <div className="iframeBox">
          <iframe className = "codesandbox"
            title="StackBlitz"
            width= "100%"
            src="https://stackblitz.com/edit/node-sslzcl?embed=1&file=reduce-flatten-array.js&view=editor"
          ></iframe>
        </div>
      </>
    );
  };

  return (
    <main className="blogPostContainer">
      <article className="blogPostPage">
        <TopSect />
        <TopBox />
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <Sect4 />
        <Sect5 />
        <h2 className="blogPostText">
          See the full details on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noreferrer">MDN</a>
        </h2>
      </article>
    </main>
  );
};
