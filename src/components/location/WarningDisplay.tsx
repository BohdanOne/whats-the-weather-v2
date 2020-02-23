import React from 'react';

interface IWarningDisplayProps { warning: string }

const WarningDisplay: React.FC<IWarningDisplayProps> = ({warning}) => (
  <p className="Location_warning">
    {warning}
  </p>
);

export default WarningDisplay;