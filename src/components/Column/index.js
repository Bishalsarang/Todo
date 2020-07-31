import React, { Component } from 'react';

import Todos from '../Todos';

import './style.css';

export default class Column extends Component {
  filteredTodos = () => {
    if (this.props.displayType === 'completed') {
      return this.props.todos.filter(todo => todo.isComplete);
    }

    if (this.props.displayType === 'remaining') {
      return this.props.todos.filter(todo => !todo.isComplete);
    }

    return this.props.todos;
  };

  render() {
    const { displayType } = this.props;
    return (
      <div className="column">
        <h2 className="column__header">{displayType.toUpperCase()} TASKS</h2>

        <Todos
          todos={this.filteredTodos()}
          deleteToDo={this.props.deleteToDo}
          changePriority={this.props.changePriority}
          toggleCompleted={this.props.toggleCompleted}
        />
      </div>
    );
  }
}
