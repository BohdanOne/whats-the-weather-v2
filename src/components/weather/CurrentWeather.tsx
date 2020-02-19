import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TCurrentWeather } from './currentWeather.model';
import Spinner from '../shared/Spinner';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface ICurrentWeather {
  location: string;
}

const CurrentWeather: React.FC<ICurrentWeather> = ({location}) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (location) {
      axios.get(`${BASE_URL}?q=${location}&units=metric&appid=${API_KEY}`)
        .then(response => response.data)
        .then((data: TCurrentWeather) => {
          setWeather(data)
        })
        .catch(e => console.log(e));
    }
  }, [location]);

  if (!location) {
    return <Spinner message='Waiting for location' />
  }
  if (location && !weather) {
    return <Spinner message={`Checking weather in ${location}`} />
  }
  if (location && weather) {
    return <div>Current Weather: {weather.weather[0].description}</div>
  }
  return <div>Weather not available</div>
};

export default CurrentWeather;