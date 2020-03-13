import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { LanguageContext } from '../../providers/LanguageProvider';
import { LocationContext } from '../../providers/LocationProvider';
import Spinner from '../shared/Spinner';
import SectionHeader from '../shared/SectionHeader';
import WarningDisplay from '../shared/WarningDisplay';
import ForecastDetails from './ForecastDetails';
import content from '../../contents/forecastContent';
import { IForecast } from '../../types';

const API_URL = 'https://wtw-api.herokuapp.com/forecast/';

const ForecastContainer: React.FC = () => {
  const [weather, setWeather] = useState<[IForecast]>();
  const [warning, setWarning] = useState('');
  const { language } = useContext(LanguageContext);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      axios
        .post(API_URL, { location, language })
        .then(response => response.data)
        .then((data: [IForecast]) => {
          setWeather(data);
          warning && setWarning('');
        })
        .catch(e => {
          setWarning(content[language].warning);
        });
    }
  }, [location, language, warning]);

  return (
    location ? (
      <>
        <SectionHeader
          title={content[language].header.title}
          titleSpan={location}
        />
        {warning ? (
          <WarningDisplay warning={warning} />
        ) : (
            <>
              {!weather && (
                <Spinner
                  message={`${content[language].spinner.message.noForecast} ${location}`}
                />
              )}
              {weather && (
                <ForecastDetails weather={weather} language={language} />
              )}{' '}
            </>
          )}
      </>) :
      <Redirect to="/" />
  );
};

export default ForecastContainer;
