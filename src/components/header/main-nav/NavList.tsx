import React from 'react';
import { INavWithLanguage } from '../../../types';
import NavItem from './NavItem';
import content from '../../../contents/headerContent';

const NavList: React.FC<INavWithLanguage> = ({ handleClick, language }) => {

  return (
    <ul className='c-nav__list c-nav__list--nav' onClick={handleClick}>
      <NavItem path='' />
      <NavItem path={`${content[language].path.forecasts}`} />
      <NavItem path={`${content[language].path.about}`} />
    </ul>
  );
};

export default NavList;
