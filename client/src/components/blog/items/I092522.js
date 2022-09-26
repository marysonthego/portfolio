import React from 'react';
import {useLocation} from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const I092522 = () => {
  const location = useLocation();

  const Title = "Test Blog Post Title";
  const Created = "Sept 25, 2022";

  if(location.pathname.toString() === "/Blog") {
    return `${Title} - ${Created}`;
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

  const text1 = 'This is a test of text1. It is a paragraph of text. It has some sentences. Below is a test of a code block.';

  const Sect1 = text1;

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
      <article className = 'barticle'>
        <h1 className = 'btitle'>{Title}</h1>
        <h6 className = 'bdate'>{Created}</h6>
        <section className = 'bsection'>
          <p className = 'btext'>{Sect1}</p>
          <Code1 />
        </section>
      </article>
    </main>
    );

}
