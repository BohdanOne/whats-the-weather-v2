import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import NavToggle from '../nav-buttons/MainNavButton';
import NavList from './NavList';
import CloseButton from '../nav-buttons/CloseButton';

const Nav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <nav
      className={`c-nav c-nav--main ${isExpanded ? 'c-nav--is-expanded' : ''}`}
    >
      {isExpanded ? (
        <CloseButton handleClick={() => setIsExpanded(false)} language={language} />
      ) : (
        <NavToggle handleClick={() => setIsExpanded(true)} language={language}/>
      )}
      <NavList handleClick={() => setIsExpanded(false)} language={language} />
    </nav>
  );
};

export default Nav;
