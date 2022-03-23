import React, {useLayoutEffect} from "react";
import Prism from "prismjs";
//import "prismjs/themes/prism-okaidia.css";
import {shadesOfPurple} from "react-syntax-highlighter/dist/esm/styles/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Code({ code, language }) {
  useLayoutEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="Code">
      <code className={`language-${language}`}>{code}</code>
    </div>
  );
}
