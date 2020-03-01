import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '../providers/LanguageProvider';
import { LocationProvider } from '../providers/LocationProvider';

import Layout from './layout/Layout';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <LocationProvider>
          <Layout />
        </LocationProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
