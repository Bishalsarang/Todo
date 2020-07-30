import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default class BottomNav extends Component {
  handleClick = () => {
    console.log('Handle');
  };
  render() {
    return (
      <div className="bottom-nav">
        <div className="bottom-nav__wrapper container">
          <div>
            <button className="bottom-nav__button neumo-element" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faClipboardList} size="2x" />
            </button>
            <span>All</span>
          </div>
          <div>
            <button className="bottom-nav__button neumo-element">
              <FontAwesomeIcon icon={faCheckSquare} size="2x" />
            </button>
            <span>Completed</span>
          </div>

          <div>
            <button className="bottom-nav__button neumo-element">
              <FontAwesomeIcon icon={faClipboardList} size="2x" />
            </button>
            <span>Remaining</span>
          </div>
        </div>
      </div>
    );
  }
}
