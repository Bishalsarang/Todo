import React, { Component } from 'react';
import Todos from '../Todos';

import './style.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, todos } = this.props;
    return (
      <div className="column" id={id}>
        <h2 className="column__header">{name}</h2>
        <Todos todos={todos} toggleCompleted={this.props.toggleCompleted} />
      </div>
    );
  }
}
