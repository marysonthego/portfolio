import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B221123 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "MySQL Joins Part 2 - MySQL Joins";
  const Created = "November 23, 2022";
  const TopImage = "media/model01.png";

  if (location.pathname.toString() === "/blog") {
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
              <b>Join Condition </b>a WHERE, ON, or USING clause that limits the rows returned to those that match a condition.
            </li><ul>
                <li className="blogLi">
                  WHERE and ON use a search condition like <i>ON table1.columnA = table2.columnB</i> or <i>WHERE table1.columnA = table2.columnB</i>
                </li>
                <li className="blogLi">
                  The ON clause specifies how to join tables while the WHERE clause restricts which rows to include in the results.
                </li>
                <li className="blogLi">
                  USING specifies a list of columns to join from the columns in two tables where the columns have the same name like <i>USING (columnA, columnB)</i>
                </li>
              </ul>
            <li className="blogLi">
              <b>INNER JOIN </b>In MySQL, interchangeable with <b>JOIN</b> and <b>CROSS JOIN</b>.
              <ul>
                <li className="blogLi">
                returns every row in the first table plus every row in the second table. You can limit the results from the second table by using a join condition.
                </li>
              </ul>
            </li>
            <li className="blogLi">
              <b>LEFT JOIN </b>is interchangeable with <b>LEFT OUTER JOIN</b>.
              <ul>
                <li className="blogLi">
                  returns every row in the first table plus any matching rows in the second table. If there are no matches in the second table, no records from the second table are returned.
                </li>
              </ul>
            </li>
            <li className="blogLi">
              <b>RIGHT JOIN </b>is interchangeable with <b>RIGHT OUTER JOIN</b>.
              <ul>
                <li className="blogLi">
                  returns every row in the second table plus any matching rows in the first table. If there are no matches in the first table, no records from the first table are returned.
                </li>
              </ul>
            </li>
            <li className="blogLi">
              <b>OUTER JOIN </b>There is <i>no such thing</i> as an OUTER JOIN that isn't qualified with LEFT or RIGHT.
              <ul>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blog">Some example joins</h2>
        <p className="blogText">
          Let's do some joins between the customer_t table and the order_t
          table.
        </p>
        <div>
          <h3 className="blog">customer_t table</h3>
          <img
            src="media/customer_t-list.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />
          <br />
          <div>
            <h3 className="blog">order_t table</h3>
          </div>
          <img
            src="media/order_t-list.png"
            title="order_t table"
            className="blogImg"
            alt="order_t table"
          />
        </div>
        <br />
        <h3 className="blog">WHERE, ON, USING</h3>
      </>
    );
  };

  const Sect3 = () => {
    return (
      <>
        <div className="h3Box">
          <h3 className="blog">WHERE</h3>
          <p className="blogText">
            We can join the customer_t and order_t tables with a simple WHERE
            clause. When you use a WHERE clause on multiple tables, you are
            doing a join without specifying a join clause.{" "}
          </p>
          <p className="blogText">
            <b>Question: </b>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer_t c, order_t o <br />
              WHERE o.customerId = c.customerid <br />
              ORDER BY customerId;
            </code>
          </p>
          <img
            src="media/q01-where.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />
          <br />
          <p className="blogText">
            Just for curiousity, let's do the same query without the WHERE
            clause.{" "}
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer_t c, order_t o <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogText">
            Notice that this time we get 165 rows back! We are getting every
            combination of values between the two tables.
          </p>
          <p className="blogNote">
            (15 rows in order_t * 11 rows in customer_t = 165 rows total)
          </p>
          <img
            src="media/q02-no-WHERE.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />
        </div>
        <br />
      </>
    );
  };

  const Sect4 = () => {
    return (
      <>
        <div className="h3Box">
          <h3 className="blog">ON</h3>
          <p className="blogText">
            Joins increase the flexibility of simple FROM - WHERE statements.
            There are many types of joins. For now, just notice the ON clause.
            We'll explain the major types of joins soon. To use a join all you
            have to do is add the JOIN and replace WHERE with ON.{" "}
          </p>
          <p className="blogText">
            <b>Question: </b>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer_t c INNER JOIN order_t o <br />
              ON o.customerId = c.customerId <br />
              ORDER BY customerId;
            </code>
          </p>
          <img
            src="media/q03-ON.png"
            title="From where to ON"
            className="blogImg"
            alt="query 3 ON"
          />
        </div>
        <br />
      </>
    );
  };

  const Sect5 = () => {
    return (
      <>
        <div className="h3Box">
          <h3 className="blog">USING</h3>
          <p className="blogText">
            Using is a variation of the ON clause where you provide a comma separated list of
            columns you want to compare between two tables. The column names and
            domain must be the same for each column in each table, and, of
            course, the columns must exist in each table.
          </p>
          <p className="blogText">
            <b>Question: </b>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer_t c INNER JOIN order_t o <br />
              USING (customerId) <br />
              ORDER BY customerId;
            </code>
          </p>
          <img
            src="media/q04-USING.png"
            title="USING example"
            className="blogImg"
            alt="query 4 USING"
          />
        </div>
        <br />
        <p className="blogText">
          In part 2 we will look at several commonly used types of joins.
        </p>
      </>
    );
  };

  return (
    <main className="container">
      <article className="blog">
        <img src={TopImage} title="Model" className="blogImg" alt="Model" />
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
      </article>
    </main>
  );
};
