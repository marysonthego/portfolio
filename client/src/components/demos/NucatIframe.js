import { useWindowDimensions } from 'components/demos/UseWindowDimensions';
import IframePortal from './IframePortal';

export default function NucatIframe() {
  const { height, width } = useWindowDimensions();

  return (
    <>
    <IframePortal title='Nucat!'
      width={width}
      height={height}
      object-position= "50% 50%"
      object-fit="contain"
      src="http://localhost:4000/nucat" >
    </IframePortal>
    </>
  );
};
