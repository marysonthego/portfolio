import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

export const App = () => {
  const location = useLocation();
  return (
    <main className="container">
      <h1>Welcome to the Home Page!</h1>
      <h2>
        <a className="blog" href="/bloglist">
          <i>See the blog list!</i>
        </a>{' '}
      </h2>
      <div>The current location is {location.pathname.toString()}</div>
    </main>
  );
};
