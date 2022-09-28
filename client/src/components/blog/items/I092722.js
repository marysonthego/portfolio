import React from 'react';
import {useLocation} from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const I092722 = () => {
  const location = useLocation();

  const Title = "Conditional Routing with React Router v6";
  const Created = "Sept 27, 2022";

  if(location.pathname.toString() === "/Blog") {
    return (
      <>
        <div>{Title}</div>
        <div className = 'listDate'>{Created}</div>
      </>
    );
  };

  const Code1 = () => {
    return (
      <SyntaxHighlighter
      language="jsx"
      style={nightOwl}
      wrapLongLines
      >
        {Syntax1}
    </SyntaxHighlighter>
    )
  }

  const text1 = <p className = 'itemText'>As you upgrade to React Router v6, you may find that your conditional routing is not working as expected. This is because the new version of React Router uses a new method of routing. The new method is called <code>Routes</code>. The Routes method uses a Routes component to wrap the routes. The Routes component is a child of the <code>BrowserRouter</code> component.</p>;

  const text2 = <p className = 'itemText'>Let's see how it works!</p>;

  const text3 = <p className = 'itemText'>If you have <code>React-Router</code> installed, go ahead and uninstall it. You'll need <code>React-Router-Dom</code> instead.</p>;

  const Syntax1 = `"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "memorystore": "^1.6.7",
    "mysql2": "^2.3.3",
    "passport": "^0.5.2",
    "passport-local": "^1.0.0"
  },
  `;

  return (
    <main className = 'container'>
      <article className = 'itemArticle'>
        <h1 className = 'itemTitle'>{Title}</h1>
        <h6 className = 'itemDate'>{Created}</h6>
        <section className = 'itemSection'>
          <>{text1}</>
          <>{text2}</>
          <>{text3}</>
          <Code1 />
        </section>
      </article>
    </main>
    );

}
