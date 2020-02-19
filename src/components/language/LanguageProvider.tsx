import React, { useState } from 'react';
import LanguagePicker from './LanguagePicker';

export const LanguageContext = React.createContext<string>('en');

export const LanguageProvider: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  document.querySelector('html')?.setAttribute('lang', language);

  const handleLanguageChoice = (language: string) => {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider value={ language }>
      <LanguagePicker language={language} onLanguageChoice={handleLanguageChoice}/>
      {children}
    </LanguageContext.Provider>
  );
};
