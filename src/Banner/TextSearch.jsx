import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextSearch.css';

export default class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchStringChange(event.target.value);
  }

  /**
   * Prevents the submit event from causing a page reload.
  */
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="TextSearch form-group" onSubmit={this.handleSubmit}>
        <label htmlFor="propertySearchBox">
          What are you looking for?
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchString}
          onChange={this.handleChange}
          className="form-control"
          id="propertySearchBox"
        />
      </form>
    );
  }
}

TextSearch.propTypes = {
  searchString: PropTypes.string.isRequired,
  onSearchStringChange: PropTypes.func.isRequired
};
