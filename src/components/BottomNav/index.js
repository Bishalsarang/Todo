import React, { Component } from 'react';
import {
  faClipboardList,
  faCheckSquare,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import BottomNavButton from '../BottomNavButton';

import './style.css';

export default class BottomNav extends Component {
  handleClick = visibility => {
    this.props.handleDisplayType(visibility);
  };

  render() {
    return (
      <div className="bottom-nav">
        <div className="bottom-nav__wrapper container">
          <div>
            <BottomNavButton
              visibility="all"
              handleClick={this.handleClick}
              icon={faClipboardList}
            />
            <span>All</span>
          </div>

          <div>
            <BottomNavButton
              visibility="completed"
              handleClick={this.handleClick}
              icon={faCheckSquare}
            />
            <span>Completed</span>
          </div>

          <div>
            <BottomNavButton
              visibility="remaining"
              handleClick={this.handleClick}
              icon={faTimes}
            />
            <span>Remaining</span>
          </div>
        </div>
      </div>
    );
  }
}
