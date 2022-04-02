import React, {useEffect, useLayoutEffect} from "react";
import {useLocation} from 'react-router-dom';
import Accordion from "react-bootstrap/Accordion";
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
    <Navbar expand={false} sticky="top">
        <Navbar.Brand href="/">
          <img src="media/mredt.ico" alt="marysonthego.tech" className="nav"/>
            marysonthego.tech
        </Navbar.Brand>
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
                <Accordion.Header>Tech Posts</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column">
                  <Nav.Link href="/post00" className="rounded-end">
                    How to Setup a React Native Development Environment in Windows
                    </Nav.Link>
                    <Nav.Link href="/post01" className="rounded-end">
                    How to use Amazon App Store to run React Native Apps
                    </Nav.Link>
                    <Nav.Link href="/post02" className="rounded-end">
                    How to use React ForwardRef
                    </Nav.Link>
                    <Nav.Link href="/post03" className="rounded-end">
                      Authenticate with Passport Local
                    </Nav.Link>
                    <Nav.Link href="/post05" className="rounded-end">
                      AVIF Image Format
                    </Nav.Link>
                    <Nav.Link href="/post06" className="rounded-end">
                    Use Sqlite 3 for Quick Database Emulation
                    </Nav.Link>
                    <Nav.Link href="/post04" className="rounded-end">
                      React Bits & Javascript Pieces
                    </Nav.Link>
                    <Nav.Link href="/post07" className="rounded-end">
                      Node JS Reference
                    </Nav.Link>
                    <Nav.Link href="/post09" className="rounded-end">
                      Python3 Reference
                    </Nav.Link>
                    <Nav.Link href="/post08" className="rounded-end">
                      Express Reference
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">

                <Accordion.Body>
                  <Nav className="flex-column">
                    <Nav.Link href="/listtools" className="Rounded-end">
                      Tools
                    </Nav.Link>
                    <Nav.Link href="mailto:marysonthego@gmail.com?subject=Contact Me" className="rounded-end">
                      Contact Me!
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>
  );
};
