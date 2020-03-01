import React from 'react';
import NavItem from './NavItem';

const NavList: React.FC<{ closeNav: () => void }> = ({ closeNav }) => {
  return (
    <ul className='c-nav__list c-nav__list--nav' onClick={closeNav}>
      <NavItem path='' />
      <NavItem path='forecasts' />
      <NavItem path='about' />
    </ul>
  );
};

export default NavList;
