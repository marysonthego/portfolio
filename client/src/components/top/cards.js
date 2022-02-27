import react from "React";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Cards() {
  return (
    <Container large fluid
        overflow="hidden"
      >
      <Row >
        <Col>
          <Card className="text-dark" bg="#003262" style={{ width: "20vw" }}>
            <Card.Img
              src="media/bird5.png"
              style={{ width: "25vw"}}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Image Overlay Card</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col >
          <Card className="bg-light text-dark" style={{ width: "20vw" }}>
            <Card.Img
              src="media/bird5.png"
              style={{ width: "25vw"}}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Image Overlay Card</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="text-dark" bg="#003262" style={{ width: "20vw" }}>
            <Card.Img
              src="media/bird5.png"
              style={{ width: "25vw"}}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Image Overlay Card</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="text-dark" bg="#003262" style={{ width: "20vw" }}>
            <Card.Img
              src="media/bird5.png"
              style={{ width: "25vw"}}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Image Overlay Card</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      </Container>
  );
}
