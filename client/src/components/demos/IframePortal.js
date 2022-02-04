import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const IframePortal = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)

  const mountNode =
    contentRef?.contentWindow?.document?.body

  return (
    <iframe {...props} ref={setContentRef} title="iframe">
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default IframePortal;
