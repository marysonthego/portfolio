import React from 'react';
import useWindowDimensions from 'components/helpers/UseWindowDimensions';

export default function NucatIframe() {
  const {width, height} = useWindowDimensions();
  let iwidth = width-50;
  let iheight = height-100;
  if(width < 410) {
    return (
      <iframe title='Nucat'
        width={iwidth+50}
        height={iheight}
        src="https://nucat.marysonthego.tech/" >
      </iframe>
    );
    } else {
      return (
        <iframe title='Nucat'
        width={iwidth+30}
        height={iheight}
        src="https://nucat.marysonthego.tech/" >
      </iframe>
      )
    }
  }
