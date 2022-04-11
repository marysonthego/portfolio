import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function Post12() {
  const [notes, setNotes] = useState({});

  let TopPic = "media/rtkquery.png";
  let Title = "RTK Query Code Walk";
  let Section1 = (
    <div>
      <div>
        <img src="media/rtk1.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk2.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
      <span fontSize="48px">...</span>
      </div>
      <div>
        <img src="media/rtk3.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk4.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk5.png" alt="Stepper" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk6.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk7.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk8.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk9.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk10.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk11.png" alt="RTK Query" className="mb-5 sec01img" />
      </div>
      <div>
        <img src="media/rtk12.png" alt="RTK Query" className="mb-5 sec01img" />
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
