import React, { useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { ModeContext } from '../../../providers/ModeProvider';
import content from '../../../contents/headerContent';
import { Modes, TChangeMode } from '../../../types';

const CHANGE_MODE: TChangeMode = 'CHANGE_MODE';

const ModeSwitch: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { mode, changeMode } = useContext(ModeContext);

  const toggleMode = (mode: Modes) => {
    changeMode && changeMode({ type: CHANGE_MODE, payload: mode });
    updateUI(mode);
  };

  updateUI(mode);

  return (
    <div className='c-switch'>
      <p className='c-switch__name'>{content[language].switch.mode}</p>
      <div className='c-switch__container'>
        <input
          className='c-switch__input'
          type='radio'
          name='mode'
          id='light'
          value='light'
          defaultChecked={mode === Modes.light}
          onChange={() => toggleMode(Modes.light)}
        />
        <label className='c-switch__label' htmlFor='light'>
          <svg
            className='c-switch__icon'
            aria-label={content[language].switch.light}
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15 3V8H17V3H15ZM7.5 6.09375L6.09375 7.5L9.625 11.0625L11.0625 9.625L7.5 6.09375ZM24.5 6.09375L20.9375 9.625L22.375 11.0625L25.9062 7.5L24.5 6.09375ZM16 9C12.1445 9 9 12.1445 9 16C9 19.8555 12.1445 23 16 23C19.8555 23 23 19.8555 23 16C23 12.1445 19.8555 9 16 9ZM16 11C18.7734 11 21 13.2266 21 16C21 18.7734 18.7734 21 16 21C13.2266 21 11 18.7734 11 16C11 13.2266 13.2266 11 16 11ZM3 15V17H8V15H3ZM24 15V17H29V15H24ZM9.625 20.9375L6.09375 24.5L7.5 25.9062L11.0625 22.375L9.625 20.9375ZM22.375 20.9375L20.9375 22.375L24.5 25.9062L25.9062 24.5L22.375 20.9375ZM15 24V29H17V24H15Z' />
          </svg>
        </label>

        <input
          className='c-switch__input'
          type='radio'
          name='mode'
          id='dark'
          value='dark'
          defaultChecked={mode === Modes.dark}
          onChange={() => toggleMode(Modes.dark)}
        />
        <label className='c-switch__label' htmlFor='dark'>
          <svg
            className='c-switch__icon'
            aria-label={content[language].switch.light}
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M20.2812 7.9375L18.625 8C13.2812 8.19141 9 12.5781 9 17.9688C9 23.4805 13.4883 27.9688 19 27.9688C24.3906 27.9688 28.7773 23.6875 28.9688 18.3438L29.0312 16.7188L27.5625 17.4062C26.7812 17.7773 25.9141 17.9688 25 17.9688C21.6758 17.9688 19 15.293 19 11.9688C19 11.0547 19.2227 10.2188 19.5938 9.4375L20.2812 7.9375ZM17.375 10.3125C17.25 10.8672 17 11.375 17 11.9688C17 16.375 20.5938 19.9688 25 19.9688C25.6055 19.9688 26.1211 19.7227 26.6875 19.5938C25.9258 23.2188 22.8594 25.9688 19 25.9688C14.5703 25.9688 11 22.3984 11 17.9688C11 14.1172 13.7578 11.082 17.375 10.3125Z' />
          </svg>
        </label>
      </div>
    </div>
  );
};

const updateUI = (mode: Modes) => {
  const rootStyle = document.documentElement.style;
  if (mode === Modes.light) {
    rootStyle.setProperty('--color-main', '#48484a');
    rootStyle.setProperty('--color-main-light', 'rgba(72, 72, 74, 0.5)');
    rootStyle.setProperty('--color-opposite', '#f2f2f1');
  } else {
    rootStyle.setProperty('--color-main', '#f2f2f1');
    rootStyle.setProperty('--color-main-light', 'rgba(242, 242, 241, 0.5)');
    rootStyle.setProperty('--color-opposite', '#48484a');
  }
};

export default ModeSwitch;
