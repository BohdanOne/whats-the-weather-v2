import React from 'react';
import { LocationProvider } from './location/LocationProvider';
import { LanguageProvider } from './language/LanguageProvider';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <>
      <LanguageProvider>
        <LocationProvider>
          <HomePage />
        </LocationProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
