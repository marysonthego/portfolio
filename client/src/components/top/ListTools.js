import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "components/css/bootstrap.scss";
import "../../App.css"

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
            <p className="p2a">These are some of my favorite tools</p>
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/react.png"
              title="React JS"
              className=" list-logo rounded-circle"
              alt="React logo"
            />
            <Image
              fluid={false}
              src="media/vuejs.png"
              title="Vue JS"
              className=" list-logo rounded-circle"
              alt="Vue JS logo"
            />
            <Image
              fluid={false}
              src="media/reactnative.png"
              title="React Native"
              className=" list-logo rounded-circle"
              alt="React Native logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/AWS.png"
              title="Amazon Web Services"
              className=" list-logo rounded-circle"
              alt="AWS logo"
            />
            <Image
              fluid={false}
              src="media/aws-amplify.png"
              title="AWS Amplify"
              className=" list-logo rounded-circle"
              alt="Amplify logo"
            />
            <Image
              fluid={false}
              src="media/node.png"
              title="Node JS"
              className=" list-logo rounded-circle"
              alt="Node JS logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/mongodb.png"
              title="Mongo DB"
              className=" list-logo rounded-circle"
              alt="MongoDB logo"
            />
            <Image
              fluid={false}
              src="media/erwin.png"
              title="Erwin Data Modeler"
              className=" list-logo rounded-circle"
              alt="Erwin Data Modeler logo"
            />
            <Image
              fluid={false}
              src="media/mssql.png"
              title="Microsoft SQL Server"
              className=" list-logo rounded-circle"
              alt="Microsoft SQL Server logo"
            />
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/java.png"
              title="Java"
              className=" list-logo rounded-circle"
              alt="Java logo"
            />
            <Image
              fluid={false}
              src="media/html5cssjs.png"
              title="HTML5, CSS3, and Javascript"
              className=" list-logo rounded-circle"
              alt="HTML5, css, Javascript logos"
            />
            <Image
              fluid={false}
              src="media/Redux.png"
              title="React Redux"
              className=" list-logo rounded-circle"
              alt="Redux logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/heroku.png"
              title="Heroku"
              className=" list-logo rounded-circle"
              alt="Heroku logo"
            />
            <Image
              fluid={false}
              src="media/passport.png"
              title="Passport Authentication"
              className=" list-logo rounded-circle"
              alt="Passport logo"
            />
            <Image
              fluid={false}
              src="media/jwt.png"
              title="JWT"
              className=" list-logo rounded-circle"
              alt="JWT logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/sqlite.png"
              title="Sqlite 3"
              className=" list-logo rounded-circle"
              alt="Sqlite logo"
            />
            <Image
              fluid={false}
              src="media/mysql.png"
              title="MySql"
              className=" list-logo rounded-circle"
              alt="mySql logo"
            />
            <Image
              fluid={false}
              src="media/postgresql.png"
              title="PostgreSQL"
              className=" list-logo rounded-circle"
              alt="PostgreSQL logo"
            />
          </Col>
        </Row>
        <Row className="row-cols-sm-3 row-cols-md-9">
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/rtkquery.png"
              title="Redux Toolkit Query"
              className=" list-logo rounded-circle"
              alt="Redux Toolkit Query logo"
            />
            <Image
              fluid={false}
              src="media/reactbootstrap.png"
              title="React Bootstrap"
              className=" list-logo rounded-circle"
              alt="React Bootstrap logo"
            />
            <Image
              fluid={false}
              src="media/bootstrap.png"
              title="Bootstrap"
              className=" list-logo rounded-circle"
              alt="Bootstrap logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/expressjs.png"
              title="Express JS"
              className=" list-logo rounded-circle"
              alt="Express JS logo"
            />
            <Image
              fluid={false}
              src="media/firebase.png"
              title="Firebase"
              className=" list-logo rounded-circle"
              alt="Firebase logo"
            />
            <Image
              fluid={false}
              src="media/apache.png"
              title="Apache HTTP Server"
              className=" list-logo rounded-circle"
              alt="Apache logo"
            />
          </Col>
          <Col className="logo-col">
            <Image
              fluid={false}
              src="media/materialui.png"
              title="MaterialUI"
              className=" list-logo rounded-circle"
              alt="MaterialUI logo"
            />
            <Image
              fluid={false}
              src="media/php.png"
              title="Php"
              className=" list-logo rounded-circle"
              alt="php logo"
            />
            <Image
              fluid={false}
              src="media/python.png"
              title="Python"
              className=" list-logo rounded-circle"
              alt="Python logo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
