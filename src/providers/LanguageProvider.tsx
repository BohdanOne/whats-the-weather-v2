import React, { useReducer } from 'react';
import languageReducer from '../reducers/languageReducer';
import { Languages, ILanguageContext } from '../types';

const DEFAULT_LANGUAGE: Languages = window.navigator.language.slice(0, 2) as Languages || 'en';

export const LanguageContext = React.createContext<ILanguageContext>({language: DEFAULT_LANGUAGE});

export const LanguageProvider: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const [language, changeLanguage] = useReducer(languageReducer, DEFAULT_LANGUAGE)
  document.querySelector('html')?.setAttribute('lang', language);

  return (
    <LanguageContext.Provider value={ {language, changeLanguage} }>
      {children}
    </LanguageContext.Provider>
  );
};
