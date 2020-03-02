import React from 'react';

const WarningDisplay: React.FC<{ warning: string }> = ({warning}) => (
  <p >
    {warning}
  </p>
);

export default WarningDisplay;