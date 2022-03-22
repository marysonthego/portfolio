import React, {useLayoutEffect} from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default function Code({ code, language }) {
  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <code className={`language-${language}`}>{code}</code>
    </div>
  );
}
