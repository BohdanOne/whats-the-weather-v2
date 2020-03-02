import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import content from '../../../contents/headerContent';

const ModeSwitch: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const DEFAULT_MODE = isDark ? 'dark' : 'light';

  useEffect(() => {
    toggleMode(DEFAULT_MODE);
  });

  return (
    <div className="c-nav__item">
      <p>{content[language].switch.mode}</p>
      <label htmlFor="light">
        <span role="img" aria-label="Sun">
          {' '}
          ☼{' '}
        </span>
      </label>
      <input
        type="radio"
        name="mode"
        id="light"
        value="light"
        defaultChecked={DEFAULT_MODE === 'light'}
        onChange={() => toggleMode('light')}
      />
      <label htmlFor="dark">
        <span role="img" aria-label="Moon">
          {' '}
          ☾{' '}
        </span>
      </label>
      <input
        type="radio"
        name="mode"
        id="dark"
        value="dark"
        defaultChecked={DEFAULT_MODE === 'dark'}
        onChange={() => toggleMode('dark')}
      />
    </div>
  );
};

const toggleMode = (mode: 'dark' | 'light') => {
  const rootStyle = document.documentElement.style;
    if (mode === 'light') {
      rootStyle.setProperty('--color-main', '#48484a');
      rootStyle.setProperty('--color-main-light', 'rgba(72, 72, 74, 0.5)');
      rootStyle.setProperty('--color-opposite', '#f2f2f1');
    } else {
      rootStyle.setProperty('--color-main', '#f2f2f1');
      rootStyle.setProperty('--color-main-light', 'rgba(242, 242, 241, 0.5)');
      rootStyle.setProperty('--color-opposite', '#48484a');
    }
}

export default ModeSwitch;
