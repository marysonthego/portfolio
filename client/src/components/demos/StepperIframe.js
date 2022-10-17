import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import useWindowDimensions from 'components/helpers/UseWindowDimensions';

export default function StepperIframe() {
  const location = useLocation();
  const {width, height} = useWindowDimensions();
  const [show, setShow] = useState(true);

  const Title = "Stepper";
  const Created = "2021";

  const toggleModal = () => {
    setShow(!show);
  }

  if(location.pathname.toString() === "/projects") {
    return (
      <>
        <div>{Title}</div>
        <div className = 'listDate'>{Created}</div>
      </>
    );
  };

  const handleClose = () => setShow(false);

  let iwidth = width-50;
  let iheight = height-100;

  const ToggleButton = () => {
    return (
      <div>
        <Button className="button toggle p-0" onClick={toggleModal}>
          Details
        </Button>
      </div>
    )
  }

  const StepperModal = (show) => {
    return (
      <Container>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className="iframe">A User Sign-up Stepper</Modal.Header>
          <Row>

          </Row>
          <Modal.Body>
          <Row>
            <Col sm={2}>
            <label>What's This?</label>
            </Col>
            <Col sm={10}>
            <p>
              A sign-up stepper implemented in React. Click "sign-up" below the Login button to see it in action.
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
              <li>React-Bootstap v5</li>
              <li>NodeJS/Express server</li>
              <li>MySQL data storage </li>
              <li>CRUD actions API with data validation</li>
              <li>Client-side input validation</li>
              <li>Server-side Passport authentication</li>
              <li>Responsive tables with pagination</li>
            </ul>
            </Col>
            <Row>
              <Col sm={2}>
                Display:
              </Col>
              <Col sm={10}>
              responsive iframe
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                URL:
              </Col>
              <Col sm={10}>
                <a href="https://dash.marysonthego.tech" className="link-primary">dash.marysonthego.tech</a>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                Code:
              </Col>
              <Col sm={10}>
                <a href="https://github.com/marysonthego/alerts-dashboard" className="link-primary">github</a>
              </Col>
            </Row>
          </Row>
          </Modal.Body>
        </Modal>
        </Container>
    );
  };

  if(width < 410) {
    return (
      <div>
        { show ? <StepperModal/> : <ToggleButton/>}
      <iframe title='Stepper'
        width={iwidth+50}
        height={iheight}
        src="https://dash.marysonthego.tech/" >
      </iframe>
      </div>
    );
    } else {
      return (
        <div>
          { show ? <StepperModal/> : <ToggleButton/>}
        <iframe title='Stepper'
        width={width}
        height={height}
        src="https://dash.marysonthego.tech/" >
      </iframe>
      </div>
      )
    }
  }
