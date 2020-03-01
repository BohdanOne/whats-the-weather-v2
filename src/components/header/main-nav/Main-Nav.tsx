import React, { useState } from 'react';
import NavToggle from './NavToggle';
import NavList from './NavList'

const Nav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className='main-nav'>
      <NavToggle handleClick={()=>setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
      <NavList handleClick={()=>setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
    </nav>
  );
};

export default Nav;
