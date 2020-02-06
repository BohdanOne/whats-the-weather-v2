import React from 'react';

export default (props: { message: string }) => {
  return (
    <div className="spinner">
      <p className="spinner__message">{props.message}</p>
      <div className="spinner__spinner"></div>
    </div>
  );
};
