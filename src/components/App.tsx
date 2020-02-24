import React from 'react';
import { LocationProvider } from './location/LocationProvider';
import { LanguageProvider } from './language/LanguageProvider';
import Navbar from './navbar/Navbar';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <>
      <LanguageProvider>
          <Navbar />
        <LocationProvider>
          <HomePage />
        </LocationProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
