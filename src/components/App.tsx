import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '../providers/LanguageProvider';
import { ModeProvider } from '../providers/ModeProvider';
import { LocationProvider } from '../providers/LocationProvider';

import Layout from './layout/Layout';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <ModeProvider>
          <LocationProvider>
            <Layout />
          </LocationProvider>
        </ModeProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
