import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import 'components/css/main.css';

export function MainPage () {

  return (
    <Container className="grid-wrapper">
      <Row className="main-row  row-cols-sm-3 row-cols-md-9 ">
      <img src="media/opensource.png" alt="Long Live Open Source!" loading="lazy"/>
      <img src="media/reactnativetop.png" alt="React native" loading="lazy"/>
      <img src="media/openweatherblue.png" alt="Open Weather API" loading="lazy" className="tall"/>
      <img src="media/amazon400.png" alt="Test in Amazon WSA" loading="lazy" className="wide"/>
      <img src="media/UC_Berkeley_colors.png" alt="UC Berkeley School Colors" loading="lazy"/>
      <img src="media/post0204_2.png" alt="Nucat Parallax Campers" loading="lazy" className="tall"/>
      <img src="media/react261.png" alt="React JS" loading="lazy"/>
      <img src="media/a4g-splash300-20.png" alt="AVIF reduced this 99%" loading="lazy" className="big"/>
      <img src="media/post0111.png" alt="Nucat Parallax Campers" loading="lazy" className="tall"/>
      <img src="media/mockupbuttons.png" alt="Design Meeting Notes" loading="lazy" />
      <img src="media/post0206.png" alt="Nucat Parallax Campers" loading="lazy" className="wide"/>
      <img src="media/fullstack.png" alt="Full Stack" loading="lazy" />
      <img src="media/a4gicon200.png" alt="Alerts for Good logo" loading="lazy" />
      <img src="media/leapingcat400.png" alt="Nucat Parallax Campers" loading="lazy" className="wide"/>
      <img src="media/passport330.png" alt="Passport Authentication" loading="lazy" />
      <img src="media/contactme.png" alt="How to Contact Me" loading="lazy" />
      <img src="media/loginform.png" alt="Login Flow" loading="lazy" className="tall"/>
      </Row>
    </Container>
  );
}
