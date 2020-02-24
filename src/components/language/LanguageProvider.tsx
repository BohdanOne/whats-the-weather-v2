import React, { useReducer } from 'react';
import languageReducer from './languageReducer';

const DEFAULT_LANGUAGE = window.navigator.language.slice(0, 2) || 'en';
console.log(DEFAULT_LANGUAGE)

interface ILanguageContext {
  language: string;
  changeLanguage?: React.Dispatch<{type: string; payload: string}>
}
export const LanguageContext = React.createContext<ILanguageContext>({language: DEFAULT_LANGUAGE});

export const LanguageProvider: React.FC<{children: React.ReactElement[]}> = ({ children }) => {
  const [language, changeLanguage] = useReducer(languageReducer, DEFAULT_LANGUAGE)
  document.querySelector('html')?.setAttribute('lang', language);

  return (
    <LanguageContext.Provider value={ {language, changeLanguage} }>
      {children}
    </LanguageContext.Provider>
  );
};
