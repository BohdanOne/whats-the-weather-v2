import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import higlightCurrentLink from './highlightCurrentLink';
import NavToggle from './NavToggle';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSettings = () => setIsOpen(!isOpen);

  const currentPage = useLocation().pathname;

  higlightCurrentLink(currentPage);

  return (
    <div className="Nav">
      <NavToggle handleClick={toggleSettings} isOpen={isOpen}/>
      <nav className={`Nav_linkList ${isOpen ? 'open' : ''}`}>
        <Link onClick={toggleSettings} className="Nav_link current" id="/" to="/">
          HOME
        </Link>
        <Link onClick={toggleSettings} className="Nav_link" id="/forecasts" to="/forecasts">
          FORECASTS
        </Link>
        <Link onClick={toggleSettings} className="Nav_link" id="/about" to="/about">
          ABOUT
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
