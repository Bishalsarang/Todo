import React, { Component } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.title);
    this.props.addToDo({
      id: 3,
      title: this.state.title,
      description: 'very difficult',
      priority: 'low',
    });

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
