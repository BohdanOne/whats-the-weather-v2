import React, { useState } from 'react';
import { ICurrentWeather } from './currentWeather.model';
import content from './currentWeatherDisplayContent';
import windDirection from './windDirection';

interface ICurrentWeatherDetails {
  title: string;
  weather: ICurrentWeather;
  language: string;
}

const CurrentWeatherDetails: React.FC<ICurrentWeatherDetails> = ({
  title,
  weather,
  language
}) => {
  const [extendedView, setExtendedView] = useState<boolean>(false);

  const { rain, snow, moreDetails, lessDetails, feelsLike, pressure, humidity, visibility, wind, clouds } =
    language === 'en' ? content[0] : content[1];

  return (
    <div>
      <h2>
        {title}
        <br />
        {weather.name.toUpperCase()}
      </h2>
      <p>{weather.weather[0].description.toUpperCase()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>{weather.main.temp.toFixed(1)}°C</p>

      <button
        onClick={() => {
          setExtendedView(!extendedView);
        }}
      >
        {extendedView ? lessDetails : moreDetails}
      </button>
      {extendedView && (
        <>
          <ul>
            <li>
              {feelsLike}: {weather.main.feels_like.toFixed(1)}°C
            </li>
            <li>
              {weather.main.temp_min && (
                <span>min: {weather.main.temp_min.toFixed(1)}°C</span>
              )}
              {weather.main.temp_max && (
                <span> max: {weather.main.temp_max.toFixed(1)}°C</span>
              )}
            </li>
            {weather.rain && <li>{rain}: {weather.rain['1h']}mm</li>}
            {weather.snow && <li>{snow}: {weather.snow['1h']}mm</li>}
            {weather.main.pressure && <li>{pressure}: {weather.main.pressure}hPa</li>}
            {weather.main.humidity && <li>{humidity}: {weather.main.humidity}%</li>}
            {weather.visibility && <li>{visibility}: {weather.visibility}m</li>}
            {(weather.wind && weather.wind.deg) && <li>{wind}: {weather.wind.speed}m/s {windDirection(weather.wind.deg)}</li>}
            {weather.clouds && <li>{clouds}: {weather.clouds.all}%</li>}
          </ul>
        </>
      )}
    </div>
  );
};

export default CurrentWeatherDetails;
