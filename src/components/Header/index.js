import React from 'react';

import './style.css';

/**
 *
 * @param {string} props
 */
const Header = ({ title }) => {
  return (
    <div>
      <h1 className="header">{title}</h1>
    </div>
  );
};

export default Header;
