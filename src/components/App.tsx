import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LocationProvider } from './location/LocationProvider';
import { LanguageProvider } from './language/LanguageProvider';
import Spinner from './shared/Spinner';
import Navbar from './navbar/Navbar';

const HomePage = lazy(() => import('./pages/home/HomePage'));

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Suspense fallback={<Spinner message="" />}>
          <main>
            <LocationProvider>
              <Switch>
                <Route exac path="/" component={HomePage} />
                <Route exac path="/forecasts" component={HomePage} />
                <Route exac path="/about" component={HomePage} />
              </Switch>
            </LocationProvider>
          </main>
        </Suspense>
      </LanguageProvider>
    </>
  );
};

export default App;
