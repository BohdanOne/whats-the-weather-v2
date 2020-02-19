import React from 'react';

const Header: React.FC<{ title: string}> = ({ title }) => (
  <header>
    <h1>{ title }</h1>
  </header>
);

export default Header;