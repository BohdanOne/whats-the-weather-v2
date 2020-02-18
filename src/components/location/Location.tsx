import React, { useState, useEffect } from 'react';
import LocationDisplay from './LocationDisplay';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import findLocation from './findLocation';

type GeolocationResponse = { coords: { latitude: number; longitude: number } };

export default () => {
  const [location, setLocation] = useState('');
  const [warning, setWarning] = useState('');

  const geolocationSupported = navigator && navigator.geolocation;

  useEffect(() => {
    if (geolocationSupported && !location) {
      navigator.geolocation.getCurrentPosition(success, error => {
        if(error.code === 1) {
          setWarning(
            'Please allow access to your location or provide desired location manually.'
          );
        } else {
          setWarning(error.message)
        }
      });
    }
    async function success(position: GeolocationResponse) {
      const lat = position.coords.latitude.toString();
      const long = position.coords.longitude.toString();
      const location = await findLocation(lat, long) as string;
      setLocation(location)
    }
  });

  useEffect(() => {
    if (!location && !geolocationSupported) {
      setWarning(
        'Geolocation is not supported by your browser. Please provide desired location manually.'
      );
    }
  }, [location, geolocationSupported]);

  function handleUserInput(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    setLocation(input.value);
  }

  return (
    <>
      <LocationDisplay location={location} />
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput onUserInput={handleUserInput}/>
    </>
  );
};
