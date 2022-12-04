import React from "react";
import { useLocation } from "react-router-dom";

export const B221201 = () => {
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
          <h2 className="blog">&nbsp;Definitions</h2>
          <ul>


          <li className="blogLi">
              <b>OUTER JOIN </b>There is <i>no such thing</i> as an OUTER JOIN
              that isn't qualified with <b>LEFT</b> or <b>RIGHT</b> or <b>FULL</b>.
              <ul>
              <li className="blogLi">
                OUTER JOINs are usually applied to only two tables. It's hard to write an outer join on more than two tables.
              </li>
              <li className="blogLi">
                OUTER JOINs are handy for finding missing rows because, if you use a basic join condition you will always get all the rows in the outer join table merged with the matches in the second table. This means you will get rows back with empty columns if there's no match in the second table. The rows with empty column represent missing matches in the second table.
              </li>
                <li className="blogLi">
                  <b>LEFT OUTER JOIN </b>is interchangeable with{" "}
                  <b>LEFT JOIN</b>.
                  <ul>
                    <li className="blogLi">
                      The first (leftmost) table in the FROM clause is the controlling table.
                    </li>
                    <li className="blogLi">
                      returns every row in the left table merged with every matching row
                      in the right table. If there is no match in the right table, null values are returned as place-holders for the right table columns. With a basic join condition, the result count will never be less than the number of rows in the left table because, all the matching rows from the right table (and there can be more than one) are merged and any rows in the left table without matches are populated with place-holder null or blank values.
                    </li>
                  </ul>
                </li>
                <li className="blogLi">
                  <b>RIGHT OUTER JOIN </b>is interchangeable with{" "}
                  <b>RIGHT JOIN</b>.
                  <ul>
                  <li className="blogLi">
                      opposite of a LEFT OUTER JOIN. The second (rightmost) table in the FROM clause is the controlling table.
                    </li>
                    <li className="blogLi">
                      returns every row in the right table merged with every matching row in the left table. If there is no match in the left table, null or blank values are returned as place-holders for the left table columns. With a basic join condition, the result count will never be less than the number of rows in the right table.
                    </li>
                  </ul>
                </li>
                <li className="blogLi">
                  <b>FULL OUTER JOIN </b>is interchangeable with{" "}
                  <b>FULL JOIN</b>.
                  <ul>
                    <li className="blogLi">
                    merges the matching rows from both tables plus the rows from both tables that do not match. A full join doesn't tell you anything about the relationships between the two tables.
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
            <li className="blogLi">
            <b>Basic Join Condition</b> a simple <code>ON t1.colA = t2.colB</code> type match. Later, we'll look at more complex join conditions and how they affect the results.
          </li>
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
              You should get 16 rows back - every row in the customer table merged with
              every matching row in the orderc table. If there's no match for the customerId in the orderc table, you'll still get a row for that customerId, but columns from the right table will be null. In a left outer join, nothing is ever added to the results from the right table that doesn't match something that's already in the left table.
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
              You should get 16 rows back - all rows in the customer table plus all rows in the orderc table - even if the customerIds in the two tables do not match. <br/><br/>Did you notice that the full outer join returned the same results as the left outer join? With basic join conditions, if the controlling table has the most rows it will be equivalent to a full outer join with the same basic join conditions.
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
