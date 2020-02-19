import React from 'react';

interface ICurrentWeather {
  location: string;
}

const CurrentWeather: React.FC<ICurrentWeather> = ({location}) => {
  return <div>Current Weather</div>;
};

export default CurrentWeather;