import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B221121 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "MySQL Joins Part 1 - WHERE, ON, USING";
  const Created = "November 21, 2022";
  const TopImage = "media/mysql-buttonx640blue.jpg";

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
          <h2 className="blog">A few definitions</h2>
          <ul>
            <li className="blogLi">
              <b>Join </b>the act of combining two (or more) tables that have
              one (or more) common domains into a single table or view of
              results.
            </li>

            <li className="blogLi">
              <b>Domain </b>the data type of a column - like string, integer, or
              date.
            </li>

            <li className="blogLi">
              <b>Foreign Key </b> the corresponding column (or set of columns)
              that refers to a primary key in another table.
              <ul>
                <li className="blogLi">
                  A foreign key in one table (usually called the <i>child</i>{" "}
                  table) references a primary key in another table (usually
                  called the <i>parent </i>table).
                </li>

                <li className="blogLi">
                  Even though it is in a <i>child</i> table, the foreign key is
                  the most important part of the relationship between two
                  tables. The foreign key is what defines the relationship
                  between them. Every table can (and usually does) have a
                  primary key, but without a foreign key in another table, you
                  do not have a relationship between the two tables!{" "}
                </li>

                <li className="blogLi">
                  Both the primary key and foreign key must be of the same
                  domain (which is a fancy way of saying they must have the same
                  data type).
                </li>
              </ul>
            </li>
            <li className="blogLi">
              <b>Primary Key </b>the column (or set of columns) that uniquely
              identifies each row in a table.
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
      </>
    );
  };

  const Sect3 = () => {
    return (
      <>
        <br />
        <h3 className="blog">WHERE, ON, USING</h3>
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
        <div className="h3Box">
          <h3 className="blog">USING</h3>
          <p className="blogText">
            Using is a variation of the ON clause where you provide a list of columns you want to compare between two tables. The column names and domain must be the same for each column in each table, and, of course, the columns must exist in each table.
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
        <p className="blogText">In part 2 we will look at several commonly used types of joins.</p>
      </>
    );
  };

  return (
    <main className="container">
      <article className="blog">
        <img
          src={TopImage}
          title="640x340 is ok"
          className="blogImg"
          alt="Top Image Alt"
        />
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>

        <Sect1 />
        <Sect2 />
        <Sect3 />
      </article>
    </main>
  );
};
