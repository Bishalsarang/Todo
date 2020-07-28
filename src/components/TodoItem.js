import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p
        style={{
          textAlign: 'left',
          padding: '10px',
        }}
      >
        Hello
      </p>
    );
  }
}
