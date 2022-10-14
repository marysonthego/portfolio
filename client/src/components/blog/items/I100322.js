import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";

export const I100322 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "Secrets of Array.reduce";
  const Created = "October 03, 2022";

  if (location.pathname.toString() === "/blog") {
    return (
      <>
        <div>{Title}</div>
        <div className="listDate">{Created}</div>
      </>
    );
  }

  const Sect1 = () => {
    return (
      <>
        <ul>
          <li className="blogText">
            reduce() executes your callbackFn for each element of an array, one
            at a time, in order.
          </li>
          <li className="blogText">
            reduce() is a <b>recursive function</b>. It passes the result of the
            callbackFn as the previousValue to the next call to the callbackFn,
            and it keeps doing this until the array is exhausted.
          </li>
          <li className="blogText">
            {" "}
            The final result will be a single value.
          </li>
          <li className="blogText">
            If you don't specify an initial value, the element at array[0] is
            used as the initial value and the current value starts at array[1].
          </li>
          <li className="blogText">
            If you do specify an initial value, it is used as the previous value
            and the current value starts with array[0].
          </li>
        </ul>
        <h3 className="blogText">What does all this mean?</h3>
        <p className="blogText">
          Have you noticed that Reduce was misnamed? It should have been called
          'Accumulate' since every recursion passes the result of the previous
          callbackFn as the previousValue of the next callbackFn. Like this:
        </p>
      </>
    );
  };

  if (width < 410) {
    return (
      <main className="container">
        <article className="blog">
          <h1 className="blog">{Title}</h1>
          <h2 className="itemDate">{Created}</h2>
          <h2 className="blog">
            Array.reduce(callbackFn, <i>optional initialValue</i>)
          </h2>
          <h2 className="blog">
            callbackFn(previousValue, currentValue, <i>optional currentIndex</i>
            )
          </h2>
          <Sect1 />
          <div>
            <iframe
              title="StackBlitz"
              width={iwidth + 50}
              height={iheight}
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-sum-no-initial-value.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
          <p className="blogText">
            Another thing. If you specify an initial value it simply tacks one
            more iteration onto the start of the queue. Otherwise, the initial
            value will simply be array[0].{" "}
          </p>
          <p>
            Here's an example showing reduce with an initial value and without:
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
          <h1 className="blog">{Title}</h1>
          <div className="itemDate">{Created}</div>
          <div className="h2Box">
            <h2 className="blog">
              <span>
                Array.reduce(callbackFn, <em>optional initialValue</em>)
              </span>
            </h2>
            <h2 className="blog">
              <span>
                callbackFn(previousValue, currentValue,{" "}
                <em>optional currentIndex</em>)
              </span>
            </h2>
          </div>
          <Sect1 />
          <div>
            <iframe
              title="StackBlitz"
              width="800px"
              height="600px"
              src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce-sum-no-initial-value.js&hideExplorer=1&hideNavigation=1&view=editor"
            ></iframe>
          </div>
          <p className="blogText">
            Another thing. If you specify an initial value it simply tacks one
            more iteration onto the start of the queue. Otherwise, the initial
            value will simply be array[0].
          </p>
          <p>
            Here's an example showing reduce with an initial value and without:
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
