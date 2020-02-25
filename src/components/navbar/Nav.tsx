import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavToggle from './NavToggle';

const Nav: React.FC = () => {
  const currentPage = useLocation().pathname;

  const higlightCurrentLink = () => {
    const links = document.querySelectorAll('.Nav_link');
    links.forEach(link => {
      link.id === currentPage
        ? link.classList.add('current')
        : link.classList.remove('current');
    });
  };

  higlightCurrentLink();

  return (
    <>
      <NavToggle />
      <nav className="Nav">
        <Link className="Nav_link current" id="/" to="/">
          HOME
        </Link>
        <Link className="Nav_link" id="/forecasts" to="/forecasts">
          FORECASTS
        </Link>
        <Link className="Nav_link" id="/about" to="/about">
          ABOUT
        </Link>
      </nav>
    </>
  );
};

export default Nav;
