import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useWindowDimensions from "components/helpers/UseWindowDimensions";

export function NucatIframe() {
  const { width, height } = useWindowDimensions();
  const [show, setShow] = useState(true);

  const toggleModal = () => {
    setShow(!show);
  }
  const handleClose = () => setShow(false);

  let iwidth = width - 50;
  let iheight = height - 100;

  const NucatModal = (show) => {
    return (
      <Container>
      <Modal centered show={show} onHide={handleClose} backdrop="static" >
        <Modal.Header closeButton className="iframe">Parallax Scroll implemented in CSS</Modal.Header>
          <Row>

          </Row>
          <Modal.Body>
          <Row>
            <Col sm={2}>
            <label>What's This?</label>
            </Col>
            <Col sm={10}>
            <p>
              An early project for the Nucamp Full Stack Bootcamp I attended in 2020. The goal was to write a page using CSS and Bootstrap. Later, I expanded it to incorporate React and React-Router.
            </p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              Uses:
            </Col>
            <Col sm={10}>
            <ul >
              <li >React JS</li>
              <li>React-Router v6</li>
              <li>React-Bootstap v5</li>
              <li>Carousel, Container, Row, Col</li>
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
                <a href="https://nucat.marysonthego.tech" className="link-primary">nucat.marysonthego.tech</a>
              </Col>
            </Row>
          </Row>
          </Modal.Body>
        </Modal>
        </Container>
    );
  };
  if (width < 410) {
    return (
      <div>
        { show ? <NucatModal/> : null}
      <iframe
        title="Nucat"
        width={iwidth + 50}
        height={iheight}
        src="https://nucat.marysonthego.tech/"
        onClick={toggleModal}
      ></iframe>
      </div>
    );
  } else {
    return (
      <div>
        { show ? <NucatModal/> : null }
      <iframe
        title="Nucat"
        width={width}
        height={height}
        src="https://nucat.marysonthego.tech/"
      ></iframe>
      </div>
    );
  }



}
