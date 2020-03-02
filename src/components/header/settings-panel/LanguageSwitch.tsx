import React, { useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { Languages } from '../../../types';
import content from '../../../contents/headerContent';

const LanguageSwitch: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className='c-nav__item'>
      <p>{content[language].switch.language}</p>
      <label htmlFor='en'>
        <span role='img' aria-label='Flag: United Kingdom'>
          {' '}
          🇬🇧{' '}
        </span>
      </label>
      <input
        type='radio'
        name='language'
        id='en'
        value='en'
        checked={language === 'en'}
        onChange={() => {
          changeLanguage!({ type: 'CHANGE_LANGUAGE', payload: Languages.en });
        }}
      />
      <label htmlFor='pl'>
        <span role='img' aria-label='Flag: Poland'>
          {' '}
          🇵🇱{' '}
        </span>
      </label>
      <input
        type='radio'
        name='language'
        id='pl'
        value='pl'
        checked={language === 'pl'}
        onChange={() => {
          changeLanguage!({ type: 'CHANGE_LANGUAGE', payload: Languages.pl });
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
