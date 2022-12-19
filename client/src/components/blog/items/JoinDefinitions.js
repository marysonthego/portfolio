export const DefsB221121 = () => {
  return (
    <>
      <li className="blogLi">
        <code className="codeLocal">JOIN </code>the act of combining two (or
        more) tables that have one (or more) common domains into a single table
        or view of results.
        <ul>
          <li className="blogLi, blogSubLi">
            <code className="codeLocal">Join Condition </code>WHERE, ON, and
            USING clauses are called Join Conditions. They limit the results
            returned from a Join.
          </li>

          <li className="blogLi, blogSubLi">
            <code className="codeLocal">Basic Join Condition</code> a simple{" "}
            <code className="codeLocal">ON t1.colA = t2.colB</code> type match.
            Later, we'll look at more complex join conditions and how they
            affect the results. For now, all the join conditions will be as
            basic as possible so that we can focus on how each type of JOIN
            works.
          </li>
        </ul>
      </li>

      <li className="blogLi">
        <code className="codeLocal">Domain </code>the data type of a column -
        like string, integer, or date.
      </li>

      <li className="blogLi">
        <code className="codeLocal">Foreign Key </code> the corresponding column
        (or set of columns) that refers to a primary key in another table.
        <ul>
          <li className="blogLi, blogSubLi">
            A foreign key in one table (usually called the <i>child</i> table)
            references a primary key in another table (usually called the{" "}
            <i>parent </i>table).
          </li>

          <li className="blogLi, blogSubLi">
            Even though it is in a <i>child</i> table,{" "}
            <i>
              the foreign key is what defines the relationship between two
              tables
            </i>
            . Every table can (and usually does) have a primary key, but without
            a foreign key in another table, you do not have a relationship
            between the two tables!{" "}
          </li>

          <li className="blogLi, blogSubLi">
            Both the primary key and foreign key must be of the same domain
            (which is a fancy way of saying they must have the same data type).
          </li>
        </ul>
      </li>
      <li className="blogLi">
        <code className="codeLocal">Primary Key </code>the column (or set of
        columns) that uniquely identifies each row in a table.
      </li>
    </>
  );
};

export const DefsB221123 = () => {
  return (
    <>
      <li className="blogLi">
        <code className="codeLocal">INNER JOIN </code>is interchangeable with{" "}
        <code className="codeLocal">JOIN</code>.
        <ul>
          <li className="blogLi, blogSubLi">
            never qualified with LEFT or RIGHT or FULL.
          </li>
          <li className="blogLi, blogSubLi">
            returns only rows that match the WHERE, ON, or USING clause in both
            tables.
          </li>
          <li className="blogLi, blogSubLi">
            requires a join condition. In Postgres, if you omit the join
            condition you will get a syntax error.
          </li>
          <li className="blogLi, blogSubLi">
            INNER JOINs are much more common than OUTER JOINs. It's common to
            use outer joins when you need to see missing data or all data.
          </li>
          <li className="blogLi, blogSubLi">
            You can easily use INNER JOINs to join more than two tables by
            chaining them together.
          </li>
          <li className="blogLi, blogSubLi">
            There should be one ON or USING condition for each pair of tables
            you are joining. If you are joining two tables, you must have one ON
            or USING clause between them. If you are joining three tables, you
            must have two ON or USING clauses between them. Think of it like
            this: (A ON B) then ((A ON B) ON C).
          </li>
        </ul>
      </li>
    </>
  );
};

export const DefsB221201 = () => {
  return (
    <>
      <li className="blogLi">
        <code className="codeLocal">OUTER JOIN </code>There is{" "}
        <i>no such thing</i> as an OUTER JOIN that isn't qualified with{" "}
        <code className="codeLocal">LEFT</code> or{" "}
        <code className="codeLocal">RIGHT</code> or{" "}
        <code className="codeLocal">FULL</code>.
        <ul>
          <li className="blogLi, blogSubLi">
            usually applied to only two tables. When there are more than two
            tables in the join condition, the result is dependent on the
            database vendor. The results are not always the same.
          </li>
          <li className="blogLi, blogSubLi">
            handy for finding missing rows because if you use a basic join
            condition you will always get all the rows in the outer join table
            merged with the matches in the second table. This means you will get
            rows back that have empty columns representing the missing data in
            the second table. The rows with empty column represent missing
            matches in the second table.
          </li>
          <li className="blogLi, blogSubLi">
            <code className="codeLocal">LEFT OUTER JOIN </code>is
            interchangeable with <code className="codeLocal">LEFT JOIN</code>.
            <ul>
              <li className="blogLi, blogSubLi">
                The first (leftmost) table in the FROM clause is the controlling
                table.
              </li>
              <li className="blogLi, blogSubLi">
                Returns every row in the left table. Omits rows in the right
                table that do not match a row in the left table. Returns only
                the matching rows in the right table. If there is no match in
                the right table, empty values are returned as place-holders for
                the missing right table data. With a basic join condition, the
                result count will never be less than the number of rows in the
                left table.
              </li>
            </ul>
          </li>
          <li className="blogLi, blogSubLi">
            <code className="codeLocal">RIGHT OUTER JOIN </code>is
            interchangeable with <code className="codeLocal">RIGHT JOIN</code>.
            <ul>
              <li className="blogLi, blogSubLi">
                opposite of a LEFT OUTER JOIN. The second (rightmost) table in
                the FROM clause is the controlling table.
              </li>
              <li className="blogLi, blogSubLi">
                returns every row in the right table, merged with every matching
                row in the left table. If there is no match in the left table,
                null or blank values are returned as place-holders for the left
                table columns. Rows in the left table that do not match anything
                in the right table are omitted. With a basic join condition, the
                result count will never be less than the number of rows in the
                right table.
              </li>
            </ul>
          </li>
          <li className="blogLi, blogSubLi">
            <code className="codeLocal">FULL OUTER JOIN </code>is
            interchangeable with <code className="codeLocal">FULL JOIN</code>.
            <ul>
              <li className="blogLi, blogSubLi">
                Merges the matching rows from both tables plus the rows from
                both tables that do not match. A full join doesn't tell you
                anything about the relationships between the two tables.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};
