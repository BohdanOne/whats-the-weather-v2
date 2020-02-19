import React from 'react';

interface IWarningDisplayProps { warning: string }

const WarningDisplay: React.FC<IWarningDisplayProps> = ({warning}) => (
  <p>
    {warning}
  </p>
);

export default WarningDisplay;