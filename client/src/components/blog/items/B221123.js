import React from "react";
import { useLocation } from "react-router-dom";

export const B221123 = () => {
  const location = useLocation();

  const Title = "Joins Part 2 - INNER JOIN";
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

  const Sect1 = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blog">Definitions</h2>
          <ul>
            <li className="blogLi">
              <b>INNER JOIN </b>is interchangeable with <b>JOIN</b>.
              <ul>
                <li className="blogLi">
                  returns only rows that match the WHERE, ON, or USING clause in
                  both tables.
                </li>
                <li className="blogLi">
                  In Postgres, if you omit the Join Condition you will get a
                  syntax error. A Join Condition is required and enforces
                  referential integrity.
                </li>
                <li className="blogLi">
                  INNER JOINs are much more common than OUTER JOINs because
                  outer joins are necessary only when you need to see data from
                  all rows, even those that have no matching row in another
                  table.
                </li>
                <li className="blogLi">
                  You can use an INNER JOIN to join more than two tables by
                  chaining them together.
                </li>
              </ul>
            </li>

            <li className="blogLi">
              <b>Join Condition </b>a WHERE, ON, or USING clause that limits the
              rows returned to those that match the condition.
            </li>
            <ul>
              <li className="blogLi">
                WHERE and ON use a search condition like{" "}
                <i>ON table1.columnA = table2.columnB</i> or{" "}
                <i>WHERE table1.columnA = table2.columnB</i>
              </li>
              <li className="blogLi">
                USING specifies a list of columns to join from the columns in
                two or more tables. The columns must have the same name in each
                table. like <i>USING (columnA) </i> which means each table must
                have a <i>columnA</i> and each columnA must be the same data
                type.
              </li>
            </ul>

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
          <h2 className="blog">Schema</h2>
          <div className="blogImg">
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
              <b>Example INNER JOIN</b>
              <br />
            </span>
            <code>
              SELECT cu.customerId, <br />
              o.customerId as orderc_customerId, o.orderId <br />
              FROM customer cu <br />
              INNER JOIN orderc o <br />
              ON cu.customerId = o.customerId <br />
              ORDER BY cu.customerId;
            </code>
            <br />
            <span className="blogNote">
              You should get 10 rows back - every row in the customer table and
              the orderc table that have matching customerIds.
              <br />
              <br />
            </span>

            <span className="blogNote">
              <b>Example INNER JOIN with no Join Condition</b>
              <br />
            </span>
            <code>
              SELECT cu.customerId, <br />
              o.customerId as orderc_customerId, o.orderId <br />
              FROM customer cu <br />
              INNER JOIN orderc o <br />
              ORDER BY cu.customerId;
            </code>
            <br />
            <span className="blogNote">
              You should get a syntax error. INNER JOINs require a Join
              Condition.
              <br />
              <br />
            </span>

            <span className="blogNote">
              <b>Example INNER JOIN on three tables</b>
              <br />
            </span>
            <code>
              SELECT cu.customerId, <br />
              o.orderId, <br />
              ol.productId, <br />
              ol.orderedQuantity <br />
              FROM customer cu <br />
              INNER JOIN orderc o <br />
              ON cu.customerId = o.customerId <br />
              INNER JOIN orderLine ol <br />
              ON ol.orderId = o.orderId <br />
              ORDER BY cu.customerId;
            </code>
            <br />
            <span className="blogNote">
              You should get 18 rows back. First, we get all rows where the
              customerId in the customer table matches the customerId in the
              orderc table. Given that list, we next match the orderId in the
              orderc table with the orderId in the orderLine table.
              <br />
              <br />
            </span>
          </span>
        </div>
        <div className="blogNote">
          <h2 className="blog">Postgres interactive playground</h2> uses the
          Postgres PSQL command-line interface. You can enter queries against
          the tables shown in the schema. Note that if you leave or refresh this
          page, your queries will disappear - though the tables and data will
          still be loaded. <br />
          <br /> You can enter statements on multiple lines, but be sure to end
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
        <div className="blogImg">
          <img src={TopImage} title="Table Joins" alt="Table Joins" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <div className="blog">
          <h2 className="blog">Part 3 will talk about Outer Joins</h2>
        </div>
      </article>
    </main>
  );
};
