import React, { Component } from 'react';
import TodoItem from '../TodoItem';

export default class Todos extends Component {
  render() {
    const { toggleCompleted, deleteToDo, changePriority } = this.props;

    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteToDo={deleteToDo}
        changePriority={changePriority}
        toggleCompleted={toggleCompleted}
      />
    ));
  }
}
