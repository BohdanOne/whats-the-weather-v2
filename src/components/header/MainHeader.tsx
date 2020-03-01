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
    </header>
  );
};

export default MainHeader;