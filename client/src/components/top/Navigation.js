import React, {useEffect, useLayoutEffect} from "react";
import {useLocation} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    <Navbar expand='lg' sticky='top' >
      <Navbar.Brand href="/">
        <img src="media/m4.png" alt="marysonthego.tech" className="nav"/>
      </Navbar.Brand>
      <Nav className="justify-content-center">
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="/weather">OpenWeather API</NavDropdown.Item>
        <NavDropdown.Item href="/nucat">
        Nucat Parallax Campers
        </NavDropdown.Item>
        <NavDropdown.Item href="/stepper">Sign-up Stepper</NavDropdown.Item>
        <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="/todo">Todo List</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/post11">
          Sign-up Stepper Code Walk
        </NavDropdown.Item>
        <NavDropdown.Item href="/post10">
          Dashboard Code Walk
        </NavDropdown.Item>
      </NavDropdown>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}
