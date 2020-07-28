import React, { Component } from 'react';

import Column from '../Column';

export default class Body extends Component {
  render() {
    return (
      <>
        <Column name="Scheduled" id="scheduled" />
        {/* <Column name="In Progress" id="progress" />
        <Column name="Completed" id="completed" /> */}

        <input type="text" className="inputbox" placeholder="Add a task" />
      </>
    );
  }
}
