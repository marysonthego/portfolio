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
          <h2 className="blog">&nbsp;Definitions</h2>
          <ul>

            <li className="blogLi">
              <b>INNER JOIN </b>is interchangeable with <b>JOIN</b>.
              <ul>
                <li className="blogLi">
                    never qualified with LEFT or RIGHT or FULL.
                </li>
                <li className="blogLi">
                  returns only rows that match the WHERE, ON, or USING clause in
                  both tables.
                </li>
                <li className="blogLi">
                  requires a join condition. In Postgres, if you omit the join condition you will get a syntax error.
                </li>
                <li className="blogLi">
                  INNER JOINs are much more common than OUTER JOINs. It's common to use outer joins when you need to see missing data or all data.
                </li>
                <li className="blogLi">
                  You can easily use INNER JOINs to join more than two tables by
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
            <li className="blogLi">
            <b>Basic Join Condition</b> a simple <code>ON t1.colA = t2.colB</code> type match. Later, we'll look at more complex join conditions and how they affect the results. For now, all the join conditions will be as basic as possible so that we can focus on how each type of JOIN works.
          </li>
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
          <div className="blogImg">
            <img src={ModelImage} title="Model" alt="Model" />
          </div>
        </div>
        <h2 className="blog">&nbsp; </h2>
          <div className="blogImg">
            <img src={"media/inner-join-2.png"} title="Model" alt="Model" />
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
              &nbsp;&nbsp;ON cu.customerId = o.customerId <br />
              ORDER BY cu.customerId;
            </code>
            <br />
            <span className="blogNote">
              You should get 10 rows back - only the rows where the customerIds are a match.
              <br />
              <br />
            </span>

            <span className="blogNote">
              <b>Example INNER JOIN on three tables</b>
              <br />
            </span>
            <code>
              SELECT cu.customerId, <br />
              o.customerId as orderCustomerId, <br/>
              o.orderId, <br />
              ol.productId as orderLineProductId <br />
              FROM customer cu <br />
              INNER JOIN orderc o <br />
              &nbsp;&nbsp;ON cu.customerId = o.customerId <br />
              INNER JOIN orderLine ol <br />
              &nbsp;&nbsp;ON ol.orderId = o.orderId <br />
              ORDER BY cu.customerId, o.orderId;
            </code>
            <br />
            <span className="blogNote">
              You should get 18 rows back. First, we get all rows where the
              customerId in the customer table matches the customerId in the
              orderc table. Next, take the results of the first match and match again with the orderId in the orderLine table.
              <br />
              <br />
            </span>
          </span>

          <span className="blogNote">
              <b>Example INNER JOIN with no join condition</b>
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

        </div>
        <div className="blogNote">
          <h2 className="blog">Postgres interactive playground</h2> uses the
          Postgres PSQL command-line interface (quick tutorial is <a href="https://tomcam.github.io/postgres/#reference" target="_blank" rel="noreferrer">here </a>). You can enter queries against
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
        <div className="blogImg">
          <img src={TopImage} title="Table Joins" alt="Table Joins" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <div className="blog">
          <h2 className="blog">Part 3 is about Outer Joins</h2>
        </div>
      </article>
    </main>
  );
};
