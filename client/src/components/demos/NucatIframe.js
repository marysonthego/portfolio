import React, {useState, useCallback} from 'react';
//import Container from "react-bootstrap/Container";
import IframePortal from './IframePortal';


// function useClientRect() {
//   const [rect, setRect] = useState(null);
//   const ref = useCallback(node => {
//     if (node !== null) {
//       setRect(node.getBoundingClientRect());
//     }
//   }, []);
//   return [rect, ref];
// }

export default function NucatIframe() {
  //const [rect, ref] = useClientRect();
  return (
    <div className="ratio ratio-1x1">
    <IframePortal title='Nucat!'
      allowfullscreen
      src="https://nucat.marysonthego.tech/" >
    </IframePortal>
    </div>
  );
};

