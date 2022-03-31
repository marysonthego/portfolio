import React from "react";

export default function CodeChallenges() {
  let Title = "Code Challenges";

  let Toc = (
    <div className="toc">
      Node JS
      <hr />
      <ul>
      <li>
          <a className="link-primary " target="_blank" href="https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one">
          BigInt Plus-Minus
          </a>
          &nbsp;&nbsp;Calculate to 6 decimal places
        </li>
        <li>
          <a className="link-primary " target="_blank" href="https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one">
          Min-Max Sum
          </a>
          &nbsp;&nbsp;Find the min & max values from adding 4 out of 5 integers
        </li>
        <li>
          <a className="link-primary " target="_blank" href="https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one">
          Time Conversion
          </a>
          &nbsp;&nbsp;Convert from 12-hour to 24-hour format
        </li>
        <li>
          <a className="link-primary " target="_blank" href="https://www.hackerrank.com/test/143hd7jsid6/questions/521e954e6ff11">
          FizzBuzz
          </a>
          &nbsp;&nbsp;Test with Modulo (%)
        </li>
      </ul>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
        {Toc}
      </div>

    </div>
  );
}

