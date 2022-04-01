import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { DataOwner } from "components/todosforme/DataOwner";

export function TodosForMe() {
  const [show, setShow] = useState(true);

  const toggleModal = () => {
    setShow(!show);
  };

  const handleClose = () => setShow(false);

  const ToggleButton = () => {
    return (
      <div>
        <Button className="button toggle p-0" onClick={toggleModal}>
          Details
        </Button>
      </div>
    );
  };

  const TodosModal = (show) => {
    return (
      <Container>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton className="iframe">
            Calendar and integrated Todos list.
          </Modal.Header>
          <Row></Row>
          <Modal.Body>
            <Row>
              <Col sm={2}>
                <label>What's This?</label>
              </Col>
              <Col sm={10}>
                <p>
                  An implementation of React Big Calendar plus a Todos list.
                  Move todos to the calendar to create events. Edit a todo by clicking on it.
                  Click on a date in the calendar to create a new single or recurring
                  event. Change, move, or delete events in a pop-up modal. Define recurring
                  events weekly, monthly, etc. for a date or day(s) of the week.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>Uses:</Col>
              <Col sm={10}>
                <ul>
                  <li>React JS</li>
                  <li>Redux Query</li>
                  <li>React-Router v5 & v6</li>
                  <li>React Big Calendar</li>
                  <li>NodeJS/Express server</li>
                  <li>MySQL data storage </li>
                  <li>CRUD actions API with data validation</li>
                  <li>Client-side input validation</li>
                  <li>Responsive tables with pagination</li>
                  <li>Date and moment()</li>
                </ul>
              </Col>
              <Row>
                <Col sm={2}>Display:</Col>
                <Col sm={10}>responsive</Col>
              </Row>
              <Row>
                <Col sm={2}>URL:</Col>
                <Col sm={10}>
                  <a
                    href="https://marysonthego.tech/todos"
                    className="link-primary"
                  >
                    marysonthego.tech/todos
                  </a>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>Code:</Col>
                <Col sm={10}>
                  <a
                    href="https://github.com/marysonthego/portfolio/tree/main/client/src/components/todosforme"
                    className="link-primary"
                  >
                    github
                  </a>
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
      <div>{show ? <TodosModal /> : <ToggleButton />}</div>
      <Row>
        <Col className="todosTitle">
          <span>Todos For Me</span>
        </Col>
      </Row>
      <Row>
        <DataOwner />
      </Row>
      <Row style={{ marginTop: "5px" }}></Row>
    </Container>
  );
}
