import React, { Component } from 'react';

const taskWrapperStyle = {
  border: '1px solid gray',
  display: 'inline-block',
  width: '100%',
  margin: '10px',
  padding: '10px 0px',
  WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
};

const titleStyle = {
  display: 'inline-block',
};

const completedStyle = {
  textDecoration: 'line-through',
};

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.todo.completed,
    };
  }

  onCheckBoxChanged = e => {
    this.props.toggleCompleted(this.props.todo.id);

    this.setState({
      completed: !this.state.completed,
    });
  };

  render() {
    console.log(this.state);
    const { title } = this.props.todo;
    console.log(this.props.todo.completed);
    return (
      <div className="task-wrapper" style={taskWrapperStyle}>
        <input type="checkbox" onChange={this.onCheckBoxChanged} />
        <p style={this.props.todo.completed ? { ...titleStyle, ...completedStyle } : { ...titleStyle }}>{title} </p>
      </div>
    );
  }
}
