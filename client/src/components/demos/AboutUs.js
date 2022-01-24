import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./../styles/nucat.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const AboutUs = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="node_modules/bootstrap/dist/css/bootstrap.min.css"
        />

        <link rel="stylesheet" href="components/styles/nucat.css" />

        <title>NuCat: a feline day camp</title>
      </head>

      <body>
        <nav className="navbar navbar-expand fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="/">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a 
                  href="/nucat"
                  role="button"
                    className="button">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header
          className="masthead hero-image"
          style={{backgroundImage: `url(media/guitarcat.png)`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading text-sm-right">
                  <h1>About</h1>
                  <span className="subheading text-sm-right">
                    this is what we do.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Container fluid>
          <Row xs="100%">
            <div className="row row-content">
              <div className="col-sm-5 offset-sm-1">
                <h2>Our Mission</h2>
                <h4>
                  Laserpointers. We are about laserpointers. Isn't everybody?
                </h4>
              </div>
            </div>

            <div className="row row-content">
              <div className="col">
                <div className="card-deck">
                  <div className="card bg-light text-white">
                    <img
                      className="card-img-top"
                      src="media/curiouscat.png"
                      width="100%"
                      alt="Curious Cat"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Learn Stuff</h5>
                    </div>
                  </div>
                  <div className="card bg-light text-white">
                    <img
                      className="card-img-top"
                      src="media/worriedcat.png"
                      width="100%"
                      alt="Worried Cat"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Face Challenges</h5>
                    </div>
                  </div>
                  <div className="card bg-light text-white">
                    <img
                      className="card-img-top"
                      src="media/scairdycat.png"
                      width="100%"
                      alt="Scardy Cat"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Conquer Your Fears</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-content">
              <div className="col">
                <div className="card-deck">
                  <div className="card bg-light text-white">
                    <img
                      className="card-img-top"
                      src="media/logincat.png"
                      width="100%"
                      alt="Knowledge Cat"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Know Thyself</h5>
                    </div>
                  </div>
                  <div className="card bg-light text-white">
                    <img
                      className="card-img-top"
                      src="media/catonback.png"
                      width="100%"
                      alt="Back Cat"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Find Your JOY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                      <li className="nav-item">
                        <a className="nav-link" href="/nucat">
                          {" "}
                          <i className="fa fa-home fa-md"> </i>Home
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="aboutus.html">
                          <i className="fa fa-info fa-md"> </i>About
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </Row>
        </Container>
      </body>
    </>
  );
};
