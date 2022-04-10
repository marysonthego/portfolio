import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import steppermd from "./ProfileStepper.md";

export function Post11() {
  const [notes, setNotes] = useState({});

  function Notes(fileName) {
    fetch(fileName)
      .then((response) => response.text())
      .then((textContent) => {
        setNotes(textContent);
      });
  }

  let TopPic = "media/stepper.png";
  let Title = "Sign-Up Stepper Code Walk";
  Notes(steppermd);

  let Section1 = (
    <div>
      <div>
        <img src="media/stepper1.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/stepper2.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/stepper3.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/stepper4.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/stepper5.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/stepper6.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" className="sec01img" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01 text-center">{Section1}</div>
    </div>
  );
}
