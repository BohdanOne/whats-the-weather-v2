import React from 'react';
import { LocationProvider } from './location/LocationProvider';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <LocationProvider>
      <HomePage />
    </LocationProvider>
  );
}

export default App;
