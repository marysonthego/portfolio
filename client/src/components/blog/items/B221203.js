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
          <li className="blogLi">
            <b>Basic Join Condition</b> a simple <code>ON t1.colA = t2.colB</code> type match. Later, we'll look at more complex join conditions and how they affect the results.
          </li>

          <li className="blogLi">
              <b>OUTER JOIN </b>There is <i>no such thing</i> as an OUTER JOIN
              that isn't qualified with <b>LEFT</b> or <b>RIGHT</b> or <b>FULL</b>.
              <ul>
              <li className="blogLi">
                OUTER JOINs are usually applied to only two tables. It is hard to write an outer join on more than two tables.
              </li>
              <li className="blogLi">
                OUTER JOINs are handy for finding rows that are missing.
              </li>
                <li className="blogLi">
                  <b>LEFT OUTER JOIN </b>is interchangeable with{" "}
                  <b>LEFT JOIN</b>.
                  <ul>
                    <li className="blogLi">
                      returns every row in the first table plus every row
                      in the second table even when there are no matches. If there are no matches in the second table, null values are shown in the columns with no matches.
                    </li>
                  </ul>
                </li>
                <li className="blogLi">
                  <b>RIGHT OUTER JOIN </b>is interchangeable with{" "}
                  <b>RIGHT JOIN</b>.
                  <ul>
                    <li className="blogLi">
                      returns every row in the second table plus every row in the first table even when there are no matches.
                      If there are no matches in the first table, null values are shown in the columns with no matches.
                    </li>
                  </ul>
                </li>
                <li className="blogLi">
                  <b>FULL OUTER JOIN </b>is interchangeable with{" "}
                  <b>FULL JOIN</b>.
                  <ul>
                    <li className="blogLi">
                    return the matching rows from both tables, and also the rows from both tables that do not match.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="blogLi">
              <b>INNER JOIN </b>is interchangeable with <b>JOIN</b>.
              <ul>
                <li className="blogLi">
                    never qualified with LEFT or RIGHT or FULL.
                </li>
                <li className="blogLi">
                  returns only rows that match the WHERE, ON, or USING clause in both tables.
                </li>
                <li className="blogLi">
                  In Postgres, if you omit the Join Condition you will get a syntax error. A Join Condition is required and usually enforces referential integrity.
                </li>
                 <li className="blogLi">
                  INNER JOINs are much more common than OUTER JOINs because outer joins are necessary only when you need to see data from all rows, even those that have no matching row in another table.
                </li>
                <li className="blogLi">
                  You can use an INNER JOIN to join more than two tables by chaining them together.
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
                The ON clause specifies how to join tables while the WHERE
                clause restricts which rows to include in the results.
              </li>
              <li className="blogLi">
                USING specifies a list of columns to join from the columns in
                two tables. The columns must have the same name in each table.
                like <i>USING (columnA) </i> means each table must have a{" "}
                <i>columnA</i> and each columnA must be the same data type.
              </li>
            </ul>

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
        <div className="blogImg" >
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
