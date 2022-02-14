import React from 'react';
import useWindowDimensions from 'components/helpers/UseWindowDimensions';

export default function StepperIframe() {
  const {width, height} = useWindowDimensions();
  let iwidth = width-50;
  let iheight = height-100;
  if(width < 410) {
    return (
      <iframe title='Stepper'
        width={iwidth+50}
        height={iheight}
        src="https://dash.marysonthego.tech/" >
      </iframe>
    );
    } else {
      return (
        <iframe title='Stepper'
        width={iwidth+30}
        height={iheight}
        src="https://dash.marysonthego.tech/" >
      </iframe>
      )
    }
  }
