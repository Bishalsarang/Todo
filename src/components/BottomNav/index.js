import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default class BottomNav extends Component {
  handleClick = displayType => {
    this.props.handleDisplayType(displayType);
  };

  render() {
    return (
      <div className="bottom-nav">
        <div className="bottom-nav__wrapper container">
          <div>
            <button className="bottom-nav__button neumo-element" onClick={() => this.handleClick('all')}>
              <FontAwesomeIcon icon={faClipboardList} size="2x" />
            </button>
            <span>All</span>
          </div>
          <div>
            <button className="bottom-nav__button neumo-element" onClick={() => this.handleClick('completed')}>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" />
            </button>
            <span>Completed</span>
          </div>

          <div>
            <button className="bottom-nav__button neumo-element" onClick={() => this.handleClick('remaining')}>
              <FontAwesomeIcon icon={faClipboardList} size="2x" />
            </button>
            <span>Remaining</span>
          </div>
        </div>
      </div>
    );
  }
}
