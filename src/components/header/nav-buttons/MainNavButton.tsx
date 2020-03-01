import React from 'react';

const MainNavButton: React.FC<{ openNav: () => void }> = ({ openNav }) => {
  return (
    <button
      className='o-button o-button--nav'
      onClick={openNav}
      role='switch'
      aria-checked='false'
      aria-label='Open Navigation'
    >
      <svg
        viewBox='0 0 24 18'
        className='o-button--nav__icon'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 0V2H24V0H0ZM0 8V10H24V8H0ZM0 16V18H24V16H0Z' />
      </svg>
    </button>
  );
};

export default MainNavButton;
