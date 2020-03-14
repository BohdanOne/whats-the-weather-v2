import React, { useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { Languages, TChangeLanguage } from '../../../types';
import content from '../../../contents/headerContent';

const CHANGE_LANGUAGE: TChangeLanguage = 'CHANGE_LANGUAGE';

const LanguageSwitch: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className='c-switch'>
      <p className='c-switch__name'>{content[language].switch.language}</p>
      <div className="c-switch__container">


      <input
        className='c-switch__input'
        type='radio'
        name='language'
        id='en'
        value='en'
        checked={language === Languages.en}
        onChange={() => {
          changeLanguage!({ type: CHANGE_LANGUAGE, payload: Languages.en });
        }}
      />
      <label className="c-switch__label" htmlFor='en'>
        <span className="c-switch__flag" role='img' aria-label='English'>
          {' '}
          🇬🇧{' '}
        </span>
      </label>
      <input
        className="c-switch__input"
        type='radio'
        name='language'
        id='pl'
        value='pl'
        checked={language === Languages.pl}
        onChange={() => {
          changeLanguage!({ type: CHANGE_LANGUAGE, payload: Languages.pl });
        }}
      />
      <label className="c-switch__label" htmlFor='pl'>
        <span className="c-switch__flag" role='img' aria-label='Język polski'>
          {' '}
          🇵🇱{' '}
        </span>
        </label>
      </div>
    </div>
  );
};

export default LanguageSwitch;
