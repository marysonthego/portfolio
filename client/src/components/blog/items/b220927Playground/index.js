import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { BlogList } from './BlogList';
import { BlogPost1 } from './BlogPost1';
import { BlogPost2 } from './BlogPost2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <div className="footer">
        <a className="listItem" href="/nowhere">
          <i>The footer to nowhere!</i>
        </a>
      </div>
      <Routes>
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogpost1" element={<BlogPost1 />} />
        <Route path="/blogpost2" element={<BlogPost2 />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  </StrictMode>
);

// https://stackblitz.com/edit/react-tqwgrp?file=src%2Findex.js
