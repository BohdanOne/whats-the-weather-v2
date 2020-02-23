import React from 'react';

export default (props: { message: string }) => {
  return (
    <div className="Spinner">
      <p className="Spinner_message">{props.message}</p>
      <div className="Spinner_spinner"></div>
    </div>
  );
};
