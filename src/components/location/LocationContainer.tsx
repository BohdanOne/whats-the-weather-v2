import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';
import { LocationContext } from '../../providers/LocationProvider';
import LocationDisplay from './LocationDisplay';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import Spinner from '../shared/Spinner';
import decodeLocation from './decodeLocation';
import content from './locationContent';
import { IGeolocationResponse } from '../../types';

const LocationContainer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { location, dispatch } = useContext(LocationContext);
  const [warning, setWarning] = useState('');
  const geolocationSupported = navigator && navigator.geolocation;

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

    async function success(position: IGeolocationResponse) {
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
    <>
      {location ? (
        <LocationDisplay location={location} />
      ) : (
          <Spinner message={content[language].spinnerMessage}/>
      )}
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput onLocationSearch={handleLocationSearch} />
    </>
  );
};

export default LocationContainer;
