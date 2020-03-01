import React, { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';

import Header from '../shared/Header';
import Location from '../location/Location';
import CurrentWeather from '../current-weather/CurrentWeather';

export default () => {
  const { location, dispatch } = useContext(LocationContext);

  return (
    <>
      <Header title="What's the Weather" />
      <Location location={location} dispatch={dispatch} />
      <CurrentWeather location={location} />
    </>
  );
};
