export const About = () => {
  return (
    <>
      <main className="aboutContainer">
        <section className="aboutSection1">
          <h1 className="aboutTitle">Who's Mary?</h1>
          <h2 className="aboutSubtitle">
            I'm a React full-stack developer on the lookout for a new project!
          </h2>

          <ul className="ulTopCircle">
            <li className="aboutText">
              Specialist in React, NodeJS, Express, MySQL, MongoDB, and Postgres
            </li>
            <li className="aboutText">A life-long learner</li>
            <li className="aboutText">
              Master of Computer Information Systems (MCIS), 2019, Colorado
              State University
            </li>
          </ul>
          <div className = "aboutSquiggle"></div>
        </section>
        <section className="aboutSection2">
          <h1 className="aboutTitle">"There's Something about Mary!"</h1>
          <h2 className="aboutSubtitle">
            Hint: (Experienced developer - also a{" "}
            <a href="https://www.imdb.com/title/tt0129387/" target="_blank" rel="noreferrer">
              comedy!
            </a>
            )
          </h2>
          <ul className="ulReact">
            <li className="aboutText"><a href='https://reactjs.org/'  target="_blank" rel="noreferrer"><img src='https://marysonthego.tech/media/react20.png' alt="React logo"/></a>{" "}React/NodeJS/Express 2020-Now</li>
          </ul>
          <ul className="ulSubCircle">
            <li className="aboutSubText">
              Learning full-stack development by <i>doing</i>. Has anybody ever
              learned too much about React?
            </li>
          </ul>
          <ul className="ulCA">
            <li className="aboutText"><a href='https://www.broadcom.com/'  target="_blank" rel="noreferrer"><img src='https://marysonthego.tech/media/ca.png' alt="CA Technologies logo"/></a>{" "}CA Technologies 2007-2018</li>
          </ul>
          <ul className="ulSubCircle">
            <li className="aboutSubText">
              Java programming with MySQL database replication
            </li>
            <li className="aboutSubText">
              High-stakes tech support for Fortune 100 companies
            </li>
            <li className="aboutSubText">
              Whipped disorganized, incomplete documentation into clear,
              high-value information
            </li>
          </ul>
          <ul className="ulNortel">
            <li className="aboutText"><a href='https://www.nortel-us.com/' target="_blank" rel="noreferrer"><img src='https://marysonthego.tech/media/nortel.png' alt="Nortel Networks logo"/></a>{" "}Nortel Networks 1998-2001</li>
          </ul>
          <ul className="ulSubCircle">
            <li className="aboutSubText">Java programming</li>
            <li className="aboutSubText">
              Developed central office monitoring software for the European GSM
              network
            </li>
          </ul>
          <ul className="ulTI">
            <li className="aboutText"><a href='https://www.ti.com/about-ti/company/overview.html' target="_blank" rel="noreferrer"><img src='https://marysonthego.tech/media/ti.png' alt="Texas Instruments logo"/></a>{" "}Texas Instruments 1990-1998</li>
          </ul>
          <ul className="ulSubCircle">
            <li className="aboutSubText">
              Java programming with Oracle and MS SQL Server databases for
              Information Engineering Facility (IEF) software product
            </li>
            <li className="aboutSubText">
              C programming Optical Character Recognition (OCR) software
            </li>
          </ul>
          <div className = "aboutSquiggle"></div>
        </section>
        <section className="aboutSection1">
          <h1 className="aboutTitle">Why should I be on your project?</h1>
          <h2 className="aboutSubtitle">
            Because I'm confident I can come up with a <i>delightful</i> solution!
          </h2>

        </section>
        <section className="aboutSection2">
          <h1 className="aboutTitle">Ready for details? </h1>
          <h2 className="aboutSubtitle">
            Shoot me an{" "}
            <a href="mailto:mary@marysonthego.tech?subject=Contact">email!</a>
          </h2>
          <h2 className="aboutSubtitle">{" "}</h2>
        </section>
        <div className = "aboutSquiggle"></div>
      </main>
    </>
  );
};
