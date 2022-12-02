import React from "react";
import { useLocation } from "react-router-dom";

export const B221121 = () => {
  const location = useLocation();

  const Title = "Join Conditions Part 1 - WHERE, ON, USING";
  const Created = "November 21, 2022";
  const TopImage = "media/joinhands.png";

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
          <h2 className="blog">A few definitions</h2>
          <ul>
            <li className="blogLi">
              <b>Join </b>the act of combining two (or more) tables that have
              one (or more) common domains into a single table or view of
              results.
            </li>

            <li className="blogLi">
              <b>Join Condition </b>WHERE, ON, and USING clauses are called Join
              Conditions. They limit the results returned from a Join.
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
                  Even though it is in a <i>child</i> table,{" "}
                  <i>
                    the foreign key is what defines the relationship between two
                    tables
                  </i>
                  . Every table can (and usually does) have a primary key, but
                  without a foreign key in another table, you do not have a
                  relationship between the two tables!{" "}
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
        <h2 className="blog">Example join conditions</h2>
        <p className="blogText">
          Let's look at some examples using the customer table and the orderc
          table. The tables look like this:
        </p>
        <div>
          <h3 className="blog">customer table</h3>
          <img
            src="media/customer_t-list.png"
            className="blogImg"
            title="customer table"
            alt="customer table"
          />

          <br />
          <div>
            <h3 className="blog">orderc table</h3>
          </div>

          <img
            src="media/order_t-list.png"
            className="blogImg"
            title="orderc table"
            alt="orderc table"
          />
        </div>
        <br />
        <h2 className="blog">WHERE, ON, USING</h2>
      </>
    );
  };

  const Sect3 = () => {
    return (
      <>

          <h3 className="blog">WHERE</h3>
          <p className="blogText">
            We can join the customer and orderc tables with a simple WHERE
            clause. When you use a WHERE clause on multiple tables, you are
            doing a join without specifying a join clause.
          </p>
          <p className="blogText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c, orderc o <br />
              &nbsp;&nbsp;WHERE o.customerId = c.customerid <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogNote">10 rows returned</p>
          <img
            src="media/q01-where.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />
          <br />
          <p className="blogText">
            What happens if we leave out the WHERE clause?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId, o.customerId as
              order_customerId
              <br />
              FROM customer c, orderc as o<br />
              order by c.customerId, o.customerId;
            </code>
          </p>
          <p className="blogText">
            Notice that this time we get 150 rows back! We are getting every
            combination of rows between the two tables even when the rows do not
            have any relationship between them. That is, each customerId in the
            customer table is matched with every row in the orderc table -
            even when the customer did not place the order!
          </p>
          <p className="blogNote">
            (15 rows in orderc * 10 rows in customer = 150 rows total).
          </p>
          <img
            src="media/q02-no-WHERE.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />

        <br />
      </>
    );
  };

  const Sect4 = () => {
    return (
      <>
          <h3 className="blog">ON</h3>
          <p className="blogText">
            Joins increase the flexibility of simple FROM - WHERE statements.
            You will see many types of joins in part 2. For now, just notice the ON
            clause. In Part 2 I'll explain the major types of joins. For now,
            just remember that to use a join all you have to do is add the JOIN clause
            and replace WHERE with ON.{" "}
          </p>
          <p className="blogText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c INNER JOIN orderc o <br />
              &nbsp;&nbsp;ON o.customerId = c.customerId <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogNote">10 rows returned</p>
          <img
            src="media/q03-ON.png"
            title="From where to ON"
            className="blogImg"
            alt="query 3 ON"
          />
        <br />
      </>
    );
  };

  const Sect5 = () => {
    return (
      <>
          <h3 className="blog">USING</h3>
          <p className="blogText">
            USING is a variation of the ON clause. You provide a comma separated
            list of columns to compare between two tables. The column
            names and domain must be the same, and of course, the columns must
            exist in each table.
          </p>
          <p className="blogText">
            <em>Question: </em>
            What are the customer IDs and names of all the customers, along with
            the order IDs for all the orders they have placed?
          </p>
          <p className="blogText">
            <code>
              SELECT c.customerId, customerName, orderId
              <br />
              FROM customer c INNER JOIN orderc o <br />
              &nbsp;&nbsp;USING (customerId) <br />
              ORDER BY customerId;
            </code>
          </p>
          <p className="blogNote">10 rows returned</p>
          <img
            src="media/q04-using.png"
            title="USING example"
            className="blogImg"
            alt="query 4 USING"
          />
        <br />
        <p className="blogText">In part 2 we will look at some common joins.</p>
      </>
    );
  };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogImg">
          <img src={TopImage} title="Model" alt="Model" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <Sect4 />
        <Sect5 />
      </article>
    </main>
  );
};
