import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimateListTools } from "components/top/ListTools";

export default function App() {
  console.log(`NODE_ENV`, process.env.NODE_ENV);
  console.log(`API_URL`, process.env.REACT_APP_API_URL);
  console.log(`API_KEY`, process.env.REACT_APP_API_KEY);

  let location = useLocation();

  useEffect(() => {
    console.log(`App location.pathname:`, location.pathname);
  }, [location]);

  return (
      <Container
        fluid
        overflow="hidden"
        display="grid"
        grid-template-columns="repeat(auto-fill, minmax(200px, 1fr))"
        grid-auto-rows="minmax(100px, auto)"
        gap="20px"
        justify-content="space-evenly"
        justify-items="center"
        align-content="space-evenly"
        align-items="center"
      >
        <Row>
          <Col md={{ span: 6, offset: 2 }}>
            <p className="p1">Hi! My name is Mary.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <p className="p1">I do full-stack development</p>
          </Col>
        </Row>
        <AnimateListTools />
      </Container>
  );
}
