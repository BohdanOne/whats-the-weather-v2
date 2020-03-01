import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../shared/Spinner';

const HomePage = lazy(() => import('./HomePage'));
const ForecastsPage = lazy(() => import('./ForecastsPage'));
const AboutPage = lazy(() => import('./AboutPage'));

const Pages: React.FC = () => {
  return (
    <Suspense fallback={<Spinner message='' />}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/forecasts' component={ForecastsPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
    </Suspense>
  );
};

export default Pages;
