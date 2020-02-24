import React, { useContext } from 'react';
import Spinner from '../shared/Spinner';
import content from './locationDisplayContent';
import { LanguageContext } from '../language/LanguageProvider';

const LocationDisplay: React.FC<{ location: string }> = ({ location }) => {
  const {language} = useContext(LanguageContext);
  const { title, spinnerMessage } = language === 'en' ? content[0] : content[1];

  return (
    <div className="LocationDisplay">
      {location ? (
        <h2>
          {title}: <span>{location}</span>
        </h2>
      ) : (
        <Spinner message={spinnerMessage} />
      )}
    </div>
  );
};

export default LocationDisplay;
