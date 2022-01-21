import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export function AnimateListTools() {
  return (
    <>
      <Container
        fluid
        overflow="hidden"
        display="grid"
        justify-content="center"
        justify-items="center"
      >
        <Row>
          <Col md={{ span: 7, offset: 1 }}>
            <p className="p2a">These are some of my favorite tools!</p>
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={true}
              src="react.png"
              title="React JS"
              className="App-logo rounded-circle"
              alt="React logo"
            />
            <Image
              fluid={true}
              src="vuejs.png"
              title="Vue JS"
              className="App-logo rounded-circle"
              alt="Vue JS logo"
            />
            <Image
              fluid={true}
              src="reactnative.png"
              title="React Native"
              className="App-logo rounded-circle"
              alt="React Native logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="AWS.png"
              title="Amazon Web Services"
              className="App-logo rounded-circle"
              alt="AWS logo"
            />
            <Image
              fluid={true}
              src="aws-amplify.png"
              title="AWS Amplify"
              className="App-logo rounded-circle"
              alt="Amplify logo"
            />
            <Image
              fluid={true}
              src="node.png"
              title="Node JS"
              className="App-logo rounded-circle"
              alt="Node JS logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="mongodb.png"
              title="Mongo DB"
              className="App-logo rounded-circle"
              alt="MongoDB logo"
            />
            <Image
              fluid={true}
              src="erwin.png"
              title="Erwin Data Modeler"
              className="App-logo rounded-circle"
              alt="Erwin Data Modeler logo"
            />
            <Image
              fluid={true}
              src="mssql.png"
              title="Microsoft SQL Server"
              className="App-logo rounded-circle"
              alt="Microsoft SQL Server logo"
            />
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={true}
              src="java.png"
              title="Java"
              className="App-logo rounded-circle"
              alt="Java logo"
            />
            <Image
              fluid={true}
              src="html5cssjs.png"
              title="HTML5, CSS3, and Javascript"
              className="App-logo rounded-circle"
              alt="HTML5, css, Javascript logos"
            />
            <Image
              fluid={true}
              src="Redux.png"
              title="React Redux"
              className="App-logo rounded-circle"
              alt="Redux logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="heroku.png"
              title="Heroku"
              className="App-logo rounded-circle"
              alt="Heroku logo"
            />
            <Image
              fluid={true}
              src="passport.png"
              title="Passport Authentication"
              className="App-logo rounded-circle"
              alt="Passport logo"
            />
            <Image
              fluid={true}
              src="jwt.png"
              title="JWT"
              className="App-logo rounded-circle"
              alt="JWT logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="sqlite.png"
              title="Sqlite 3"
              className="App-logo rounded-circle"
              alt="Sqlite logo"
            />
            <Image
              fluid={true}
              src="mysql.png"
              title="MySql"
              className="App-logo rounded-circle"
              alt="mySql logo"
            />
            <Image
              fluid={true}
              src="postgresql.png"
              title="PostgreSQL"
              className="App-logo rounded-circle"
              alt="PostgreSQL logo"
            />
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={true}
              src="rtkquery.png"
              title="Redux Toolkit Query"
              className="App-logo rounded-circle"
              alt="Redux Toolkit Query logo"
            />
            <Image
              fluid={true}
              src="reactbootstrap.png"
              title="React Bootstrap"
              className="App-logo rounded-circle"
              alt="React Bootstrap logo"
            />
            <Image
              fluid={true}
              src="bootstrap.png"
              title="Bootstrap"
              className="App-logo rounded-circle"
              alt="Bootstrap logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="expressjs.png"
              title="Express JS"
              className="App-logo rounded-circle"
              alt="Express JS logo"
            />
            <Image
              fluid={true}
              src="firebase.png"
              title="Firebase"
              className="App-logo rounded-circle"
              alt="Firebase logo"
            />
            <Image
              fluid={true}
              src="apache.png"
              title="Apache HTTP Server"
              className="App-logo rounded-circle"
              alt="Apache logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={true}
              src="materialui.png"
              title="MaterialUI"
              className="App-logo rounded-circle"
              alt="MaterialUI logo"
            />
            <Image
              fluid={true}
              src="php.png"
              title="Php"
              className="App-logo rounded-circle"
              alt="php logo"
            />
            <Image
              fluid={true}
              src="python.png"
              title="Python"
              className="App-logo rounded-circle"
              alt="Python logo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
