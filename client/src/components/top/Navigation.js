import React, {useEffect, useLayoutEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {ThemeSelector} from '../../ThemeSelector';
import { useTheme } from "../../theme/useTheme";

export const Navigation = () => {
 const location = useLocation();
 const { theme, themeLoaded, getFonts } = useTheme();
 const [selectedTheme, setSelectedTheme] = useState(theme);

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
      {/* <ThemeSelector setter={ setSelectedTheme } /> */}
      <Nav.Link href="/bloglist">Blog</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}
