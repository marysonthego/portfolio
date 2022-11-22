import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B221121 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "MySQL Joins Part 1";
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
        <h2 className="blog">Some definitions</h2>
        <ul>
          <li className="blogLi"><b>Join </b>the act of combining two (or more) tables that have one (or more) common domains into a single table or view of results.</li>

          <li className="blogLi"><b>Domain </b>the data type of a column - like string, integer, or date.</li>

          <li className="blogLi"><b>Foreign Key </b> the corresponding column (or set of columns) that refers to a Primary key in another table.
          <ul>
            <li className="blogLi">A foreign key in one table (usually called the <i>child</i> table) references a primary key in another table (usually called the <i>parent </i>table).</li>

            <li className="blogLi">Even though it is in a <i>child</i> table, a foreign key is the most important part of a relationship between two tables.  The foreign key is what defines the relationship between them. Every table can (and usually does) have a primary key, but without a foreign key in another table, you cannot have a relationship between the two tables! </li>

            <li className="blogLi">Both the primary key and foreign key must be of the same domain (which is a fancy way of saying they must have the same data type).</li>
          </ul>
          </li>
          <li className="blogLi"><b>Primary Key </b>the column (or set of columns) that uniquely identifies each row in a table.</li>
        </ul>
      </>
    );
  };

  const Sect2 = () => {
    return (
      <>
        <h2 className="blog">Some example joins</h2>
        <p className="blogText">Let's try some joins between the customer_t table and order_t table.</p>
        <div><b>customer_t table</b></div>
      </>
    );
  };

  // if (width < 410) {
  //   return (
  //     <main className="container">
  //       <article className="blog">
  //         <img
  //           src={TopImage}
  //           title="640x340 is ok"
  //           className="blogImg"
  //           alt="Top Image Alt"
  //         />
  //         <h1 className="blog">{Title}</h1>
  //         <h2 className="itemDate">{Created}</h2>
  //         <h2 className="blog">
  //           First item in a box <em>Optional something</em>
  //         </h2>
  //         <h2 className="blog">
  //           Second item in a box <i>optional thing</i>
  //         </h2>
  //         <Sect1 />
  //         <Sect2 />
  //         <div>
  //           <iframe
  //             title="StackBlitz"
  //             width={iwidth + 50}
  //             height={iheight}
  //             src="https://stackblitz.com/edit/node-pxt8mk?embed=1&index.js&hideExplorer=1&hideNavigation=1&view=editor"
  //           ></iframe>
  //         </div>
  //         <p className="blogText">Another thing.</p>
  //         <p className="blogNote">Here's an example:</p>
  //         <div>
  //           <iframe
  //             title="StackBlitz"
  //             width={iwidth + 50}
  //             height={iheight}
  //             src="https://stackblitz.com/edit/node-pxt8mk?embed=1&file=reduce.js&hideExplorer=1&hideNavigation=1&view=editor"
  //           ></iframe>
  //         </div>
  //       </article>
  //     </main>
  //   );
  // } else {
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
          <div className="h2Box">
            <h2 className="blogBox">
              <span>
                First thing in a box <em>optional something</em>)
              </span>
            </h2>
            <h2 className="blogBox">
              <span>
                Second thing in a box <em>optional something</em>)
              </span>
            </h2>
          </div>
          <Sect1 />
          <Sect2 />
          <img
            src="media/customer_t-list.png"
            title="customer_t table"
            className="blogImg"
            alt="customer_t table"
          />
          <br/>
          <div><b>order_t table</b></div>
          <img
            src="media/order_t-list.png"
            title="order_t table"
            className="blogImg"
            alt="order_t table"
          />
        </article>
      </main>
    );
  // }
};
