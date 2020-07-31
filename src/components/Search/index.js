import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  setSearch = e => {
    this.props.searchToDo(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchToDo(this.state.search);
  };

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.search}
          placeholder="Search"
          onChange={this.setSearch}
        />
      </form>
    );
  }
}
