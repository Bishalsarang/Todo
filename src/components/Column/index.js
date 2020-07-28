import React, { Component } from 'react';
import './style.css';

export default class Column extends Component {
  render() {
    {
      return (
        <div className="column" id={this.props.id}>
          <h2 className="column__header">{this.props.name}</h2>
        </div>
      );
    }
  }
}
