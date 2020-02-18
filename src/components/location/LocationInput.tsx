import React from 'react';

export default (props: {onUserInput: Function }) => {
  return (
    <label>
      Enter desired location:
      <input type="text" onKeyUp={event => props.onUserInput(event)}/>
    </label>
  )
};
