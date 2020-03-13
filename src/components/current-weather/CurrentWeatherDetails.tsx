import React, { useState } from 'react';
import { ICurrentWeatherDetailsProps } from '../../types';
import content from '../../contents/currentWeatherContent';

const CurrentWeatherDetails: React.FC<ICurrentWeatherDetailsProps> = ({
  weather,
  language
}) => {
  const [extendedView, setExtendedView] = useState<boolean>(false);

  const {
    feelsLike,
    precipitation,
    pressure,
    humidity,
    wind,
    clouds
  } = content[language].weather;

  const { label, moreDetails, lessDetails } = content[language].button;

  return (
    <div className='c-weather'>
      <div className='c-weather__icon'>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=''
        />
      </div>
      <div className='c-weather__details'>
        <p className='c-weather__description'>
          {weather.description.toUpperCase()}
        </p>
        <p className='c-weather__temperature'>{weather.temp}</p>

        {extendedView && (
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
        )}

        <button
          className='o-button'
          role='switch'
          aria-checked={!extendedView}
          aria-label={label}
          onClick={() => {
            setExtendedView(!extendedView);
          }}
        >
          {extendedView ? lessDetails : moreDetails}
        </button>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
