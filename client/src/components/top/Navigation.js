import React, {useEffect, useLayoutEffect} from "react";
import {useLocation} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
      <Nav>
      <Navbar.Brand href="/">
        <img src="media/mmm.png" alt="marysonthego.tech" className="nav"/>
      </Navbar.Brand>
        <a href="https://github.com/marysonthego" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        <a href="https://twitter.com/marysonthego" target="_blank" rel="noreferrer" className="nav-link">Twitter</a>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/bloglist">BlogList</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}
