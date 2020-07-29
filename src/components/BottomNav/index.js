import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default class BottomNav extends Component {
  render() {
    return (
      <div className="bottom-nav">
        <div className="bottom-nav__wrapper container">
          <button>
            <FontAwesomeIcon icon={faClipboardList} size="2x" />
          </button>

          <button>
            <FontAwesomeIcon icon={faCheckSquare} size="2x" />
          </button>

          <button>
            <FontAwesomeIcon icon={faClipboardList} size="2x" />
          </button>
        </div>
      </div>
    );
  }
}
