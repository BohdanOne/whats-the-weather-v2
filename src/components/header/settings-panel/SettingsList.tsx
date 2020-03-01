import React from 'react';
import LanguageSwitch from './LanguageSwitch';
import ModeSwitch from './ModeSwitch';
import IToggleProps from '../toggleInterface';

const SettingsList: React.FC<IToggleProps> = ({ isExpanded }) => {
  return (
    <nav
      className={`nav__list nav__list--settings ${
        isExpanded ? 'nav__list--is-expanded' : ''
      }`}
    >
      <LanguageSwitch />
      <ModeSwitch />
    </nav>
  );
};

export default SettingsList;
