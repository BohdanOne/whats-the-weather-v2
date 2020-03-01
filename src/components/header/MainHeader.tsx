import React from 'react';
import SettingsPanel from './settings-panel/SettingsPanel';
import HeaderIcon from './HeaderIcon';
import MainNav from './main-nav/Main-Nav';

const MainHeader: React.FC = () => {
  return (
    <header className="l-header">
      <SettingsPanel />
      <HeaderIcon />
      <MainNav />
      <h1 className="l-header__title">What's the Weather</h1>
    </header>
  );
};

export default MainHeader;