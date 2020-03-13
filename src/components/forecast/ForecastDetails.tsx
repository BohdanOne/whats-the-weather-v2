import React from 'react';
import { IForecastDetailsProps } from '../../types';
import content from '../../contents/weatherContent';

const ForecastDetails: React.FC<IForecastDetailsProps> = ({
  weather,
  language
}) => {
  const {
    feelsLike,
    precipitation,
    pressure,
    humidity,
    wind,
    clouds
  } = content[language].weather;

  const renderForecast = () => {
    return (
      weather &&
      weather.map((weather, index) => {
        return (
          <div className='c-weather__details c-weather__details--forecast' key={index}>
            <p className='c-weather__date'>
              {weather.day.toUpperCase()} <br />
              {weather.date}
            </p>
            <p className='c-weather__description'>{weather.description}</p>
            <div className='c-weather__icon'>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt=''
              />
            </div>
            <p className='c-weather__temperature'>{weather.temp}</p>
            <ul className='c-weather__full'>
              <li className='c-weather__item'>
                {feelsLike}: {weather.feelsLike}
              </li>
              <li className='c-weather__item'>
                {precipitation}: {weather.precipitation}
              </li>
              <li className='c-weather__item'>
                {pressure}: {weather.pressure}
              </li>
              <li className='c-weather__item'>
                {humidity}: {weather.humidity}
              </li>
              <li className='c-weather__item'>
                {wind}: {weather.wind}
              </li>
              <li className='c-weather__item'>
                {clouds}: {weather.clouds}
              </li>
            </ul>
          </div>
        );
      })
    );
  };

  return <div className='c-weather c-weather--forecast'> {renderForecast()}</div>;
};

export default ForecastDetails;
