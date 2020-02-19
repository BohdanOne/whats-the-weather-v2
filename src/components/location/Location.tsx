import React, { useState, useEffect } from 'react';
import LocationDisplay from './LocationDisplay';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import decodeLocation from './decodeLocation';

type GeolocationResponse = { coords: { latitude: number; longitude: number } };

interface ILocationProps {
  location: string;
  dispatch: Function | null;
}

const Location: React.FC<ILocationProps> = ({location, dispatch}) => {
  const [warning, setWarning] = useState('');
  const geolocationSupported = navigator && navigator.geolocation;

  useEffect(() => {
    if (geolocationSupported && !location) {
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
      dispatch &&
        dispatch({ type: 'SET_LOCATION', payload: location });
    }
  });

  useEffect(() => {
    if (!location && !geolocationSupported) {
      setWarning(
        'Geolocation is not supported by your browser. Please provide desired location manually.'
      );
    }
  }, [location, geolocationSupported]);

  function handleLocationSearch(location: string) {
    dispatch &&
      dispatch({ type: 'SET_LOCATION', payload: location });
  }

  return (
    <>
      <LocationDisplay location={location} />
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput onLocationSearch={handleLocationSearch} location={location} />
    </>
  );
};

export default Location;
