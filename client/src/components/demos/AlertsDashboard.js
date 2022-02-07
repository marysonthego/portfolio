import React from "react";
import { useWindowDimensions } from 'components/demos/UseWindowDimensions';
import IframePortal from './IframePortal';

export const AlertsDashboard = () => {
  const { height, width } = useWindowDimensions();

  return (
  <>
    <IframePortal title='Dashboard'
      width={width}
      height={height}
      object-position= "50% 50%"
      object-fit="contain"
      src="http://localhost:4000/dash/login" >
    </IframePortal>
    </>
  );
};
