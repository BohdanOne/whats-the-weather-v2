import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem: React.FC<{ path: string}> = ({ path }) => {
  const currentPage = useLocation().pathname;
  const textContent = path || 'start';
  const isActive = currentPage.slice(1) === path;

  return (
    <li className={`c-nav__item ${isActive && 'c-nav__item--is-active'}`} id={path}>
      <Link to={`/${path}`} >
        {textContent.toUpperCase()}
      </Link>
    </li>
  );
};

export default NavItem;
