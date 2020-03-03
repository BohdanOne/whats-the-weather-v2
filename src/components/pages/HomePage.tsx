import React from 'react';

import LocationContainer from '../location/LocationContainer';
import CurrentWeatherContainer from '../current-weather/CurrentWeatherContainer';

export default () => {
  return (
    <div className="l-page">
      <section className="l-section">
        <LocationContainer />
      </section>
      <section className="l-section">
        <CurrentWeatherContainer />
      </section>
    </ div>
  );
};
