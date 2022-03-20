import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
export function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container fluid="true">
      <div className="grid image-container responsive-img ">
        <a href="/post00" className="link-primary overlay im01 ">
          <img
            src="media/reactnative400x400.png"
            alt="React native"
            loading="lazy"
            className=" responsive-img rounded-circle "
          />
          Setup Windows React Native Development
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post04" className="link-primary overlay im02">
          <img
            src="media/react400x400.png"
            alt="React JS"
            loading="lazy"
            className=" responsive-img rounded-circle "
          />
          React Bits & Javascript Pieces
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/dashboard"
          className="link-primary overlay im03"
        >
          <img
            src="media/loginform400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Custom Login
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/dashboard"
          className="link-primary overlay im04"
        >
          <img
            src="media/post0204_400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Sign-up Stepper
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/dashboard"
          className="link-primary overlay im05"
        >
          <img
            src="media/amazon400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Amazon light-weight emulator for Windows
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post02" className="link-primary overlay im06">
          <img
            src="media/post0208_400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Use React Forward Refs
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/weather" className="link-primary overlay im07">
          <img
            src="media/openweatheryellow400x376.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          OpenWeather API
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post01/#debug" className="link-primary overlay im08">
          <img
            src="media/post0112_400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Debug React Native in WSA
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post04" className="link-primary overlay im09">
          <img
            src="media/avif400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          AVIF Images
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post03" className="link-primary overlay im10">
          <img
            src="media/passport400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Authentication with Passport
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/dashboard"
          className="link-primary overlay im11"
        >
          <img
            src="media/calendar400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          myCalendar
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post04" className="link-primary overlay im12">
          <img
            src="media/sqlite400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Use SqLite3
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/nucat"
          className="link-primary overlay im13"
        >
          <img
            src="media/registercat400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Nucat Parallax Campers
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="https://marysonthego.tech/contact"
          className="link-primary overlay im14"
        >
          <img
            src="media/contactme400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Contact Me
        </a>
      </div>
    </Container>
  );
}
