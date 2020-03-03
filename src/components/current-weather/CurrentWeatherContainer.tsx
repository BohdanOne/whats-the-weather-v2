import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../../providers/LanguageProvider';
import { LocationContext } from '../../providers/LocationProvider';
import Spinner from '../shared/Spinner';
import SectionHeader from '../shared/SectionHeader';
import WarningDisplay from '../shared/WarningDisplay';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import content from '../../contents/currentWeatherContent';
import { ICurrentWeather } from '../../types';

const API_URL = 'https://wtw-api.herokuapp.com/weather/current';

const CurrentWeatherContainer: React.FC = () => {
  const [weather, setWeather] = useState<ICurrentWeather>();
  const [warning, setWarning] = useState('');
  const { language } = useContext(LanguageContext);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      axios
        .post(API_URL, { location, language })
        .then(response => response.data)
        .then((data: ICurrentWeather) => {
          setWeather(data);
        })
        .catch(e => {
          console.log(e);
          setWarning(content[language].warning);
        });
    }
  }, [location, language]);

  // const renderDisplay = () => {
  //   if (warning) {
  //     return
  //   }
  // }
  return (
    <>
      <SectionHeader
        title={content[language].header.title}
        titleSpan={location}
      />
      {warning ? (
        <WarningDisplay warning={warning} />
      ) : (
        <>
          {!location && (
            <Spinner message={content[language].spinner.message.noLocation} />
          )}
          {location && !weather && (
            <Spinner
              message={`${content[language].spinner.message.noWeather} ${location}`}
            />
          )}
          {location && weather && (
            <CurrentWeatherDetails weather={weather} language={language} />
          )}{' '}
        </>
      )}
    </>
  );
};

export default CurrentWeatherContainer;