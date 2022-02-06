import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "index.css";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up the given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Container
        fluid
        overflow="hidden"
        display="grid"
        grid-template-columns="repeat(auto-fill, minmax(200px, 1fr))"
        grid-auto-rows="minmax(100px, auto)"
      >
    <Row className="justify-content: right">
    <Col md={{ span:1, offset:11 }}>
          {isVisible && (
            <button onClick={scrollToTop}>
              <Image
              fluid={true}
              src="media/top-arrow.png"
              title="Go to top"
              className="ScrollToTop"
              alt="Go to top"
            />
            </button>
          )}
      </Col>
  </Row>
  </Container>
  );
}
