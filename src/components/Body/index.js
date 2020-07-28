import React, { Component } from 'react';

import Column from '../Column';

export default class Body extends Component {
  render() {
    return (
      <>
        <Column name="Scheduled" />
        <Column name="In Progress" />
        <Column name="Completed" />
      </>
    );
  }
}
