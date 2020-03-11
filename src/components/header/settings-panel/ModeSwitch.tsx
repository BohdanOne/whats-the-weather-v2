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

  return (
    <div className='c-nav__item'>
      <p>{content[language].switch.mode}</p>
      <label htmlFor='light'>
        <span role='img' aria-label={content[language].switch.light}>
          {' '}
          ☼{' '}
        </span>
      </label>
      <input
        type='radio'
        name='mode'
        id='light'
        value='light'
        defaultChecked={mode === Modes.light}
        onChange={() => toggleMode(Modes.light)}
      />
      <label htmlFor='dark'>
        <span role='img' aria-label={content[language].switch.dark}>
          {' '}
          ☾{' '}
        </span>
      </label>
      <input
        type='radio'
        name='mode'
        id='dark'
        value='dark'
        defaultChecked={mode === Modes.dark}
        onChange={() => toggleMode(Modes.dark)}
      />
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
