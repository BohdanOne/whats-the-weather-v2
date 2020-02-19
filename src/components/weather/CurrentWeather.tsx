import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TCurrentWeather } from './currentWeather.model';
import Spinner from '../shared/Spinner';
import { LanguageContext } from '../language/LanguageProvider';
import content from './currentWeatherContent';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface ICurrentWeather {
  location: string;
}

const CurrentWeather: React.FC<ICurrentWeather> = ({ location }) => {
  const [weather, setWeather] = useState();
  const language = useContext(LanguageContext);

  const {title, error, spinnerMessageNoLocation, spinnerMessageNoWeather } = language === 'en' ? content[0]: content[1];

  useEffect(() => {
    if (location) {
      axios
        .get(`${BASE_URL}?q=${location}&units=metric&lang=${language}&appid=${API_KEY}`)
        .then(response => response.data)
        .then((data: TCurrentWeather) => {
          setWeather(data);
        })
        .catch(e => console.log(e));
    }
  });

  if (!location) {
    return <Spinner message={spinnerMessageNoLocation} />;
  }
  if (location && !weather) {
    return <Spinner message={`${spinnerMessageNoWeather}${location}...`} />;
  }
  if (location && weather) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt=""
        />
      </div>
    );
  }
  return <div>{error}</div>;
};

export default CurrentWeather;
