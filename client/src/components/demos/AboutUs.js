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
                      <h5 className="card-title">Face Your Challenges</h5>
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
          </Row>
        </Container>
      </body>
    </>
  );
};
