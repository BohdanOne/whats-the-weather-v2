import React, { useContext } from 'react';
import content from './locationContent';
import { LanguageContext } from '../../providers/LanguageProvider';

const LocationDisplay: React.FC<{ location: string }> = ({ location }) => {
  const { language } = useContext(LanguageContext);
  const { title } = content[language]

  return (
        <h2 className="l-section__header">
          {title}: <span className="l-section__header--bold">{location}</span>
        </h2>
  );
};

export default LocationDisplay;
