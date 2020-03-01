import React from 'react';
import LanguageSwitch from './LanguageSwitch';
import ModeSwitch from './ModeSwitch';

const SettingsList: React.FC = () => {
  return (
    <nav className='c-nav__list c-nav__list--settings'>
      <LanguageSwitch />
      <ModeSwitch />
    </nav>
  );
};

export default SettingsList;
