import React from 'react';
import { INavButton } from '../../../types'

const NavButton: React.FC<INavButton> = ({ handleClick, label, children }) => {
  return (
    <button
      className='o-button o-button--nav'
      onClick={handleClick}
      aria-label={label}
    >
      { children }
    </button>
  );
};

export default NavButton;
