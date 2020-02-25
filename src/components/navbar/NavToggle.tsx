import React from 'react';
import IToggleProps from './toggleInterface';

const NavToggle: React.FC<IToggleProps> = ({ handleClick, isOpen }) => {
  const renderToggle = () => {
    if (isOpen) {
      return (
        <button
          className="Navbar_button Navbar_button___right"
          onClick={handleClick}
          role="switch"
          aria-checked="true"
          aria-label="Nav Toggle"
        >
          <svg
            viewBox="0 0 26 26"
            className="Navbar_button_icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 0C5.83203 0 0 5.83203 0 13C0 20.168 5.83203 26 13 26C20.168 26 26 20.168 26 13C26 5.83203 20.168 0 13 0ZM13 2C19.0859 2 24 6.91406 24 13C24 19.0859 19.0859 24 13 24C6.91406 24 2 19.0859 2 13C2 6.91406 6.91406 2 13 2ZM9.21875 7.78125L7.78125 9.21875L11.5625 13L7.78125 16.7812L9.21875 18.2188L13 14.4375L16.7812 18.2188L18.2188 16.7812L14.4375 13L18.2188 9.21875L16.7812 7.78125L13 11.5625L9.21875 7.78125Z" />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="Navbar_button Navbar_button___right"
          onClick={handleClick}
          role="switch"
          aria-checked="false"
          aria-label="Nav Toggle"
        >
          <svg
            viewBox="0 0 24 18"
            className="Navbar_button_icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0V2H24V0H0ZM0 8V10H24V8H0ZM0 16V18H24V16H0Z" />
          </svg>
        </button>
      );
    }
  };

  return renderToggle();
};

export default NavToggle;