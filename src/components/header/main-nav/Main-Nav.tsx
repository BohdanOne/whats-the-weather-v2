import React, { useState } from 'react';
import NavToggle from '../nav-buttons/MainNavButton';
import NavList from './NavList';
import CloseButton from '../nav-buttons/CloseButton';

const Nav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav
      className={`c-nav c-nav--main ${isExpanded ? 'c-nav--is-expanded' : ''}`}
    >
      {isExpanded ? (
        <CloseButton closeNav={() => setIsExpanded(false)} />
      ) : (
        <NavToggle openNav={() => setIsExpanded(true)} />
      )}
      <NavList closeNav={() => setIsExpanded(false)} />
    </nav>
  );
};

export default Nav;
