import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
//require("dotenv").config();

export const AlertsStepper = () => {
  return (
    <Container
      fluid
      overflow="hidden"
      display="grid"
      justify-content="center"
      justify-items="center"
    >
      <Row justify-content="center">
      <h2 className="top">New User Sign up Stepper</h2>

      <iframe
        src="https://alerts-dashboard.herokuapp.com/auth/profilestepper"
        title="Sign up Stepper"
        width="1024px"
        height="768px"
      />
      </Row>
    </Container>
  );
};
