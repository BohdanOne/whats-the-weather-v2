import React, { useContext } from 'react';
import Spinner from '../shared/Spinner';
import content from './locationDisplayContent';
import { LanguageContext } from '../language/LanguageProvider';


const LocationDisplay: React.FC<{location: string}> = ({ location }) => {
  const language = useContext(LanguageContext);
  const {title, spinnerMessage} = language === 'en' ? content[0]: content[1];

  return (
    <>
      <h2>{title}</h2>
      {location ? (
        <p>{location}</p>
      ) : (
        <Spinner message={spinnerMessage} />
      )}
    </>
  );
};

export default LocationDisplay;
