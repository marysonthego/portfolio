import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

export const BlogPost1 = () => {
  const location = useLocation();
  const Title = 'First Post Title';
  const Created = 'October 03, 2022';

  if (location.pathname.toString() === '/bloglist') {
    return (
      <span>
        <span className="itemText">{Title} </span>
        <span className="blogListIemDate">{Created}</span>
      </span>
    );
  }
  return (
    <main className="container">
      <article className="blog">
        <h1>Welcome to BlogPost1!</h1>
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
