import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class TextSearch extends Component {
  render() {
    return (
      <form>
        <label htmlFor="propertySearchBox">
          What are you looking for?
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          id="propertySearchBox"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
    );
  }
}

TextSearch.propTypes = {};
