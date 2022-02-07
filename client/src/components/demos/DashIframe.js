import { useWindowDimensions } from 'components/demos/UseWindowDimensions';
import IframePortal from './IframePortal';

export default function DashIframe() {
  const { height, width } = useWindowDimensions();

  return (
  <>
    <IframePortal title='Dashboard'
      width={width}
      height={height}
      object-position= "50% 50%"
      object-fit="contain"
      src="https://dash.marysonthego.tech" >
    </IframePortal>
    </>
  );
};
