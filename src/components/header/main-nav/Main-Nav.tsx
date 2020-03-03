import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import NavList from './NavList';
import NavButton from '../nav-buttons/NavButton';
import CloseIcon from '../nav-buttons/CloseIcon';
import NavIcon from '../nav-buttons/NavIcon';
import content from '../../../contents/headerContent';

const Nav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <nav
      className={`c-nav c-nav--main ${isExpanded ? 'c-nav--is-expanded' : ''}`}
    >
      {isExpanded ? (
        <NavButton
          handleClick={() => setIsExpanded(false)}
          label={content[language].button.close}
        >
          <CloseIcon />
        </NavButton>
      ) : (
        <NavButton
          handleClick={() => setIsExpanded(true)}
          label={content[language].button.nav}
        >
          <NavIcon />
        </NavButton>
      )}
      <NavList handleClick={() => setIsExpanded(false)} language={language} />
    </nav>
  );
};

export default Nav;
