import React from "react";
import { useLocation } from "react-router-dom";
import { DefsB221121, DefsB221123, DefsB221201 } from "./JoinDefinitions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B221201 = () => {
  const location = useLocation();

  const Title = "SQL Joins Part 3 - Basic Outer Joins";
  const Created = "December 2, 2022";
  const TopImage = "media/rowinwavesw700.png";
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist"  || location.pathname.toString() === "/") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }

  const Syntax1 = `SELECT * from customer;  -- Should return 15 rows.
SELECT * from orderc;  -- Should return 10 rows.`;

  const Syntax2 = `SELECT cu.customerId, o.customerId as orderc_customerId, o.orderId
FROM customer cu LEFT OUTER JOIN orderc o
ON cu.customerId = o.customerId
ORDER BY cu.customerId;`;

  const Syntax3 = ` SELECT cu.customerId, o.customerId as orderc_customerId, o.orderId
FROM customer cu RIGHT OUTER JOIN orderc o
ON cu.customerId = o.customerId
ORDER BY cu.customerId;`;

  const Syntax4 = `SELECT cu.customerId, o.customerId as orderc_customerId, o.orderId
FROM customer cu FULL OUTER JOIN orderc o
ON cu.customerId = o.customerId
ORDER BY cu.customerId;`;

  const Code = ({ Syntax }) => {
    return (
      <div className="blogPostSyntax">
      <SyntaxHighlighter language="jsx" style={xonokai} wrapLongLines>
        {Syntax}
      </SyntaxHighlighter>
      </div>
    );
  };

  const Definitions = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blogPostText">Definitions</h2>

          <ul>
            <DefsB221201 />
            <DefsB221123 />
            <DefsB221121 />
          </ul>
        </div>
      </>
    );
  };

  const Schema = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blogPostText">Schema</h2>
          <div className="blogPostTopImg">
            <img src={ModelImage} title="Schema" alt="Schema" />
          </div>
        </div>
      </>
    );
  };

  const Queries = () => {
    return (
      <>
        <div className="blogPostPage">
          <br />
          <h2 className="blogPostQuery">Try some queries!</h2>
          <Code Syntax={Syntax1} />
          <p className="blogPostText">Initial data</p>
          <h2 className="blogPostQuery">LEFT OUTER JOIN</h2>
          <Code Syntax={Syntax2} />
          <p className="blogPostText">
            You should get 16 rows back - every row in the customer table merged
            with every matching row in the orderc table. When there's no match
            for the customerId in the orderc table, you'll still get a row for
            that customerId, but columns from the right table will be empty. In
            a left outer join, nothing is ever added to the results from the
            right table that doesn't match something that's already in the left
            table.
          </p>
          <h2 className="blogPostQuery">RIGHT OUTER JOIN</h2>
          <Code Syntax={Syntax3} />
          <p className="blogPostText">
            You should get 10 rows back. In a right outer join, the right table
            controls the results. orderc is the right table. This means you will
            get every row in the orderc table merged with every matching row in
            the customer table. If there's no match in the customer table,
            you'll still get the customerId row in the orderc table merged with
            null columns from the customer table.
            <br />
            <br /> You might expect to get 16 rows again, but since there are
            only 10 customerIds in the orderc table, no rows are added for the
            extra customerIds in the customer table. The extra ids are ignored.
            However, any customerIds in the orderc table that are missing from
            the customer table will be added with blank columns representing the
            columns from the customer table.
          </p>

          <h2 className="blogPostQuery">FULL OUTER JOIN</h2>
          <Code Syntax={Syntax4} />
          <p className="blogPostText">
            You should get 16 rows back - all rows in the customer table plus
            all rows in the orderc table - even if the customerIds in the two
            tables do not match.
            <br />
            <br />
            Did you notice that the full outer join returned the same results as
            the left outer join? With basic join conditions, if the controlling
            table has the largest number of rows, it will be equivalent to a
            full outer join.
          </p>
        </div>
      </>
    );
  };

  return (
    <main className="blogPostContainer">
      <article className="blogPostPage">
        <div className="blogPostTopImg">
          <img src={TopImage} title="rowing together" alt="rowing together" />
        </div>
        <h1 className="blogPostTitle">{Title}</h1>
        <h2 className="blogPostDate">{Created}</h2>
        <Definitions />
        <Schema />
        <Queries />
        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
      </article>
    </main>
  );
};
