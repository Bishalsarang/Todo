import React, { Component } from 'react';

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.title);
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
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Add Todo" value={this.state.title} onChange={this.addItem} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
