import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextSearch.css';

export default class TextSearch extends Component {
  render() {
    return (
      <form className="TextSearch">
        <label htmlFor="propertySearchBox">
          What are you looking for?
        </label>
        <div id="searchInputGroup">
          <input
            type="text"
            placeholder="Search..."
            value={this.props.searchString}
            className="form-control"
            id="propertySearchBox"
          />
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
}

TextSearch.propTypes = {
  searchString: PropTypes.string.isRequired
};
