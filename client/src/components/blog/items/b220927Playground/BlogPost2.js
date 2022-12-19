import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

export const BlogPost2 = () => {
  const location = useLocation();
  const Title = 'Another Blog Post';
  const Created = 'month someday, year';

  if (location.pathname.toString() === '/bloglist') {
    return (
      <span>
        <span className="itemText">{Title} </span>
        <span className="blogListIemDate">{Created}</span>
      </span>
    );
  }
  const Sect1 = () => {
    return (
      <>
        <h1>Welcome to BlogPost2!</h1>
        <h2 className="blog">Here's five bullet points</h2>
        <ul>
          <li className="blogLi">bullet point one</li>
          <li className="blogLi">bullet point two</li>
          <li className="blogLi">bullet point three</li>
        </ul>
      </>
    );
  };
  return (
    <main className="container">
      <article className="blog">
        <Sect1 />
      </article>
      <section className="blogList">
        <a className="blogListIemDate" href="/bloglist">
          <i>Return to the blog list!</i>
        </a>
        <div>The current location is {location.pathname.toString()}</div>
      </section>
    </main>
  );
};
