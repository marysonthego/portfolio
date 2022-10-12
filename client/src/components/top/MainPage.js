import React, {useEffect} from "react";
export function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='mainContainer'>

      <div className='mainImage'>
        <img
          src="media/mary.png"
          title="Mary"
          className="pic rounded-circle"
          alt="Mary"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
        <h1 className="mainTitle">
          Hi! My name is Mary. I'm a full-stack developer
        </h1>
        <h2 className="mainSubtitle">specializing in React, NodeJS, & Express.</h2>
      </div>
    </div>

  );
};
