import React from 'react';
import {useLocation} from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const B220927 = () => {
  const location = useLocation();

  const Title = "Conditional Routing with React Router v6";
  const Created = "Sept 27, 2022";
  const TopImage = "media/route.png";

  if (location.pathname.toString() === "/blog") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

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

  const Code2 = () => {
    return (
      <SyntaxHighlighter
      language="jsx"
      style={nightOwl}
      wrapLongLines
      >
        {Syntax2}
    </SyntaxHighlighter>
    )
  }

  const text1 = <p className = "itemText">If you upgrade to React Router v6, you may find that your conditional routing is not working as expected. This is because React Router v6 uses a new method of routing called <code>Routes</code>. The Routes method uses a Routes component to wrap the list of individual routes. The Routes component is a child of the <code>BrowserRouter</code> component.</p>;

  const text2 = <p className = "itemText">Let\'s see how it works!</p>;

  const text3 = <p className = "itemText">If you have <code>react-router</code> installed, go ahead and uninstall it. You'll need <code>react-router-dom</code> instead.</p>;

  const text4 = <p className = "itemText">In our example, all the routing will be defined in <code>index.js</code>, so add this at the top of <code>index.js</code>: </p>

  let Syntax1 = `npm un react-router
    ...
npm i react-router-dom
  `;

  const Syntax2 = `import React from "react";
  import ReactDOM from "react-dom";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";`

  return (
    <main className="container">
      <article className="blog">
        <img src={TopImage} title="mountain path" className="blogImg" alt="mountain path" />
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <>{text1}</>
          <>{text2}</>
          <>{text3}</>
          <Code1 />
          <>{text4}</>
          <Code2 />
      </article>
    </main>

    );

}
