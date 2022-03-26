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
          Setup Windows React Native Development &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post04" className="link-primary overlay im02">
          <img
            src="media/reactjs.png"
            alt="React JS"
            loading="lazy"
            className=" responsive-img rounded-circle "
          />
          React Bits & Javascript Pieces &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="/dashboard"
          className="link-primary overlay im03"
        >
          <img
            src="media/loginform400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Custom Login &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="/stepper"
          className="link-primary overlay im04"
        >
          <img
            src="media/post0204_400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Sign-up Stepper &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="/post01"
          className="link-primary overlay im05"
        >
          <img
            src="media/amazon400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Amazon light-weight emulator for Windows &nbsp;
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
          Use React Forward Refs &nbsp;
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
          OpenWeather API &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post01#debug" className="link-primary overlay im08">
          <img
            src="media/post0112_400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Debug React Native in WSA &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post05" className="link-primary overlay im09">
          <img
            src="media/avif400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          AVIF Images &nbsp;
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
          Authentication with Passport &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="/todos"
          className="link-primary overlay im11"
        >
          <img
            src="media/calendar400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          myCalendar &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a href="/post06" className="link-primary overlay im12">
          <img
            src="media/sqlite400b.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Use SqLite3 &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="/nucat"
          className="link-primary overlay im13"
        >
          <img
            src="media/registercat400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Nucat Parallax Campers &nbsp;
        </a>
      </div>

      <div className="grid image-container responsive-img ">
        <a
          href="mailto:marysonthego@gmail.com?subject=Contact Me"
          className="link-primary overlay im14"
        >
          <img
            src="media/contactme400x400.png"
            alt="React JS"
            loading="lazy"
            className="responsive-img rounded-circle "
          />
          Contact Me &nbsp;
        </a>
      </div>
    </Container>
  );
}
