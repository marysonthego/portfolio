import { useRef, useState } from "react";
import "./capxApp.css";
import { MyCanvas } from "./MyCanvas";

/* TODO
- Representation in a 600px by 600px bordered region containing the objects (scaled to fit from the 800px by 800px) See MyCanvas.js - possibly build on offScreenCanvas then display on smaller canvas?
- assigns a random velocity field (dx, dy as a float in the range of -5px to 5px per second) to each object and a forward and backward button below the bordered region. Animate the representation (backward or forward) in 1 second increments when the button is clicked, and stop it when the button is unclicked, or the other button is clicked.
See if Canvas Transforms can do this - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
Or, just use regular CSS Animations?
- What do forward/backward mean? Zoom canvas in/out?
*/

function App() {
  const [total, setTotal] = useState(0); // number of shapes selected
  const [shapes, setShapes] = useState([]); // the array of shapes

  // all shapes start out transparent
  const [transparency, setTransparency] = useState({
    Square: true,
    Circle: true,
    Triangle: true,
  });

  const ref = useRef(null);
  const reload = () => window.location.reload(true);

  // submit button handler
  const handleInput = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    if (total > 0 && total < 501) {
      createShapes();
    }
  };

  const createShapes = () => {
    for (let i = 0; i < total; i++) {
      let id = i;
      let shapeName = "Mary" + i;

      // randomize initial x,y coordinates
      let x = getRandomIntInclusive(0, 800);
      let y = getRandomIntInclusive(0, 800);

      // randomize radius (size) bounded 5-15
      let size = getRandomFloat(5.0, 15.0);

      // randomize shape to display
      let type = getRandomIntInclusive(0, 2);

      // this could be an enumeration
      let typeName;
      if (type === 0) typeName = "Square";
      if (type === 1) typeName = "Circle";
      if (type === 2) typeName = "Triangle";

      // build random hex colors #RRGGBB
      let r = getRandomIntInclusive(0, 255).toString(16).toUpperCase();
      if (r.length === 1) {
        r = "0".concat(r);
      }

      let g = getRandomIntInclusive(0, 255).toString(16).toUpperCase();
      if (g.length === 1) {
        g = "0".concat(g);
      }

      let b = getRandomIntInclusive(0, 255).toString(16).toUpperCase();
      if (b.length === 1) {
        b = "0".concat(b);
      }

      let myColor = "#".concat(r, g, b);

      // Add shape to state
      const shapeObj = { shapeName, id, x, y, size, type, typeName, myColor };
      setShapes((shapes) => [...shapes, shapeObj]);
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      // The maximum is inclusive and the minimum is inclusive
    }

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
  };

  const toggleTransparency = (e) => {
    e.preventDefault();
    const buttonName=e.target.name;
    if (transparency[buttonName] === true) {
      setTransparency({
        ...transparency,
        [buttonName]: false,
      });
    } else {
      setTransparency({
        ...transparency,
        [buttonName]: true,
      });
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <label>How many shapes would you like to display? {"  "}</label>
          <input
            type="number"
            min="0"
            max="500"
            required
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <span className="validity"></span>
          <button name="Submit"
            onClick={(e) => {
              handleInput(e);
            }}
          >
            Submit
          </button>
          {"  "}
          <button onClick={reload}>Reset</button>
        </span>
      </header>
      <div></div>
      <div>
        <MyCanvas width="800" height="800" shapes={shapes} transparency={transparency} ref={ref} />
      </div>
      <span>
        Toggle Transparency of shapes! {"  "}
        <button name="Square"
          onClick={(e) => {toggleTransparency(e);
          }}
        >
          {" "}
          Squares{" "}
        </button>
        {"  "}
        <button name="Circle"
          onClick={(e) => {toggleTransparency(e);
          }}
        >
          {" "}
          Circles{" "}
        </button>
        {"  "}
        <button name="Triangle"
          onClick={(e) => {toggleTransparency(e);
          }}
        >
          {" "}
          Triangles{" "}
        </button>
      </span>
    </div>
  );
}

export default CapxApp;
