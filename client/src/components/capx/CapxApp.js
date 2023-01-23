import { useRef, useState } from "react";
import "./capxApp.css";
import { MyCanvas } from "./MyCanvas";

function CapxApp() {
  const [total, setTotal] = useState(0); // number of shapes selected
  const [shapes, setShapes] = useState([]); // the array of shapes
  let x, y;
  let forward = false;
  let backward = false;

  // all shapes start out transparent
  const [transparency, setTransparency] = useState({
    Square: true,
    Circle: true,
    Triangle: true,
  });

  const [motion, setMotion] = useState({
    Forward: false,
    Backward: false,
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
      x = getRandomIntInclusive(0, 800);
      y = getRandomIntInclusive(0, 800);
      console.log(`initial x=`, x, `initial y=`, y);

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

  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
  }

  const getRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
  }

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

  const toggleMotion = (e) => {
    e.preventDefault();
    const buttonName=e.target.name;
    switch (buttonName) {
      case "Forward":
        if (motion[buttonName] === true) {
          setMotion({
            ...motion, [buttonName]: false,
          })
          forward = false;
        } else if (motion[buttonName] === false) {
          setMotion({
            ...motion, [buttonName]: true,
            ...motion, Backward: false,
          })
          forward = true;
          backward = false;
        };
      break;
      case "Backward":
          if (motion[buttonName] === true) {
            setMotion({
              ...motion, [buttonName]: false,
            })
            backward = false;
          } else if (motion[buttonName] === false) {
            setMotion({
              ...motion, [buttonName]: true,
              ...motion, Forward: false,
            })
            backward = true;
            forward = false;
          };
      break;
      default:
      break;
    }console.log(`forward=`,forward, `backward=`,backward);
    let dx = 0;
    let dy = 0;
    if (forward === true){
      dx = Math.abs(getRandomFloat(-5, 5));
      dy = Math.abs(getRandomFloat(-5, 5));
    } else if (backward === true) {
      dx = (-1 * Math.abs(getRandomFloat(-5, 5)));
      dy = (-1 * Math.abs(getRandomFloat(-5, 5)));
    }
    console.log(`dx=`, dx, `dy=`, dy);
    const newShapes = shapes.map((s, i) => {
        let tempShape = {...s};
        tempShape.x = s.x + dx;
        tempShape.y = s.y + dy;
        return tempShape;
    });
    setShapes(newShapes);
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
      <div >
        <MyCanvas width="800" height="800" shapes={shapes} transparency={transparency} ref={ref} />
      </div>
      <div>
      <span>
        Toggle Transparency! {"  "}
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
        {"    "}Toggle Motion! {"  "}
          <button name="Forward"
            onClick={(e) => {toggleMotion(e);
            }}
          >
            {" "}
            Forward{" "}
          </button>
          {"  "}
          <button name="Backward"
            onClick={(e) => {toggleMotion(e);
            }}
          >
            {" "}
            Backward{" "}
          </button>
        </span>
      </div>
    </div>
  );
}

export default CapxApp;
