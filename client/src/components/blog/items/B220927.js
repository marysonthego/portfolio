import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B220927 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "Conditional Routing with React Router v6";
  const Created = "Sept 27, 2022";
  const TopImage = "media/route.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const BlogTop = () => {
    return (
      <>
      <img
          src={TopImage}
          title="mountain path"
          className="blogImg"
          alt="mountain path"
        />
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
      </>
    )
  }

  const Code1 = () => {
    return (
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
        {Syntax1}
      </SyntaxHighlighter>
    );
  };

  const Code2 = () => {
    return (
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
        {Syntax2}
      </SyntaxHighlighter>
    );
  };

  const Code3 = () => {
    return (
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
        {Syntax3}
      </SyntaxHighlighter>
    );
  };

  const Code4 = () => {
    return (
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
        {Syntax4}
      </SyntaxHighlighter>
    );
  };

  const Code5 = () => {
    return (
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines>
        {Syntax5}
      </SyntaxHighlighter>
    );
  };

  const text1 = (
    <p className="blogText">
      When you start working with React Router v6, you may find that your conditional
      routing is not working as you expect. v6 uses a
      new component called <code>Routes</code> which replaces the old <code>Switch</code> component. The Routes method uses a
      Routes component to wrap the list of individual routes. The Routes
      component is a child of the react-router-dom <code>BrowserRouter</code> component.
    </p>
  );

  const text2 = <p className="blogText">Let's see how it works!</p>;

  const text3 = (
    <>
    <p className="blogText">
      If you have <code>react-router</code> installed, go ahead and uninstall
      it. v6 doesn't use it, and in fact, you may confuse things by keeping the old <code>react-router</code> around. v6 uses <code>react-router-dom</code> instead.
    </p>
    <p className="blogText">Uninstall <code>react-router</code> and install <code>react-router-dom</code>.
    </p>
    <Code1 />
    </>
  );

  const text4 = (
    <>
    <p className="blogText">
      In our example, all the routing is defined in <code>index.js</code>,
      so add these imports at the top of <code>index.js</code>:{" "}
    </p>
    <Code2 />
    </>
  );

  const text5 = (
    <>
    <p className="blogText">
      <code>Router</code> is a low-level interface that is shared by all router types including BrowserRouter and HashRouter.
    </p>
    <p className="blogText">
      The router maintains the routing context for the app. You should only have one <code>Router</code> per app.
    </p>

    <p className="blogText">
      In index.js, the router defines the elements to render when the location is set to a given path.
    </p>
    <Code3 />
    </>
  );

  const text6 = (
    <>
    <p className="blogText">
      The <code>react-router-dom</code> includes a <code>useLocation</code> hook which you can use to find the current location in the Router.
    </p>
    <p className="blogText">
      The /bloglist route displays a page with a list of blog posts. Clicking on a post in the list changes the current location to the corresponding blogpost route (/blogpost1 or /blogpost2). Notice that we are displaying the title and date created for each blog post on the BlogList page. </p>
      <p className="blogText">
      Below you can see the code BlogList uses to bring up the blog post selected by a user.
    </p>
    <Code5 />
      <p className="blogText">But where do we get this information? The title and date created are stored as properties in each individual BlogPost component. There is no list of BlogPost meta data in BlogList State, and no shared Context object either. To get a BlogPost's title and date created, BlogList must go to the BlogPost component. It may not be obvious, but this is a situation where we can make <code>useLocation</code> work for us.</p>
      <p className="blogText">
       Each BlogPost contains code which checks to see if the current location is /bloglist. If it is, BlogPost only returns the post title and date created. Otherwise, it returns the actual body of the post. Here's the BlogPost code.
    </p>
    <Code4/>

    <p className="blogText">
     This is how we can make the BlogPost return either the entire BlogPost page, or only its title and date created - it depends on the value of the current location, which is always available from <code>location.pathname.toString()</code>.
    </p>
    <p className="blogText">
      You can walk through the v6 playground below.
    </p>
    </>
  )

  const Sect6 = () => {
    return (
      <>
          <div className="blogCode">
            <iframe
              title="React Router v6 Playground"
              width={iwidth * 0.9}
              height={iheight * 0.8}
              src="https://stackblitz.com/edit/react-tqwgrp?embed=1&file=src/index.js"
            ></iframe>
          </div>
      </>
    )
  }

const Syntax1 = `npm un react-router
    . . .
npm i react-router-dom
  `;

  const Syntax2 = `// index.js
  import React from "react";
  import ReactDOM from "react-dom";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";`;

  const Syntax3 = `// index.js
  ReactDOM.render(
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
          </Router>,
    document.getElementById("root")
  );`;

  const Syntax4 = `// BlogPost1.js
  import { useLocation } from "react-router-dom";
  . . .
  const location = useLocation();
  . . .
  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  };
  . . .`;

  const Syntax5 = `<section className="blogList">
  <span>{location.pathname.toString()} {" "}
    <a className="listItem" href="/blogpost1">
      <BlogPost1/>
    </a>
  </span>
</section>`;

  return (
    <main className="container">
      <article className="blog">
        <BlogTop />
        {text1}
        {text2}
        {text3}
        {text4}
        {text5}
        {text6}
        <Sect6/>
      </article>
    </main>
  );
};
