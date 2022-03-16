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
            <p className="p1 p1a">
              <b>Hi!</b> My name is Mary.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7, offset: 5 }}>
            <p className="p1 p1a">I do full-stack development.</p>
          </Col>
        </Row>
        <AnimateListTools />
      </div>
      <main className="grid">
        <div className="image-container im1">
          <img
            src="media/reactnative400x400.png"
            alt="React native"
            loading="lazy"
            className="yellow responsive-img"
          />
          <div className="content">
            <a href="https://marysonthego.tech/post00" className="link-primary"><h5>How to Setup a React Native Development Environment in Windows</h5> </a>
            <p>
            There's no mystery to setting up a development environment in Windows 11 for your awesome React Native app. We'll be done before you know it!
            </p>
          </div>
        </div>

        <div className="image-container im2">
          <img
            src="media/react400x400.png"
            alt="React JS"
            loading="lazy"
            className="blue responsive-img"
          />
          <div className="content">
          <a href="/post04" className="link-primary">
            <h5>React Bits</h5>
            <p>
            & Javascript Pieces
            </p>
          </a>
          </div>
        </div>

        <div className="image-container im3">
          <img
            src="media/loginform400x400.png"
            alt="Login Flow"
            loading="lazy"
            className="blue responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/dashboard" className="link-primary">
            <h5>A hand-crafted login flow you will love!</h5>
          </a>
            <p>
              Soup to nuts
            </p>
          </div>
        </div>

        <div className="image-container im4">
        <img
          src="media/post0204_400x400.png"
          alt="Sign-up stepper"
          loading="lazy"
          className="yellow responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/stepper" className="link-primary">
            <h5>A sign-up stepper</h5>
          </a>
            <p>
            A series of input forms with validation and navigation controls.
            </p>
          </div>
        </div>

        <div className="image-container im5">
        <img
          src="media/amazon400x400.png"
          alt="Test in Amazon WSA"
          loading="lazy"
          className="yellow responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/post01" className="link-primary">
            <h5>How to use Windows Subsystem for Android to Run React Native Apps</h5>
          </a>
            <p>
            If what you need is a light-weight Android emulator for testing your React-Native apps, Amazon and WSA Pacman come to the rescue!
            </p>
          </div>
        </div>

        <div className="image-container im6">
        <img
          src="media/post0208_400x400.png"
          alt="forwardRef Code"
          loading="lazy"
          className="blue responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/post02" className="link-primary">
            <h5>How to use React JS Forward Refs</h5>
            </a>
            <p>
            One of my example projects is a sign-up stepper. The parent stepper must change the arrows from enabled to disabled or vice-versa for every child page. It might be fun to see if we can get this working with forward refs!
            </p>
          </div>
        </div>

        <div className="image-container im7">
        <img
          src="media/openweatheryellow400x376.png"
          alt="Open Weather API"
          loading="lazy"
          className="blue responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/weather" className="link-primary">
            <h5>OpenWeatherAPI</h5>
          </a>
            <p>
              Look Ma, I can use a 3rd-party API
            </p>
          </div>
        </div>

        <div className="image-container im8">
        <img
          src="media/post0112_400x400.png"
          alt="React Native App"
          loading="lazy"
          className="yellow responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/post01/#debug" className="link-primary">
            <h5>How to debug a React Native App in WSA</h5>
          </a>
          <p>
            It's super easy!    
          </p>
          </div>
        </div>

        <div className="image-container im9">
        <img src="media/avif400x400.png" alt="AVIF logo" loading="lazy" 
        className="yellow responsive-img"
        />
        <div className="content">
        <a href="https://marysonthego.tech/post04" className="link-primary">
          <h5>The AVIF format is going to be hot! hot! hot!</h5>
          </a>
          <p>
            Save tons of space on your images.
          </p>
        </div>
      </div>

      <div className="image-container im10">
        <img
          src="media/passport400x400.png"
          alt="Passport Authentication"
          loading="lazy"
          className="blue responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/post03" className="link-primary">
            <h5>Passport Authentication for Dummies</h5>
            </a>
            <p>
              Passport only looks hard. I'll show you how to use it in no time.
            </p>
          </div>
        </div>

        <div className="image-container im11">
        <img src="media/calendar400x400.png" alt="Calendar" loading="lazy" 
        className="blue responsive-img"
        />
        <div className="content">
        <a href="https://marysonthego.tech/todos" className="link-primary">
          <h5>Can a calendar modify your behavior?</h5>
          </a>
          <p>
            For the better
          </p>
        </div>
      </div>

      <div className="image-container im12">
        <img src="media/sqlite400x400.png" alt="Sqlite" loading="lazy" className="yellow responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/post04" className="link-primary">
            <h5>You don't have to have a backend to test your frontend.</h5>
            </a>
            <p>
              How to use SqLite3 to emulate your backend.
            </p>
          </div>
        </div>

        <div className="image-container im13">
        <img
          src="media/registercat400x400.png"
          alt="Nucat Parallax Campers"
          loading="lazy"
          className="yellow responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/nucat" className="link-primary">
            <h5>The Famous Nucat Parallax Campers!</h5>
            </a>
            <p>
              Imagine a day camp for your kitties. They learn, they grow, they sleep, stretch, and play. Nucat is the ultimate kitten experience.
            </p>
          </div>
        </div>

        <div className="image-container im14">
        <img
          src="media/contactme400x400.png"
          alt="How to Contact Me"
          loading="lazy"
          className="blue responsive-img"
          />
          <div className="content">
          <a href="https://marysonthego.tech/contact" className="link-primary">
            <h5>Hey! Do you want to Contact Me?</h5>
            </a>
            <p>
              Maybe I can help.
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
}
