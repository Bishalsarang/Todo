import React, { Component } from 'react';

import Column from '../Column';

export default class Body extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <>
        <Column name="Scheduled" id="scheduled" todos={this.props.todos} />
        {/* <Column name="In Progress" id="progress" />
        <Column name="Completed" id="completed" /> */}
      </>
    );
  }
}
