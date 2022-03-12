import React, {useEffect, useLayoutEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AnimateListTools} from "components/top/ListTools";
export function MainPage() {

  // useEffect(() => {
  //   window.scrollTo(0,0);
  // });

  return (
    <Container fluid="true">
      <div className="toprow saturate">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <p className="p1">
              <b>Hi!</b> My name is Mary.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7, offset: 5 }}>
            <p className="p1">I do full-stack development.</p>
          </Col>
        </Row>
        <AnimateListTools />
      </div>
      <main className="grid">
        <div className="image-container">
          <img
            src="media/reactnative400x400.png"
            alt="React native"
            loading="lazy"
            className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
          <img
            src="media/react400x400.png"
            alt="React JS"
            loading="lazy"
            className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
          <img
            src="media/loginform400x400.png"
            alt="Login Flow"
            loading="lazy"
            className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/post0204_400x400.png"
          alt="Sign-up stepper"
          loading="lazy"
          className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/amazon400x400.png"
          alt="Test in Amazon WSA"
          loading="lazy"
          className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/post0208_400x400.png"
          alt="forwardRef Code"
          loading="lazy"
          className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/openweatherblack400x400.png"
          alt="Open Weather API"
          loading="lazy"
          className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/post0112_400x400.png"
          alt="React Native App"
          loading="lazy"
          className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img src="media/avif400x400.png" alt="AVIF logo" loading="lazy" 
        className="yellow"
        />
        <div className="content">
          <h5>title</h5>
          <p>
            text
          </p>
        </div>
      </div>

      <div className="image-container">
        <img
          src="media/passport400x400.png"
          alt="Passport Authentication"
          loading="lazy"
          className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img src="media/calendar400x400.png" alt="Calendar" loading="lazy" 
        className="blue"
        />
        <div className="content">
          <h5>title</h5>
          <p>
            text
          </p>
        </div>
      </div>

      <div className="image-container">
        <img src="media/sqlite400x400.png" alt="Sqlite" loading="lazy" className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/registercat400x400.png"
          alt="Nucat Parallax Campers"
          loading="lazy"
          className="yellow"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>

        <div className="image-container">
        <img
          src="media/contactme400x400.png"
          alt="How to Contact Me"
          loading="lazy"
          className="blue"
          />
          <div className="content">
            <h5>title</h5>
            <p>
              text
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
}
