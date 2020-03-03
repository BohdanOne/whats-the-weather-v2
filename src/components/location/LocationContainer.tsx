import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';
import { LocationContext } from '../../providers/LocationProvider';
import SectionHeader from '../layout/SectionHeader';
import LocationInput from './LocationInput';
import WarningDisplay from './WarningDisplay';
import Spinner from '../shared/Spinner';
import decodeLocation from '../../helpers/decodeLocation';
import content from '../../contents/locationContent';
import { IGeolocationResponse } from '../../types';

const LocationContainer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { location, dispatch } = useContext(LocationContext);
  const [warning, setWarning] = useState('');
  const geolocationSupported = navigator && navigator.geolocation;

  useEffect(() => {
    if (geolocationSupported && !location) {
      navigator.geolocation.getCurrentPosition(
        async (position: IGeolocationResponse) => {
          const lat = position.coords.latitude.toString();
          const long = position.coords.longitude.toString();
          const location = (await decodeLocation(lat, long)) as string;
          dispatch && dispatch({ type: 'SET_LOCATION', payload: location });
        },
        () => setWarning(content[language].warning.location)
      );
    }
  });

  useEffect(() => {
    if (!location && !geolocationSupported) {
      setWarning(content[language].warning.geolocation);
    }
  }, [location, geolocationSupported, language]);

  function handleLocationSearch(location: string) {
    dispatch && dispatch({ type: 'SET_LOCATION', payload: location });
  }

  return (
    <>
      {location ? (
        <SectionHeader title={content[language].header.title} titleSpan={location} />
      ) : (
        <Spinner message={content[language].spinner.message} />
      )}
      {warning && <WarningDisplay warning={warning} />}
      <LocationInput locationSearch={handleLocationSearch} language={language} />
    </>
  );
};

export default LocationContainer;
