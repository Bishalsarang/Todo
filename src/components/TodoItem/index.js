import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './style.css';

let taskWrapperStyle = {
  margin: '0px auto',
  marginBottom: '10px',
  padding: '10px 0px',
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

  onDelete = () => {
    this.props.deleteToDo(this.props.todo.id);
  };

  render() {
    const { title } = this.props.todo;

    return (
      <div
        className="task-wrapper neumo-element "
        style={this.props.todo.completed ? { ...taskWrapperStyle, background: '#dddde4' } : taskWrapperStyle}
      >
        <div className="info">
          <input type="checkbox" onChange={this.onCheckBoxChanged} />
          <p style={this.props.todo.completed ? { ...titleStyle, ...completedStyle } : { ...titleStyle }}>{title} </p>
        </div>

        <div className="controls">
          <div className={'priority neumo-element ' + this.props.todo.priority}>{this.props.todo.priority}</div>
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
