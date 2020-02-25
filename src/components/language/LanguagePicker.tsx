import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';

const LanguagePicker: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="SettingsPanel_picker">
      <p>{language === 'en' ? 'change language' : 'zmień język'}</p>
      <label htmlFor="en">
        <span role="img" aria-label="Flag: United Kingdom">
          {' '}
          🇬🇧{' '}
        </span>
      </label>
      <input
        type="radio"
        name="language"
        id="en"
        value="en"
        checked={language === 'en'}
        onChange={() =>
          changeLanguage!({ type: 'CHANGE_LANGUAGE', payload: 'en' })
        }
      />
      <label htmlFor="pl">
        <span role="img" aria-label="Flag: Poland">
          {' '}
          🇵🇱{' '}
        </span>
      </label>
      <input
        type="radio"
        name="language"
        id="pl"
        value="pl"
        checked={language === 'pl'}
        onChange={() =>
          changeLanguage!({ type: 'CHANGE_LANGUAGE', payload: 'pl' })
        }
      />
    </div>
  );
};

export default LanguagePicker;
