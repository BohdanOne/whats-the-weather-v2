import React from 'react';
import Spinner from '../shared/Spinner';

interface ILocationDisplayProps {
  location: string;
}

const LocationDisplay: React.FC<ILocationDisplayProps> = ({ location }) => {
  return (
    <>
      <h2>Check weather for:</h2>
      {location ? (
        <p>{location}</p>
      ) : (
        <Spinner message="Waiting for your location..." />
      )}
    </>
  );
};

export default LocationDisplay;
