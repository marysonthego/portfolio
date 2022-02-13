import { useWindowDimensions } from 'components/helpers/UseWindowDimensions';
import IframePortal from './IframePortal';

export default function StepperIframe() {
  const { height, width } = useWindowDimensions();

  return (
    <>
    <IframePortal title='Sign up Stepper'
      width={width}
      height={height}
      object-position= "50% 50%"
      object-fit="contain"
      src="https://dash.marysonthego.tech" >
    </IframePortal>
    </>
  );
};
