import React from 'react';

const ErrorDisplay: React.FC<{message: string}> = ({message}) => {
  return (
    <h2>
      { message }
    </h2>
  );
};


export default ErrorDisplay;