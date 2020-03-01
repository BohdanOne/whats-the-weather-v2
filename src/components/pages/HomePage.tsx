import React, { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';

import Location from '../location/Location';
import CurrentWeather from '../current-weather/CurrentWeather';

export default () => {
  const { location, dispatch } = useContext(LocationContext);

  return (
    <div className=".l-page">
      <Location location={location} dispatch={dispatch} />
      <CurrentWeather location={location} />
    </ div>
  );
};
