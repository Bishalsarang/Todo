import React, { Component } from 'react';

import Column from '../Column';

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.todos.length ? (
          <Column
            name="Scheduled"
            id="scheduled"
            todos={this.props.todos}
            toggleCompleted={this.props.toggleCompleted}
            deleteToDo={this.props.deleteToDo}
          />
        ) : (
          <p style={{ background: 'green', color: 'white', height: '20vh' }}>Hurray Nothing to do</p>
        )}
        {/* <Column name="In Progress" id="progress" />
        <Column name="Completed" id="completed" /> */}
      </>
    );
  }
}
