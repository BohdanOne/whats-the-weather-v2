import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ICurrentWeather } from './currentWeather.model';
import Spinner from '../shared/Spinner';
import ErrorDisplay from '../shared/ErrorDisplay';
import CurrentWeatherDetails from './CurrentWeatherDetails';
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
  const {language} = useContext(LanguageContext);

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

  if (error) return <ErrorDisplay message={errorMessage} />;

  if (!location) return <Spinner message={spinnerMessageNoLocation} />;

  if (location && !weather) return <Spinner message={`${spinnerMessageNoWeather}${location}...`} />;

  if (location && weather) return <CurrentWeatherDetails title={title} weather={weather} language={language}/>;

  return <ErrorDisplay message={errorMessage} />;
};

export default CurrentWeather;
