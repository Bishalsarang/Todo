import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title) {
      this.props.addToDo({
        id: uuidv4(),
        title: this.state.title,
        description: 'very difficult',
        completed: false,
        priority: 'low',
      });
    }

    this.setState({
      title: '',
    });
  };

  addItem = e => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ textAlign: 'center' }}>
        <input type="text" placeholder="Add Todo" value={this.state.title} onChange={this.addItem} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
