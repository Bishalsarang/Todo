import React, { Component } from 'react';
import Column from '../Column';

const emptyStyle = {
  height: '20vh',
  textAlign: 'center',
};

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        {this.props.todos.length ? (
          <Column
            todos={this.props.todos}
            toggleCompleted={this.props.toggleCompleted}
            deleteToDo={this.props.deleteToDo}
            changePriority={this.props.changePriority}
            displayType={this.props.displayType}
          />
        ) : (
          <p style={emptyStyle} className="neumo-element">
            Hurray Nothing to do
          </p>
        )}
      </div>
    );
  }
}
