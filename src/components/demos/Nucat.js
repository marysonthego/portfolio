import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./../styles/nucat.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Nucat = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="./node_modules/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="./node_modules/bootstrap-social/bootstrap-social.css"
        />
        <link href="components/styles/nucat.css" rel="stylesheet" />

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
                <li className="nav-item">
                  <a 
                  href="/aboutus"
                  role="button"
                    className="button">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="#reserveForm"
                    role="button"
                    className="button"
                  >
                    Reservations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
                          <div className="col">
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
