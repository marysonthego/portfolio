import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import App from 'components/dashboard/App';

export const AlertsDashboard = () => {
  return (
    <Container
      fluid
      overflow="hidden"
      display="grid"
      justify-content="center"
      justify-items="center"
    >
      <Row justify-content="center">
        <h2 className="top">Admin Dashboard</h2>

        <iframe
          src="https://alerts-dashboard.herokuapp.com"
          title="Admin Dashboard"
          width="1024px"
          height="768px"
        
        />
      </Row>
      <Row>
        <App/>
      </Row>
    </Container>
  );
};
