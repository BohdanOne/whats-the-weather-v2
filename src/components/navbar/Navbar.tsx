import React from 'react';
import SettingsPanel from './SettingsPanel';
import NavbarIcon from './NavbarIcon';
import Nav from './Nav';

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <SettingsPanel />
      <NavbarIcon />
      <Nav />
    </div>
  );
};

export default Navbar;