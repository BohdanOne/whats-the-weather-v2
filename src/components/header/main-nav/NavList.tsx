import React from 'react';
import IToggleProps from '../toggleInterface';
import NavItem from './NavItem';

const NavList: React.FC<IToggleProps> = ({ handleClick, isExpanded }) => {
  const collapseNav = () => {
    if (isExpanded) {
      handleClick();
    }
  };

  return (
    <ul className={`nav__list nav__list--nav ${isExpanded ? 'nav__list--is-expanded' : ''}`}>
      <NavItem handleClick={collapseNav} path='' />
      <NavItem handleClick={collapseNav} path='forecasts' />
      <NavItem handleClick={collapseNav} path='about' />
    </ul>
  );
};

export default NavList;
