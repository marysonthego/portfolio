import React from "react";
import { useLocation } from "react-router-dom";

export const B221205 = () => {
  const location = useLocation();

  const Title = "Ideas Series - Embed a Database With Wasm";
  const Created = "December 5, 2022";
  const TopImage = "media/ideasw1024.png"
  const ModelImage = "media/model01.png";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  const Sect1 = () => {
    return (
      <>
        <div className="h2Box">
        <p className="blogText"> <br/>
          <b>This is the first </b>in a series of occasional posts I plan to write about ideas I've had. Since most of my ideas tend to revolve around doing things I don't know how to do, I thought it might benefit someone to hear about the research I did (and why), the things I learned, dead-ends I went down, and, ultimately, how I either came up with a solution, or (sometimes), changed the idea to fit what I was able to figure out. Based on the premise that we learn more from our mistakes than anything else, I hope the people that come here will find something of value.
        </p>
          <p className="blogText">
            When I started working on the series about <a href="/b221121" >SQL Joins</a>, it quickly became clear to me that I needed an interactive connection to a database <b><i>right on the page</i></b>. I wanted a place where people could enter queries and get live results. Screen-shots just weren't gonna cut it. They didn't let people experiment, make mistakes, experiment again, and again...
          </p>
          <h2 className="blog">The Research</h2>
          <p className="blogText">
            I looked around to see what the current state of the art is at tutorial sites, online classes, and blogs where people go to learn SQL. That was step 1. There seemed to be a pattern to it. Some big sites with paywalled courses had what I was looking for - they let you practice right alongside their course materials - but not always. Other, smaller sites either taught SQL through YouTube or used screen-shots to show you the results you should get. In either case, though, you were on your own to find a way to practice - and in my opinion, practice is <i>everything</i>.
          </p>
          <p className="blogText">
            One place that is both free <i>and</i> interactive is <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc" target="_blank" rel="noreferrer">w3schools</a>.  <i>How do they do it?</i> Fortunately, at the bottom of each page is a tiny link about their <i>Try-SQL Editor</i>. Click on it and you are told,</p>
            <p className="blogQuote">
            <i>"Our Try-SQL Editor uses <b>WebSQL</b> to demonstrate SQL. A Database-object is created in your browser, for testing purposes. You can try any SQL statement, and play with the Database as much as you like. The Database can be restored at any time, simply by clicking the "Restore Database" button. <b>WebSQL stores a Database locally, on the user's computer</b>. Each user gets their own Database object. WebSQL is supported in Chrome, Safari, Opera, and Edge(79). If you use another browser you will still be able to use our Try SQL Editor, but a different version, using a server-based ASP application, with a read-only Access Database, where users are not allowed to make any changes to the data."</i> - emphasis mine
          </p>

          <h2 className="blog">A Clue!</h2>
          <p className="blogText">
            What is <i>WebSQL</i>? And how do they <i>"store a database locally, on the user's computer"</i>?
          </p>
        </div>
      </>
    );
  };

   const Sect3 = () => {
    return (
      <>

        </>
      );
    };

  return (
    <main className="container">
      <article className="blog">
        <div className="blogImg" >
          <img src={TopImage} title="Ideas" alt="Ideas" />
        </div>
        <h1 className="blog">{Title}</h1>
        <h2 className="itemDate">{Created}</h2>
        <Sect1 />
        <Sect3 />
        <div className="xcontainer">
          <div className="xterminal">
            <div id="terminal"></div>
          </div>
        </div>
      </article>
    </main>
  );
};
