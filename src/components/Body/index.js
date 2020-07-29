import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Column from '../Column';

const emptyStyle = {
  height: '20vh',
  textAlign: 'center',
};

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {/* <button>
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </button> */}

        {this.props.todos.length ? (
          <Column
            name="Scheduled"
            id="scheduled"
            todos={this.props.todos}
            toggleCompleted={this.props.toggleCompleted}
            deleteToDo={this.props.deleteToDo}
          />
        ) : (
          <p style={emptyStyle} className="neumo-element">
            Hurray Nothing to do
          </p>
        )}
        {/* <Column name="In Progress" id="progress" />
        <Column name="Completed" id="completed" /> */}
      </div>
    );
  }
}
