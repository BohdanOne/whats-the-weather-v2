import React, { useState } from 'react';
import { ICurrentWeatherDetails } from '../../types';
import content from '../../contents/currentWeatherContent';
import windDirection from '../../helpers/windDirection';

const CurrentWeatherDetails: React.FC<ICurrentWeatherDetails> = ({
  weather,
  language
}) => {
  const [extendedView, setExtendedView] = useState<boolean>(false);

  const {
    feelsLike,
    rain,
    snow,
    pressure,
    humidity,
    visibility,
    wind,
    clouds
  } = content[language].weather;

  const { label, moreDetails, lessDetails } = content[language].button;

  return (
    <div className='c-weather'>
      <div className='c-weather__icon'>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=''
        />
      </div>
      <div className='c-weather__details'>
        <p className='c-weather__description'>
          {weather.weather[0].description.toUpperCase()}
        </p>
        <p className='c-weather__temperature'>
          {weather.main.temp.toFixed(1)}°C
        </p>

        {extendedView && (
          <ul className='c-weather__full'>
            <li className='c-weather__item'>
              {feelsLike}: {weather.main.feels_like.toFixed(1)}°C
            </li>
            <li className='c-weather__item'>
              {weather.main.temp_min && (
                <span>min: {weather.main.temp_min.toFixed(1)}°C</span>
              )}
              {weather.main.temp_max && (
                <span> max: {weather.main.temp_max.toFixed(1)}°C</span>
              )}
            </li>
            {weather.rain && (
              <li className='c-weather__item'>
                {rain}: {weather.rain['1h']}mm
              </li>
            )}
            {weather.snow && (
              <li className='c-weather__item'>
                {snow}: {weather.snow['1h']}mm
              </li>
            )}
            {weather.main.pressure && (
              <li className='c-weather__item'>
                {pressure}: {weather.main.pressure}hPa
              </li>
            )}
            {weather.main.humidity && (
              <li className='c-weather__item'>
                {humidity}: {weather.main.humidity}%
              </li>
            )}
            {weather.visibility && (
              <li className='c-weather__item'>
                {visibility}: {weather.visibility}m
              </li>
            )}
            {weather.wind && weather.wind.deg && (
              <li className='c-weather__item'>
                {wind}: {weather.wind.speed}m/s{' '}
                {windDirection(weather.wind.deg)}
              </li>
            )}
            {weather.clouds && (
              <li className='c-weather__item'>
                {clouds}: {weather.clouds.all}%
              </li>
            )}
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
