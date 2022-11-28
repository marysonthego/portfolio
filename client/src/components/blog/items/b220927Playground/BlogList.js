import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import { BlogPost1 } from './BlogPost1';
import { BlogPost2 } from './BlogPost2';

export const BlogList = () => {
  const location = useLocation();
  let PageTitle = 'Welcome to the Blog List!';
  return (
    <main className="container">
      <h1 className="blog">{PageTitle}</h1>

      <section className="blogList">
        <span>
          <a className="listItem" href="/blogpost1">
            <BlogPost1 />
          </a>
        </span>
      </section>

      <section className="blogList">
        <span>
          {' '}
          <a className="listItem" href="/blogpost2">
            <BlogPost2 />
          </a>
        </span>
      </section>

      <section className="blogList">
        <a className="itemDate" href="/">
          <i>Return to the home page!</i>
        </a>
        <div>The current location is {location.pathname.toString()}</div>
      </section>
    </main>
  );
};
