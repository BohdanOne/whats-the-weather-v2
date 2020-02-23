import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ICurrentWeather } from './currentWeather.model';
import Spinner from '../shared/Spinner';
import { LanguageContext } from '../language/LanguageProvider';
import content from './currentWeatherContent';

// const API_URL = 'https://wtw-api.herokuapp.com/weather/current';
const API_URL = 'http://localhost:8080/weather/current';

interface ILocation {
  location: string;
}

const CurrentWeather: React.FC<ILocation> = ({ location }) => {
  const [weather, setWeather] = useState<ICurrentWeather>();
  const [error, setError] = useState<boolean>(false);
  const language = useContext(LanguageContext);

  const {title, errorMessage, spinnerMessageNoLocation, spinnerMessageNoWeather } = language === 'en' ? content[0]: content[1];

  useEffect(() => {

    if (location) {
      axios
        .post(API_URL, {location, language})
        .then(response => response.data)
        .then((data: ICurrentWeather) => {
          setError(false);
          setWeather(data)
        })
        .catch(e => {
          setError(true)
        });
    }
  }, [location, language, error]);

  if (error) {
    return <div>{errorMessage}</div>
  }

  if (!location) {
    return <Spinner message={spinnerMessageNoLocation} />;
  }
  if (location && !weather) {
    return <Spinner message={`${spinnerMessageNoWeather}${location}...`} />;
  }
  if (location && weather) {
    return (
      <div>
        <h2>{title} {weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt=""
        />
      </div>
    );
  }
  return <div>{errorMessage}</div>;
};

export default CurrentWeather;
