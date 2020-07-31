import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomNavButton = ({ handleClick, visibility, icon }) => {
  return (
    <button
      className="bottom-nav__button neumo-element"
      onClick={() => handleClick(visibility)}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  );
};

export default BottomNavButton;
