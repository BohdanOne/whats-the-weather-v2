import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface INavItemInterface {
  path: string;
  handleClick: () => void;
}

const NavItem: React.FC<INavItemInterface> = ({ path, handleClick }) => {
  const currentPage = useLocation().pathname;
  const textContent = path || 'home';
  const isActive = currentPage.slice(1) === path;

  return (
    <li className={`nav__item ${isActive && 'nav__item--is-active'}`} id={path}>
      <Link to={`/${path}`} onClick={handleClick}>
        {textContent.toUpperCase()}
      </Link>
    </li>
  );
};

export default NavItem;
