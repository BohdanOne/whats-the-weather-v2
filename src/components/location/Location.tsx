import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';
import LocationDisplay from './LocationDisplay';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import decodeLocation from './decodeLocation';

type GeolocationResponse = { coords: { latitude: number; longitude: number } };

interface ILocationProps {
  location: string;
  dispatch: Function | null;
}

const Location: React.FC<ILocationProps> = ({ location, dispatch }) => {
  const [warning, setWarning] = useState('');
  const geolocationSupported = navigator && navigator.geolocation;
  const {language} = useContext(LanguageContext);

  useEffect(() => {
    if (geolocationSupported && !location) {
      navigator.geolocation.getCurrentPosition(success, error => {
        if (error) {
          setWarning(
            language === 'en'
              ? 'Please allow access to your location or provide desired location manually.'
              : 'Zezwól na dostęp do usługi lokalizacji lub wpisz lokalizację ręcznie.'
          );
        }
      });
    }
    async function success(position: GeolocationResponse) {
      const lat = position.coords.latitude.toString();
      const long = position.coords.longitude.toString();
      const location = (await decodeLocation(lat, long)) as string;
      dispatch && dispatch({ type: 'SET_LOCATION', payload: location });
    }
  });

  useEffect(() => {
    if (!location && !geolocationSupported) {
      setWarning(
        language === 'en'
          ? 'Geolocation is not supported by your browser. Please provide desired location manually.'
          : 'Geolokacja nie jest obsługiwana przez Twoją przeglądarkę. Wpisz lokalizację ręcznie.'
      );
    }
  }, [location, geolocationSupported, language]);

  function handleLocationSearch(location: string) {
    dispatch && dispatch({ type: 'SET_LOCATION', payload: location });
  }

  return (
    <section className="Location">
      <LocationDisplay location={location} />
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput onLocationSearch={handleLocationSearch} />
    </section>
  );
};

export default Location;
