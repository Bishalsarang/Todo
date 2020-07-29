import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const taskWrapperStyle = {
  border: '1px solid gray',
  display: 'inline-block',
  width: '100%',
  marginBottom: '10px',
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
    // Change State of Parent
    this.props.toggleCompleted(this.props.todo.id);
    this.setState({
      completed: !this.state.completed,
    });
  };

  onDelete = e => {
    this.props.deleteToDo(this.props.todo.id);
    console.log('Dlete');
  };

  render() {
    console.log(this.state);
    const { title } = this.props.todo;
    console.log(this.props.todo.completed);
    return (
      <div className="task-wrapper clearfix" style={taskWrapperStyle}>
        <div className="info">
          <input type="checkbox" onChange={this.onCheckBoxChanged} />
          <p style={this.props.todo.completed ? { ...titleStyle, ...completedStyle } : { ...titleStyle }}>{title} </p>
        </div>

        <div className="controls">
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={this.onDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    );
  }
}
