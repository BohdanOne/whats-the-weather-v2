import React from 'react';
import content from '../../contents/aboutContent';
import { IAboutDetailsProps } from '../../types';

const AboutDetails: React.FC<IAboutDetailsProps> = ({ language }) => {
  return (
    <>
      <p className='c-about__text'>
        {content[language].apiInfo.location}
        <a className='c-about__link' href='https://opencagedata.com/'>
          OpenCage Geocoder
        </a>
      </p>
      <p className='c-about__text'>
        {content[language].apiInfo.weather}
        <a className='c-about__link' href='https://openweathermap.org/'>
          OpenWeather
        </a>
      </p>
      <p className='c-about__text'>{content[language].apiInfo.settings}</p>
      <p className='c-about__text'>
        {content[language].apiInfo.author}
        <a className='c-about__link' href='https://bohdanone.github.io/'>
          Bohdan Imiela Portfolio
        </a>
      </p>
    </>
  );
};

export default AboutDetails;
