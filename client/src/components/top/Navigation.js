import React, {useEffect, useLayoutEffect} from "react";
import { useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(`currentPath: `, currentPath);
  }, [location]);

  useLayoutEffect(() => {
    console.log(`useLayoutEffect window.scrollToTop`);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Navbar bg="light" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/"> MarysOnTheGo.tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          width="25%"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel color=#434344">
              MarysOnTheGo.tech &nbsp;&nbsp;
              <img
                src="media/mary.png"
                title="Mary"
                className="pic rounded-circle"
                alt="Mary"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion flush alwaysOpen defaultActiveKey={["0", "1", "2"]} >
              <Accordion.Item eventKey="0">
                <Accordion.Header >Example Projects</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column">
                    <Nav.Link href="/nucat" className="rounded-end">
                      Nucat Parallax Campers
                    </Nav.Link>
                    <Nav.Link href="/weather" className="rounded-end">
                      OpenWeather API
                    </Nav.Link>
                    <Nav.Link href="/stepper" className="rounded-end">
                      Sign-up Stepper
                    </Nav.Link>
                    <Nav.Link href="/dashboard" className="rounded-end">
                      Admin Dashboard
                    </Nav.Link>
                    <Nav.Link href="/todos" className="rounded-end">
                      Todos For Me
                    </Nav.Link>
                    <Nav.Link href="/subnet" className="rounded-end">
                      Native Subnet Calculator
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Tech Blog Posts</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column">
                  <Nav.Link href="/post00" className="rounded-end">
                    How to Setup a React Native Development Environment in Windows
                    </Nav.Link>
                    <Nav.Link href="/post01" className="rounded-end">
                    How to use Windows Subsystem for Android to run React Native Apps
                    </Nav.Link>
                    <Nav.Link href="/post02" className="rounded-end">
                    How to use React ForwardRef
                    </Nav.Link>
                    <Nav.Link href="/post03" className="rounded-end">
                      Authenticate with Passport
                    </Nav.Link>
                    <Nav.Link href="/post08" className="rounded-end">
                      MySQL vs PostgreSQL
                    </Nav.Link>
                    <Nav.Link href="/post04" className="rounded-end">
                    Use Sqlite 3 for Quick Database Emulation
                    </Nav.Link>
                    <Nav.Link href="/post05" className="rounded-end">
                      Deployment Quick References
                    </Nav.Link>
                    <Nav.Link href="/post06" className="rounded-end">
                      Never Ending Closures
                    </Nav.Link>
                    <Nav.Link href="/post07" className="rounded-end">
                      Hooks are Lovable!
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>About Me</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column">
                    <Nav.Link href="/contact" className="rounded-end">
                      Contact Me!
                    </Nav.Link>
                    <Nav.Link href="/education" className="rounded-end">
                      Education
                    </Nav.Link>
                    <Nav.Link href="/career" className="rounded-end">
                      Career
                    </Nav.Link>
                    <Nav.Link href="/goals" className="rounded-end">
                      Goals
                    </Nav.Link>
                    <Nav.Link href="/resume" className="rounded-end">
                      Resume/CV
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <hr />
            <Form className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary" className="ml-3 ">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
