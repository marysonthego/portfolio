import React from 'react';
import {useLocation} from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Template = () => {
  const location = useLocation();

  const Title = "Template Title";
  const Created = "Month 01, 2022";

  if(location.pathname.toString() === "/blog") {
    return (
      <>
        <div>{Title}</div>
        <div className = 'listDate'>{Created}</div>
      </>
    );
  };

  const text1 = 'Text 1';

  const Sect1 = text1;

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

  const Syntax1 = `Some code here...
and here...`;

  return (
    <main >
      <article className = 'itemArticle'>
        <h1 className = 'itemTitle'>{Title}</h1>
        <h6 className = 'itemDate'>{Created}</h6>
        <section className = 'itemSection'>
          <p className = 'itemText'>{Sect1}</p>
          <Code1 className = "itemCode" />
        </section>
      </article>
    </main>
    );

}
