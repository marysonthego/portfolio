import { I100322 } from "./items/I100322";
import { I092522 } from "./items/I092522";
import { I092722 } from "./items/I092722";
import { Template } from "./items/template";
import Card from "react-bootstrap/Card";

export const Blog = () => {
  let PageTitle = "Mary's Blog";

  return (
    <main className="container">
      <h1 className="blog">{PageTitle}</h1>
      <Card className="blogCard">
        <img variant="top" className="cardImageTop" src={I100322.TopImage} />
        <Card.Body>
          <Card.Title>{I100322.Title}</Card.Title>
          <Card.Text>{I100322.Created}</Card.Text>
        </Card.Body>
      </Card>
      <section className="blogList">
        <ul>
          <li className="listItem">
            <a className="item" href="/I100322">
              {I100322()}
            </a>
          </li>
          <li className="listItem">
            <a className="item" href="/I092722">
              {I092722()}
            </a>
          </li>
          <li className="listItem">
            <a className="item" href="/I092522">
              {I092522()}
            </a>
          </li>
          <li className="listItem">
            <a className="item" href="/template">
              {Template()}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
