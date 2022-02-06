import { useState, useEffect } from 'react';
import IframePortal from './IframePortal';
//import NucatApp from 'nucatpkg';

export default function NucatIframe() {
  const { height, width } = useWindowDimensions();

  return (
    <>
    <IframePortal title='Nucat!'
      width={width}
      height={height}
      object-position= "50% 50%"
      object-fit="contain"
      src="http://localhost:3000/nucat" >
    </IframePortal>
    </>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(`useEffect handleResize`);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
