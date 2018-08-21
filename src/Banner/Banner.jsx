import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextSearch from './TextSearch';

import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <section className="Banner">
        <h2>Find your perfect Niseko vacation property today!</h2>
        <TextSearch
          searchString={this.props.searchString}
        />
      </section>
    );
  }
}

Banner.propTypes = {
  searchString: PropTypes.string.isRequired
}
