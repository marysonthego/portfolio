import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import "./../styles/nucat.css";
import 'components/styles/nucat.css';
//import "bootstrap/dist/css/bootstrap.min.css";

export const Nucat = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* <link
          rel="stylesheet"
          href="/node_modules/bootstrap/dist/css/bootstrap.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/font-awesome/css/font-awesome.min.css"
        /> */}

        <link rel="stylesheet" href="/client/src/plugins/bootstrap.bundle.min.js" />
        <link href="/client/src/components/styles/nucat.css" rel="stylesheet" />
        
        <script src="/client/src/plugins/carousel.js" />

        <title>NuCat: a feline day camp</title>
      </head> 
      <body>
        <header className="masthead hero-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading text-sm-right">
                  <h1>NuCat</h1>
                  <span className="subheading text-sm-right">
                    a feline day camp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Container fluid>
          <Row xs="100%">
            <div
              id="homeCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="item active pic1"></div>
                <div className="item active pic2"></div>
                <div className="item active pic3"></div>
                <div className="item active pic4"></div>
                <div className="item active pic5"></div>
                <div className="item active pic6"></div>
                <div className="carousel-caption">
                  <h3>Your cat will find joy at NuCat!</h3>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-6 mx-auto">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 mx-auto">
                  <div className="card">
                    <h3 className="card-header bg-secondary text-white">
                      Reserve a spot For your best friend today!
                    </h3>
                    <div className="card-body">
                      <form id="reserveForm">
                        <div className="form-group row">
                          <label
                            htmlFor="numCampers"
                            className="col-sm-6 col-form-label"
                          >
                            Number of Campers
                          </label>
                          <div className="col d-flex">
                            <select
                              className="custom-select form-control"
                              id="numCampers"
                              name="numCampers"
                              required
                            >
                              <option value="">Select...</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="Date" className="col-sm-6">
                            Date
                          </label>
                          <div className="col d-flex">
                            <input
                              type="date"
                              className="form-control"
                              id="date"
                              name="date"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col d-flex align-items-end justify-content-end">
                            <button type="submit" className="btn btn-secondary">
                              Reserve
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mx-auto">
                  <hr />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </body>
    </>
  );
};
