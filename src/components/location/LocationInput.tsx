import React, { useRef } from 'react';

interface ILocationInputProps {
  location: string;
  onLocationSearch: (location: string) => void;
}

const LocationInput: React.FC<ILocationInputProps> = ({location, onLocationSearch}) => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const gotLocation = location ? 'other' : 'desired';

  const searchLocation = (event: React.FormEvent) => {
    event.preventDefault();
    const location = locationInputRef.current!.value;
    onLocationSearch(location);
  }

  return (
    <form onSubmit={searchLocation}>
      <label htmlFor="locationInput">
        Enter {gotLocation} location:
      </label>
      <input type="text" id="locationInput" ref={locationInputRef} />
      <button type="submit">search</button>
    </form>


  )
};

export default LocationInput;