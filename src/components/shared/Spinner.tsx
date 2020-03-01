import React from 'react';

export default (props: { message: string }) => {
  return (
    <div className="o-spinner">
      <p className="o-spinner__message">{props.message}</p>
      <div className="o-spinner__spinner"></div>
    </div>
  );
};
