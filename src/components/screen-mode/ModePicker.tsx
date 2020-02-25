import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../language/LanguageProvider';
import toggleMode from './toggleMode';

const LanguagePicker: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const DEFAULT_MODE = isDark ? 'dark' : 'light';

  useEffect(() => {
    toggleMode(DEFAULT_MODE);
  });

  return (
    <div className="SettingsPanel_picker">
      <p>{language === 'en' ? 'choose mode' : 'wybierz tryb'}</p>
      <label htmlFor="light">
        <span role="img" aria-label="Sun">
          {' '}
          ☼{' '}
        </span>
      </label>
      <input
        type="radio"
        name="mode"
        id="light"
        value="light"
        defaultChecked={DEFAULT_MODE === 'light'}
        onChange={() => toggleMode('light')}
      />
      <label htmlFor="dark">
        <span role="img" aria-label="Moon">
          {' '}
          ☾{' '}
        </span>
      </label>
      <input
        type="radio"
        name="mode"
        id="dark"
        value="dark"
        defaultChecked={DEFAULT_MODE === 'dark'}
        onChange={() => toggleMode('dark')}
      />
    </div>
  );
};

export default LanguagePicker;
