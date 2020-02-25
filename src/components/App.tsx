import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LocationProvider } from './location/LocationProvider';
import { LanguageProvider } from './language/LanguageProvider';
import Spinner from './shared/Spinner';
import Navbar from './navbar/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ForecastsPage = lazy(() => import('./pages/ForecastsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Suspense fallback={<Spinner message="" />}>
          <main>
            <LocationProvider>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/forecasts" component={ForecastsPage} />
                <Route path="/about" component={AboutPage} />
              </Switch>
            </LocationProvider>
          </main>
        </Suspense>
      </LanguageProvider>
    </>
  );
};

export default App;
