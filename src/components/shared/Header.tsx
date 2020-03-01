import React from 'react';

const Header: React.FC<{ title: string}> = ({ title }) => (
  <header>
    <h1 className="o-title">{ title }</h1>
  </header>
);

export default Header;