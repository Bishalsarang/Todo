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
              icon={faClipboardList}
              handleClick={this.handleClick}
            />
            <span>All</span>
          </div>

          <div>
            <BottomNavButton
              icon={faCheckSquare}
              visibility="completed"
              handleClick={this.handleClick}
            />
            <span>Completed</span>
          </div>

          <div>
            <BottomNavButton
              icon={faTimes}
              visibility="remaining"
              handleClick={this.handleClick}
            />
            <span>Remaining</span>
          </div>
        </div>
      </div>
    );
  }
}
