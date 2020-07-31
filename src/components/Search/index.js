import React, { Component } from 'react';

import './style.css';

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
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.setSearch}
          className="search-form__input"
        />
      </form>
    );
  }
}
