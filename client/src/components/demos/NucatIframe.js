import IframePortal from './IframePortal';
import NucatApp from 'nucat';

export default function NucatIframe() {
  return (
    <IframePortal title='A custom made iframe'>
      <NucatApp/>
    </IframePortal>
  );
};
