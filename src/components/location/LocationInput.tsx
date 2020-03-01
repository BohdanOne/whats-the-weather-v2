import React, { useRef, useContext } from 'react';
import content from './locationInputContent';
import { LanguageContext } from '../../providers/LanguageProvider';


interface ILocationInputProps {
  onLocationSearch: (location: string) => void;
}

const LocationInput: React.FC<ILocationInputProps> = ({onLocationSearch}) => {
  const locationInputRef = useRef<HTMLInputElement>(null);
  const {language} = useContext(LanguageContext);
  const {label, buttonText} = language === 'en' ? content[0]: content[1];

  const searchLocation = (event: React.FormEvent) => {
    event.preventDefault();
    const location = locationInputRef.current!.value;
    onLocationSearch(location);
  }

  return (
    <form className="InputForm" onSubmit={searchLocation}>
      <label className="InputForm_label" htmlFor="locationInput">
        {label}
      </label>
      <input className="o-input" type="text" id="locationInput" ref={locationInputRef} />
      <button className="o-button" type="submit" aria-label="Search for Location">{buttonText}</button>
    </form>
  )
};

export default LocationInput;