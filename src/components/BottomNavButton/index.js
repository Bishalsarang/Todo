import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const BottomNavButton = ({ handleClick, visibility, icon }) => {
  return (
    <button
      onClick={() => handleClick(visibility)}
      className="bottom-nav__button neumo-element"
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  );
};

export default BottomNavButton;
