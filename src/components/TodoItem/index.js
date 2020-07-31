import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isComplete: this.props.todo.isComplete,
    };
  }

  onCheckBoxChanged = e => {
    this.props.toggleCompleted(this.props.todo.id);
    this.setState({
      isComplete: !this.state.isComplete,
    });
  };

  onDelete = () => {
    this.props.deleteToDo(this.props.todo.id);
  };

  handlePriority = () => {
    this.props.changePriority(this.props.todo.id);
  };

  render() {
    const { isComplete } = this.state;
    const { title, priority } = this.props.todo;

    return (
      <div
        className={'task neumo-element ' + (isComplete ? 'task--complete' : '')}
      >
        <div className="info">
          <div className="check" onClick={this.onCheckBoxChanged}>
            <div className={'check__icon ' + (isComplete ? '' : 'hide')}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <p className={'task__title ' + (isComplete ? 'task--complete' : '')}>
            {title}
          </p>
        </div>

        <div className="task__controls">
          <div
            className={`task__priority neumo-element ${priority}`}
            onClick={this.handlePriority}
          >
            {priority}
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
