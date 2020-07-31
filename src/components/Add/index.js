import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './style.css';

class Add extends Component {
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
        priority: 'low',
        isComplete: false,
        title: this.state.title,
        description: 'This is a description',
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
      <form onSubmit={this.onSubmit} className="add-form">
        <input
          type="text"
          placeholder="Add Todo"
          onChange={this.addItem}
          value={this.state.title}
          className="add-form__input neumo-element"
        />
        <input className="neumo-element hide" type="submit" value="submit" />
      </form>
    );
  }
}

export default Add;
