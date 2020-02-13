import React, { useState, useEffect } from 'react';
import Spinner from '../../shared/Spinner';

type GeolocationResponse = {coords: { latitude: number, longitude: number}}

export default () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        success,
        error => console.log(error)
      );
    function success(position: GeolocationResponse) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setLocation(lat.toString() + long.toString());
    }
  })

  return (
    <>
      {navigator.geolocation ? displayLocation(location) : notSupported()}
    </>
  );
};

function notSupported() {
  return <p>Geolocation is not supported by your browser.</p>;
}

function displayLocation(location: string) {
  if (location) {
    return <p>Your current location: {location} </p>;
  } else {
    return <Spinner message="Searching your location..." />;
  }
}


