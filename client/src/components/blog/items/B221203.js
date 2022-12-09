import React from "react";
import { useLocation } from "react-router-dom";

export const B221203 = () => {
  const location = useLocation();

  const Title = "Joins Part 3 - OUTER JOIN";
  const Created = "December 2, 2022";
  const TopImage = "media/rowinwavesw700.png"
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist") {
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
        <div className="h2Box">
          <h2 className="blog">Definitions</h2>
          <ul>


          </ul>
        </div>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blog">Schema</h2>
          <div className="blogTopImg">
            <img src={ModelImage} title="Model" alt="Model" />
          </div>
        </div>
      </>
    );
  };

  const Sect3 = () => {
    return (
      <>
        <div className="blog">
          <h2 className="blog">Try some queries!</h2>
          <span className="blogText">
            <br />
            <code>SELECT * from customer;</code>
            <br />
            <span className="blogNote">
              You should get 15 rows back.
              <br />
              <br />
            </span>
            <span className="blogText">
              <code>SELECT * from orderc;</code>
              <br />
              <span className="blogNote">
                You should get 10 rows back.
                <br />
                <br />
              </span>
            </span>

            <span className="blogNote">
              <b>Example LEFT OUTER JOIN</b>
              <br />
            </span>
            <code>
            SELECT cu.customerId,<br/>
            o.customerId as orderc_customerId,<br/>
            o.orderId <br/>
            FROM customer cu <br/>
            LEFT OUTER JOIN orderc o <br/>
            &nbsp;&nbsp;ON cu.customerId = o.customerId<br/>
            ORDER BY cu.customerId;<br/>
            </code>
            <span className="blogNote">
              You should get 16 rows back - every row in the customer table and
              every row in the orderc table even when there are no matching customerIds in the orderc table.
              <br />
              <br />
            </span>

            <span className="blogNote">
              <b>Example RIGHT OUTER JOIN </b>
              <br />
            </span>
            <code>
              SELECT cu.customerId, <br />
              o.customerId as orderc_customerId, o.orderId <br />
              FROM customer cu <br />
              RIGHT OUTER JOIN orderc o <br />
              &nbsp;&nbsp;ON cu.customerId = o.customerId<br/>
              ORDER BY cu.customerId;<br/>
            </code>
            <span className="blogNote">
              You should get 10 rows back - every row in the orderc table and every row in the customer table even when there are no matching customerIds in the customer table. You might expect to get 16 rows again, but notice that there are only 10 customerIds in the orderc table. You will only receive those 10 customerIds from the customer table. Any other customerIds in the customer table are ignored. However, any customerIds in the orderc table that are missing from the customer table will be added.
              <br />
              <br />
            </span>

            <span className="blogNote">
              <b>Example FULL OUTER JOIN </b>
              <br />
            </span>
            <code>
            SELECT cu.customerId, <br />
              o.customerId as orderc_customerId, o.orderId <br />
              FROM customer cu <br />
              FULL OUTER JOIN orderc o <br />
              &nbsp;&nbsp;ON cu.customerId = o.customerId<br/>
              ORDER BY cu.customerId;<br/>
            </code>
            <br />
            <span className="blogNote">
              You should get 16 rows back - all rows in the customer table plus all rows in the orderc table - even if the customerIds in the two tables do not match.
              <br />
              <br />
            </span>
          </span>
        </div>
        </>
      );
    };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogTopImg" >
          <img src={TopImage} title="Model" alt="Model" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
      </article>
    </main>
  );
};
