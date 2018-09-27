import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextSearch from './TextSearch';

import './Banner.css';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.props.onSearchStringChange(newValue);
  }

  render() {
    return (
      <section className="Banner">
        <h2>Find your perfect ski vacation property today!</h2>
        <TextSearch
          searchString={this.props.searchString}
          onSearchStringChange={this.handleChange}
        />
      </section>
    );
  }
}

Banner.propTypes = {
  searchString: PropTypes.string.isRequired,
  onSearchStringChange: PropTypes.func.isRequired
}
