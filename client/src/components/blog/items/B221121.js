import React from "react";
import { useLocation } from "react-router-dom";
import {DefsB221121} from "./JoinDefinitions";

export const B221121 = () => {
  const location = useLocation();

  const Title = "SQL Joins Part 1 - WHERE, ON, USING";
  const Created = "November 21, 2022";
  const TopImage = "media/joinhands.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }

  const Definitions = () => {
    return (
      <>
        <div className="h2Box">
          <h2 className="blogPostText">&nbsp;A few definitions</h2>
          <ul>
            <DefsB221121/>
          </ul>
        </div>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blogPostQuery">Example join conditions</h2>
        <p className="blogPostText">
          Let's look at some examples using the customer table and the orderc
          table. The tables look like this:
        </p>
        <div>
          <h3 className="blogPostText">customer table</h3>
          <div className="blogImg">
          <img
            src="media/customer_t-list.png"

            title="customer table"
            alt="customer table"
          />
        </div>
          <br />
          <div>
            <h3 className="blogPostText">orderc table</h3>
          </div>
          <div className="blogImg">
          <img
            src="media/order_t-list.png"
            title="orderc table"
            alt="orderc table"
          />
        </div>
        </div>

      </>
    );
  };

  const Sect3 = () => {
    return (
      <>
        <br />
        <h2 className="blogPostQuery">WHERE, ON, USING</h2>
          <h3 className="blogPostText">WHERE</h3>
          <p className="blogPostText">
            We can join the customer and orderc tables with a simple WHERE
            clause. When you use a WHERE clause on multiple tables, you are
            doing a join without specifying a join clause.
          </p>
          <p className="blogPostText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogPostText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c, orderc o <br />
              &nbsp;&nbsp;WHERE o.customerId = c.customerid <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogPostText">
            The WHERE says that for every order, return the orderId and the customer who placed it.
          </p>
          <p className="blogPostText">10 rows returned</p>
          <div className="blogImg">
          <img
            src="media/q01-where.png"
            title="customer_t table"
            alt="customer_t table"
          />
          </div>
          <br />
          <p className="blogPostText">
            What happens if we leave out the WHERE clause?
          </p>
          <p className="blogPostText">
            <code>
              SELECT c.customerId, customerName, orderId, o.customerId as
              order_customerId
              <br />
              FROM customer c, orderc as o<br />
              order by c.customerId, o.customerId;
            </code>
          </p>
          <p className="blogPostText">
            Notice that this time we get 150 rows back! We are getting every
            combination of rows between the two tables even when the rows do not
            have any relationship between them. That is, each customerId in the
            customer table is matched with every row in the orderc table -
            even when the customer did not place the order!
          </p>
          <p className="blogPostText">
            (15 rows in orderc * 10 rows in customer = 150 rows total).
          </p>
          <div className="blogImg">
          <img
            src="media/q02-no-WHERE.png"
            title="customer_t table"
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
          <h3 className="blogPostText">ON</h3>
          <p className="blogPostText">
            Joins increase the flexibility of simple FROM - WHERE statements.
            You will see many types of joins in part 2. For now, just notice the ON
            clause. In Part 2 I'll explain the major types of joins. For now,
            just remember that to use a join all you have to do is add the JOIN clause
            and replace WHERE with ON.{" "}
          </p>
          <p className="blogPostText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogPostText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c INNER JOIN orderc o <br />
              &nbsp;&nbsp;ON o.customerId = c.customerId <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogPostText">
            INNER JOIN ... ON returns the same results as the WHERE clause before.
          </p>
          <p className="blogPostText">10 rows returned</p>
          <div className="blogImg">
          <img
            src="media/q03-ON.png"
            title="From where to ON"
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
          <h3 className="blogPostText">USING</h3>
          <p className="blogPostText">
            USING is a variation of the ON clause. You provide a comma separated
            list of columns to compare between two tables. The column
            names and domain must be the same, and of course, the columns must
            exist in each table.
          </p>
          <p className="blogPostText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogPostText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c INNER JOIN orderc o <br />
              &nbsp;&nbsp;USING (customerId) <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogPostText">
            INNER JOIN ... USING (<i>column list</i>) returns the same results as the ON clause with an INNER JOIN and the WHERE clause with no JOIN clause.
          </p>
          <p className="blogPostText">10 rows returned</p>
          <div className="blogImg">
          <img
            src="media/q04-USING.png"
            title="USING example"
            alt="query 4 USING"
          />
          </div>
        <br />
        <h2 className="blogPostText">In part 2 we will look at inner joins.</h2>
      </>
    );
  };

  return (
    <main className="blogPostContainer">
      <article className="blogPostPage">
        <div className="blogPostTopImg">
          <img src={TopImage} title="Schema" alt="Schema" />
        </div>
        <h1 className="blogPostTitle">{Title}</h1>
        <h2 className="blogPostDate">{Created}</h2>
        <Definitions />
        <Sect2 />
        <Sect3 />
        <Sect4 />
        <Sect5 />
      </article>
    </main>
  );
};
