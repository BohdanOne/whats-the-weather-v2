import React from 'react';
import { ICurrentWeather } from './currentWeather.model';

interface ICurrentWeatherDetails {
  title: string;
  weather: ICurrentWeather;
}

const CurrentWeatherDetails: React.FC<ICurrentWeatherDetails> = ({
  title,
  weather
}) => {
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
      <p>{weather.main.temp} °C</p>
      {weather.rain && <p>Rain: {weather.rain['1h']}mm</p>}
      {weather.snow && <p>Rain: {weather.snow['1h']}mm</p>}
      <button>SEE MORE DETAILS</button>
    </div>
  );
};

export default CurrentWeatherDetails;
