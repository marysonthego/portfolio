import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataOwner } from "components/todosforme/DataOwner";

export function TodosForMe() {
  const [show, setShow] = useState(true);

  // const toggleModal = () => {
  //   setShow(!show);
  // }
  const handleClose = () => setShow(false);

  const TodosModal = (show) => {
    return (
      <Container>
      <Modal centered show={show} onHide={handleClose} backdrop="static" >
        <Modal.Header closeButton className="iframe">Calendar and integrated Todos list.</Modal.Header>
          <Row>

          </Row>
          <Modal.Body>
          <Row>
            <Col sm={2}>
            <label>What's This?</label>
            </Col>
            <Col sm={10}>
            <p>
              An implementation of React Big Calendar plus a Todos list. Todos can be moved to the calendar to create new calendar events. Create and edit todos by clicking in the todos list or clicking "New Todo" to get a modal input dialog. Click on a date in the calendar to create a new single or recurring event. Events can be changed, moved, or deleted via a modal dialog. Recurring events can be configured as recurring weekly, monthly, etc. on a date or on day(s) of the week.
            </p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              Uses:
            </Col>
            <Col sm={10}>
            <ul >
              <li>React JS</li>
              <li>Redux Query</li>
              <li>React-Router v5 & v6</li>
              <li>React Big Calendar</li>
              <li>NodeJS/Express server</li>
              <li>MySQL data storage </li>
              <li>CRUD actions API with data validation</li>
              <li>Client-side input validation</li>
              <li>Responsive tables with pagination</li>
              <li>Date and moment</li>
            </ul>
            </Col>
            <Row>
              <Col sm={2}>
                Display:
              </Col>
              <Col sm={10}>
              responsive
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                URL:
              </Col>
              <Col sm={10}>
                <a href="https://marysonthego.tech/todos" className="link-primary">marysonthego.tech/todos</a>
              </Col>
            </Row>
          </Row>
          </Modal.Body>
        </Modal>
        </Container>
    );
  };

  return (
    <Container>
      <div>
        { show ? <TodosModal/> : null}
      </div>
      <Row>
        <Col className="todosTitle">
          <span>
              Todos For Me
          </span>
        </Col>

      </Row>
      <Row>
        <DataOwner />
      </Row>
      <Row style={{ marginTop: "5px" }}>

      </Row>
    </Container>
  );
}
