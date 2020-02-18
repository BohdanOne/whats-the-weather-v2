import React from 'react';

export default (props: { location: string; onUserInput: Function }) => {
  return (
    <label>
      {props.location ? 'Enter other location' : 'Enter desired location:'}{' '}
      <input type="text" onKeyUp={event => props.onUserInput(event)} />
    </label>
  );
};
