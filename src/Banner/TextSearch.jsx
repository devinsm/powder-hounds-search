import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextSearch.css';

export default class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value.trim();
    this.props.onSearchStringChange(value);
  }
  render() {
    return (
      <form className="TextSearch">
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
