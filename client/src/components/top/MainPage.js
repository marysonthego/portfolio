import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimateListTools } from "components/top/ListTools";
export function MainPage() {
  return (
    <Container fluid="true">
      <div className="toprow">
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
        <div className="card" style={{ width: "400px" }}>
          <img
            src="media/reactnative400x400.png"
            alt="React native"
            loading="lazy"
            className="card-img-top"
          />
          <div >
            <div className="card-img-overlay">
              <h5 className="card-title text-center">Alice Liddel</h5>
              <p background="rgba(0, 0, 0, 0.6)">
                Alice is a freelance web designer and developer based in London.
                She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "400px" }}>
          <img
            src="media/react400x400.png"
            alt="React JS"
            loading="lazy"
            className="card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Alice Liddel</h5>
            <p className="card-text">
              Alice is a freelance web designer and developer based in London.
              She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.
            </p>
            <a href="/" className="btn btn-primary">
              View Profile
            </a>
          </div>
        </div>

        <div className="card text-black" style={{ width: "400px" }}>
          <img
            src="media/loginform400x400.png"
            alt="Login Flow"
            loading="lazy"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Alice Liddel</h5>
            <p className="card-text">
              Alice is a freelance web designer and developer based in London.
              She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.
            </p>
          </div>
        </div>

        <img
          src="media/post0204_400x400.png"
          alt="Sign-up stepper"
          loading="lazy"
        />

        <img
          src="media/amazon400x400.png"
          alt="Test in Amazon WSA"
          loading="lazy"
        />

        <img
          src="media/post0208_400x400.png"
          alt="forwardRef Code"
          loading="lazy"
        />

        <img
          src="media/openweatherblack400x400.png"
          alt="Open Weather API"
          loading="lazy"
        />

        <img
          src="media/post0112_400x400.png"
          alt="React Native App"
          loading="lazy"
        />

        <img src="media/avif400x400.png" alt="AVIF logo" loading="lazy" />

        <img
          src="media/passport400x400.png"
          alt="Passport Authentication"
          loading="lazy"
        />

        <img src="media/calendar400x400.png" alt="Calendar" loading="lazy" />

        <img src="media/sqlite400x400.png" alt="Sqlite" loading="lazy" />

        <img
          src="media/registercat400x400.png"
          alt="Nucat Parallax Campers"
          loading="lazy"
        />

        <img
          src="media/contactme400x400.png"
          alt="How to Contact Me"
          loading="lazy"
        />
      </main>
    </Container>
  );
}
