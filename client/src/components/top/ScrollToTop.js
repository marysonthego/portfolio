import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";

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
    <div>
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
  </div>
  );
}
