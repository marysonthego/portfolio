import React from "react";
import { useLocation } from "react-router-dom";
import {DefsB221121, DefsB221123, DefsB221201} from "./JoinDefinitions";

export const B221201 = () => {
  const location = useLocation();

  const Title = "Joins Part 3 - Basic Outer Joins";
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
          <h2 className="blog">&nbsp;Definitions</h2>
          <ul>
            <DefsB221201/>
            <DefsB221123/>
            <DefsB221121/>
          </ul>
        </div>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blog">&nbsp;Schema</h2>
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
              You should get 16 rows back - every row in the customer table merged with
              every matching row in the orderc table. If there's no match for the customerId in the orderc table, you'll still get a row for that customerId, but columns from the right table will be empty. In a left outer join, nothing is ever added to the results from the right table that doesn't match something that's already in the left table.
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
              You should get 10 rows back. In a right outer join, the right table controls the results. orderc is the right table. This means you will get every row in the orderc table merged with every matching row in the customer table. If there's no match in the customer table, you'll still get the customerId row in the orderc table merged with null columns from the customer table.<br/><br/> You might expect to get 16 rows again, but since there are only 10 customerIds in the orderc table, no rows are added for the extra customerIds in the customer table. The extra ids are ignored. However, any customerIds in the orderc table that are missing from the customer table will be added with blank columns representing the columns from the customer table.
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
              <br/><br/>Did you notice that the full outer join returned the same results as the left outer join? With basic join conditions, if the controlling table has the most rows it will be equivalent to a full outer join. This means a left outer join on the larger customer table is equivalent to a full outer join. However, a right outer join on the smaller orderc table will not be equivalent to a full outer join on both tables.
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
