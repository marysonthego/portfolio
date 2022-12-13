import React, {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

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
    <div className="navbar" >
      <a href="/" className="navIcon">
        <img src="media/mteal.png" alt="marysonthego.tech" />
      </a>
      <a href="/bloglist" className="navLink">Blog</a>
      <a href="/projects" className="navLink">Projects</a>
      <a href="/about" className="navLink">About</a>
    </div>
  )
}
