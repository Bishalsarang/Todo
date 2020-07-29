import React, { Component } from 'react';
import './style.css';

export default class Modal extends Component {
  render() {
    return (
      <div class="show-shape-info hide">
        <h3 class="show-shape-info-header">Shape Info</h3>
        <span class="shape-name"></span>
        <div class="show-shape-info-content"></div>
      </div>
    );
  }
}
