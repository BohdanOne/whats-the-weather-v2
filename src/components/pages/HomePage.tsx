import React from 'react';

import LocationContainer from '../location/LocationContainer';
// import CurrentWeather from '../current-weather/CurrentWeather';

export default () => {
  return (
    <div className="l-page">
      <section className="l-section">
        <LocationContainer />
      </section>
      <section className="l-section">
        {/* <CurrentWeather /> */}
      </section>
    </ div>
  );
};
