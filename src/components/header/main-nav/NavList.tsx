import React from 'react';
import { INavClickable } from '../../../types';
import NavItem from './NavItem';
import content from '../../../contents/headerContent';

const NavList: React.FC<INavClickable> = ({ handleClick, language }) => {

  return (
    <ul className='c-nav__list c-nav__list--nav' onClick={handleClick}>
      <NavItem path='' />
      <NavItem path={`${content[language].path.forecasts}`} />
      <NavItem path={`${content[language].path.about}`} />
    </ul>
  );
};

export default NavList;
