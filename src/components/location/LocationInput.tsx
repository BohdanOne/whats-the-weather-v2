import React from 'react';

interface ILocationInputProps {
  onUserInput: Function;
}

const LocationInput: React.FC<ILocationInputProps> = ({onUserInput}) => {
  return (
    <label>
      Enter desired location:
      <input type="text" onKeyUp={event => onUserInput(event)}/>
    </label>
  )
};

export default LocationInput;