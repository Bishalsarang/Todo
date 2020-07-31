import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

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
      isComplete: this.props.todo.isComplete,
    };
  }

  onCheckBoxChanged = e => {
    this.props.toggleCompleted(this.props.todo.id);
    this.setState(
      {
        isComplete: !this.state.isComplete,
      } // Change State of Parent
    );
  };

  onDelete = () => {
    this.props.deleteToDo(this.props.todo.id);
  };

  handlePriority = () => {
    this.props.changePriority(this.props.todo.id);
  };

  render() {
    const { title } = this.props.todo;

    return (
      <div
        className="task-wrapper neumo-element "
        style={
          this.state.isComplete
            ? { ...taskWrapperStyle, background: '#dddde4' }
            : taskWrapperStyle
        }
      >
        <div className="info">
          <div className="check" onClick={this.onCheckBoxChanged}>
            <div
              className={
                this.state.isComplete ? 'check__icon' : 'check__icon hide'
              }
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <p
            style={
              this.state.isComplete
                ? { ...titleStyle, ...completedStyle }
                : { ...titleStyle }
            }
          >
            {title}{' '}
          </p>
        </div>

        <div className="controls">
          <div
            className={`priority neumo-element ${this.props.todo.priority}`}
            onClick={this.handlePriority}
            style={{ cursor: 'pointer' }}
          >
            {this.props.todo.priority}
          </div>
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
