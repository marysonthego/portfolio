import React from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "components/helpers/UseWindowDimensions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

export const B220927 = () => {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  let iwidth = width * 0.8 * 0.8;
  let iheight = height;

  const Title = "Conditional Routing with React Router v6 useLocation";
  const Created = "October 23, 2022";
  const TopImage = "media/route.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const Syntax1 = `npm un react-router
  . . .
npm i react-router-dom
`;

  const Syntax2 = `// index.js
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";`;

  const Syntax3 = `// index.js
ReactDOM.render(
    <BrowserRouter>
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
    </BrowserRouter>,
  document.getElementById("root")
);`;

  const Syntax4 = `// BlogPost1.js
import { useLocation } from "react-router-dom";
. . .
const location = useLocation();
. . .
if (location.pathname.toString() === '/bloglist') {
  return (
    <span>
      <span className="itemText">{Title} </span>
      <span className="itemDate">{Created}</span>
    </span>
  );
}
return (
  <main className="container">
    <article className="blog">
      <h1>Welcome to BlogPost1!</h1>
    </article>
    <section className="blogList">
      <a className="itemDate" href="/bloglist">
        <i>Return to the blog list!</i>
      </a>
      <div>The current location is {location.pathname.toString()}</div>
    </section>
  </main>
);
. . .`;

  const Syntax5 = `// BlogList.js
. . .
return (
    <section className="blogList">
        <span>{location.pathname.toString()} {" "}
          <a className="listItem" href="/blogpost1">
              <BlogPost1/>
          </a>
        </span>
    </section>
. . .`;

  const Syntax6 = `location {
    hash: "",
    key: "default",
    pathname: "/",
    search: "",
    state: null
}`;

  const BlogTop = () => {
    return (
      <>
      <div className="blogTopImg">
        <img
          src={TopImage}
          title="mountain path"
          alt="mountain path"
        />
      </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
      </>
    );
  };

  const Code = ({ Syntax }) => {
    return (
      <SyntaxHighlighter language="jsx" style={xonokai} wrapLongLines>
        {Syntax}
      </SyntaxHighlighter>
    );
  };

  const Sect1 = () => {
    return (
      <>
      <div className="blog"> </div>
    <div className="blogText">
      When you start working with React Router v6, you may find that your
      conditional routing is not working as you expect. v6 uses a new component
      called <code>Routes</code> which replaces the old <code>Switch</code>{" "}
      component.
    </div>
    </>
    );
    };

  const text2 = <p className="blogText">Let's see how it works!</p>;

  const text3 = (
    <>
      <p className="blogText">
        If you have <code>react-router</code> installed, go ahead and uninstall
        it. v6 doesn't use it, and in fact, you may confuse things (possibly yourself) by keeping
        the old <code>react-router</code> around. v6 uses{" "}
        <code>react-router-dom</code> instead.
      </p>
      <p className="blogText">
        Uninstall <code>react-router</code> and install{" "}
        <code>react-router-dom</code>.
      </p>
      <Code Syntax={Syntax1} />
    </>
  );

  const text4 = (
    <>
      <p className="blogText">
        In this example, all the routing is defined in <code>index.js</code>, so
        add these imports at the top of <code>index.js</code>:{" "}
      </p>
      <Code Syntax={Syntax2} />
      <p className="blogText">
        <code>BrowserRouter</code> is an implementation of the low-level{" "}
        <code>Router</code> interface that is shared by all v6 router types
        including BrowserRouter, MemoryRouter, NativeRouter, StaticRouter, and HashRouter. The <code>BrowserRouter </code>{" "}
        implementation stores the current location in the browser's address bar
        and navigates using the browser's built-in html5 history stack.
      </p>

    </>
  );

  const text5 = (
    <>
      <p className="blogText">
        <code>BrowserRouter</code> maintains the routing context for the app.
        You should only have one BrowserRouter per app.
      </p>
      <p className="blogText">
        The <code>Routes</code> component wraps the list of individual routes.
        It is a child of the <code>react-router-dom BrowserRouter</code> component. A bonus with v6 is that you can now list your routes in any order!
      </p>
      <Code Syntax={Syntax3} />
    </>
  );

  const text6 = (
    <>
      <p className="blogText">
        <code>react-router-dom</code> includes a <code>useLocation</code> hook
        which you can use to find the current <code>location</code> in the <code>BrowserRouter</code> among other
        things.
      </p>
      <Code Syntax={Syntax6} />
      <p className="blogText">
        The <code>/bloglist</code> route displays a page containing a list of blog posts. Clicking
        on a post in the list changes the current location to the corresponding
        blogpost route (/blogpost1 or /blogpost2).{" "}
      </p>
      <p className="blogText">
        Below is the code BlogList uses to display a link to a BlogPost.
      </p>
      <Code Syntax={Syntax5} />
      <p className="blogText">
        Notice that the BlogList page displays the title and date created of
        each BlogPost. Where does this come from?
      </p>
      <p className="blogText">
        The title and date are properties of each individual BlogPost component.
        There is no list of BlogPost metadata up in BlogList State, and I have not created a shared Context object either. I really want to keep everything about a BlogPost all together in one place.
      </p>
      <p className="blogText">
        To get a BlogPost's title and date, BlogList must go to the BlogPost
        component. It may not be obvious, but in this situation we can make{" "}
        <code>useLocation</code> work for us.
      </p>
      <p className="blogText">
        When the BlogList page is created, part of its return statement says to
        display <code>&lt;BlogPost1 /&gt;</code>.
      </p>
      <p className="blogText">
        The important thing to realize is that we are in the BlogList return
        statement - And what is a return statement? Nothing more than a <code>Render</code>.
      </p>
      <p className="blogText">
        So, while we're rendering BlogList, the location does not change.
        It is <code>/bloglist</code> and, in fact, <i>cannot</i> change until
        the render is completed.
      </p>
      <p className="blogText">
        The call to <code>&lt;BlogPost1 /&gt;</code> is just like adding any
        other component to a page. When you add a component to a page, it
        doesn't change the current location. You are still on the original page
        and the new component is simply added to it.
      </p>
      <p className="blogText">
        Ok, so in the BlogList render we call /BlogPost1 - and when we get there
        the location is still /bloglist - not /blogpost1!
      </p>
      <p className="blogText">
        If we check the
        location in BlogPost, we can return just the title and date if the
        location is /bloglist, or return the whole blogpost if the location is
        /blogpost1.
      </p>
      <p className="blogText">
        And that's exactly what happens. Each BlogPost contains an <code>if</code> statement which checks to see if the current location
        is /bloglist. If it is, BlogPost only returns the post title and date. Otherwise, it returns the full body of the post. Here's the BlogPost code for that:
      </p>
      <Code Syntax={Syntax4} />

      <p className="blogText">
        This is how we can make the BlogPost return either the entire BlogPost
        page, or just the title and date created. All we have to do is check the
        value of the current location - which is always available in
        <code> location.pathname.toString()</code>.
      </p>
      <p className="blogText">
        Routing can sometimes seem like it's not working right. If that happens, think about what is rendering at that moment, and if you need to, use <code>location.pathname.toString()</code> to verify where the browser is.
      </p>
      <p className="blogText">Check out this v6 playground. Try commenting out the if statement in a BlogPost and see what happens!</p>
    </>
  );

  const text7 = (
    <>
      <br/>
      <div className="h2Box">
        <h2 className="blog">Further Reading</h2>
        <ul>
          <li className="blogLi">
          <a className="listItem" href="https://beta.reactjs.org/learn/render-and-commit">
          React Beta Docs - Render and Commit
          </a>
          </li>
          <li className="blogLi">
          <a className="listItem" href="https://beta.reactjs.org/learn/conditional-rendering">
          React Beta Docs - Conditional Rendering
          </a>
          </li>
          <li className="blogLi">
          <a className="listItem" href="https://reactrouter.com/en/main/utils/location">
          React Router v6 - Location
          </a>
          </li>
          <li className="blogLi">
          <a className="listItem" href="https://github.com/remix-run/history/blob/main/docs/api-reference.md#location">
          History API Reference
          </a>
          </li>
        </ul>
      </div>
    </>
  );

  const Sect6 = () => {
    return (
      <>
        <div className="stackBlitz">
          <iframe
            title="React Router v6 Playground"
            width={iwidth}
            height={iheight}
            src="https://codesandbox.io/embed/v6routertests-rzq9me?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%2F&module=%2Fsrc%2FList.js&theme=dark">
          </iframe>
        </div>
      </>
    );
  };

  console.log("location= ", location);
  return (
    <main className="container">
      <article className="blog">
        <BlogTop />
        <Sect1/>
        {text2}
        {text3}
        {text4}
        {text5}
        {text6}
        <Sect6/>
        {text7}
      </article>
    </main>
  );
};
