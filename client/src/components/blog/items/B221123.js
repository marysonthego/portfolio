import React from "react";
import { useLocation } from "react-router-dom";

export const B221123 = () => {
  const location = useLocation();

  const Title = "MySQL Joins Part 2 - Types of Joins";
  const Created = "November 23, 2022";
  const TopImage = "media/model01.png";

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
              <b>INNER JOIN </b>In MySQL, interchangeable with <b>JOIN</b> and{" "}
              <b>CROSS JOIN</b>.
              <ul>
                <li className="blogLi">
                  returns every row in the first table plus every row in the
                  second table that matches the WHERE, ON, or USING clause.
                </li>
                <li className="blogLi">
                  If you omit a WHERE, ON, or USING clause, all rows from both tables
                  are returned - even rows that don't have any relationship between them.
                  The Join Condition enforces referential integrity
                </li>
              </ul>
            </li>

            <li className="blogLi">
              <b>OUTER JOIN </b>There is <i>no such thing</i> as an OUTER JOIN
              that isn't qualified with LEFT or RIGHT.
              <ul>
                <li className="blogLi">
                  <b>LEFT JOIN </b>is interchangeable with{" "}
                  <b>LEFT OUTER JOIN</b>.
                  <ul>
                    <li className="blogLi">
                      returns every row in the first table plus every row
                      in the second table even when there are no matches. If there are no matches in the second table, null values are shown in the columns with no matches.
                    </li>
                  </ul>
                </li>
                <li className="blogLi">
                  <b>RIGHT JOIN </b>is interchangeable with{" "}
                  <b>RIGHT OUTER JOIN</b>.
                  <ul>
                    <li className="blogLi">
                      returns every row in the second table plus every row in the first table even when there are no matches.
                      If there are no matches in the first table, null values are shown in the columns with no matches.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
