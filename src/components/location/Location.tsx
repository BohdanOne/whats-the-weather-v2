import React, { useState, useEffect } from 'react';
import LocationDisplay from './LocationDisplay';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import decodeLocation from './decodeLocation';

type GeolocationResponse = { coords: { latitude: number; longitude: number } };

export default (props: {location: string, dispatch: Function | null}) => {
  const [warning, setWarning] = useState('');
  const geolocationSupported = navigator && navigator.geolocation;

  useEffect(() => {
    if (geolocationSupported && !props.location) {
      navigator.geolocation.getCurrentPosition(success, error => {
        if (error.code === 1) {
          setWarning(
            'Please allow access to your location or provide desired location manually.'
          );
        } else {
          setWarning(error.message);
        }
      });
    }
    async function success(position: GeolocationResponse) {
      const lat = position.coords.latitude.toString();
      const long = position.coords.longitude.toString();
      const location = (await decodeLocation(lat, long)) as string;
      props.dispatch && props.dispatch({ type: 'SET_LOCATION', payload: location });
    }
  });

  useEffect(() => {
    if (!props.location && !geolocationSupported) {
      setWarning(
        'Geolocation is not supported by your browser. Please provide desired location manually.'
      );
    }
  }, [props.location, geolocationSupported]);

  function handleUserInput(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    props.dispatch && props.dispatch({ type: 'SET_LOCATION', payload: input.value });
  }

  return (
    <>
      <LocationDisplay location={props.location} />
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput onUserInput={handleUserInput} />
    </>
  );
};
