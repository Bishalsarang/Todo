import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    console.log('From Todos', props);
  }

  render() {
    return this.props.todos.map(todo => <h3> {todo.title} </h3>);
  }
}
