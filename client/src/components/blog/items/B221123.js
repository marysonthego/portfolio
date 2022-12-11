import React from "react";
import { useLocation } from "react-router-dom";
import {DefsB221121, DefsB221123, DefsB221201} from "./JoinDefinitions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B221123 = () => {
  const location = useLocation();

  const Title = "Joins Part 2 - Basic Inner Joins";
  const Created = "November 23, 2022";
  const TopImage = "media/joinpeople.png";
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const Syntax1 = `SELECT * from customer;  -- Should return 15 rows.
  SELECT * from orderc;  -- Should return 10 rows.`;

  const Syntax2 = `SELECT cu.customerId,
  o.customerId as orderc_customerId, o.orderId
  FROM customer cu
  INNER JOIN orderc o
    ON cu.customerId = o.customerId
  ORDER BY cu.customerId;`;

  const Syntax3 = `SELECT cu.customerId,
  o.customerId as orderCustomerId,
  o.orderId,
  ol.productId as orderLineProductId
  FROM customer cu
  INNER JOIN orderc o
    ON cu.customerId = o.customerId
  INNER JOIN orderLine ol
    ON ol.orderId = o.orderId
  ORDER BY cu.customerId, o.orderId;`;

  const Syntax4 = `SELECT cu.customerId,
o.customerId as orderc_customerId, o.orderId
FROM customer cu
INNER JOIN orderc o
ORDER BY cu.customerId;`;

const Code = ({ Syntax }) => {
  return (
    <SyntaxHighlighter language="jsx" style={xonokai} wrapLongLines>
      {Syntax}
    </SyntaxHighlighter>
  );
};

  const Sect1 = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blog">&nbsp;Definitions</h2>
          <ul>
          <DefsB221123/>
          <DefsB221121/>

          </ul>
        </div>
        <br />
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
          <Code Syntax={Syntax1} />
          <h2 className="blog">INNER JOIN</h2>
          <Code Syntax={Syntax2} />
          <p className="blogNote">
            You should get 10 rows back - only the rows where the customerIds are a match.
          </p>
          <h2 className="blog">INNER JOIN on three tables</h2>
          <Code Syntax={Syntax3} />
          <p className="blogNote">
            You should get 18 rows back. First, we get all rows where the
            customerId in the customer table matches the customerId in the
            orderc table. Next, take the results of the first match and match again with the orderId in the orderLine table.
            <br />
            <br />
          </p>
          <h2 className="blog">INNER JOIN with no join condition</h2>
          <Code Syntax={Syntax4} />
            <p className="blogNote">
              You should get a syntax error. INNER JOINs require a Join
              Condition.
            </p>
        </div>
        <div className="blogNote">
          <h2 className="blog">Postgres interactive playground</h2> uses the
          Postgres PSQL command-line interface (<a href="https://tomcam.github.io/postgres/#reference" target="_blank" rel="noreferrer">quick tutorial</a>). You can enter queries against
          the tables shown in the schema. If you leave or refresh this
          page, your queries will disappear - though the tables and data will
          still be loaded. <br />
          <br /> You can enter statements on multiple lines, just be sure to end
          with a semi-colon!
        </div>
        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogTopImg">
          <img src={TopImage} title="Table Joins" alt="Table Joins" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <div className="blog">
          <h2 className="blog">We'll look at basic Outer Joins next.</h2>
        </div>
      </article>
    </main>
  );
};
