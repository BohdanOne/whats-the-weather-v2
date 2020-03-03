import React, { useRef } from 'react';
import content from '../../contents/locationContent';
import { ILocationInputProps } from '../../types';

const LocationInput: React.FC<ILocationInputProps> = ({
  locationSearch,
  language
}) => {
  const locationInputRef = useRef<HTMLInputElement>(null);
  const { label, buttonLabel, buttonText } = content[language].input;

  const searchLocation = (event: React.FormEvent) => {
    event.preventDefault();
    const location = locationInputRef.current!.value;
    locationSearch(location);
  };

  return (
    <form className='o-form' onSubmit={searchLocation}>
      <label htmlFor='locationInput'>{label}</label>
      <input
        className='o-input'
        type='text'
        id='locationInput'
        ref={locationInputRef}
      />
      <button className='o-button' type='submit' aria-label={buttonLabel}>
        {buttonText}
      </button>
    </form>
  );
};

export default LocationInput;
