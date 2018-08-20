import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RangeFilter.css';

export default class RangeFilter extends Component {
  render() {
    return (
      <fieldset className="RangeFilter form-group">
        <legend className="filterTitle">
          {this.props.title}
        </legend>
        <input
          type="text"
          className="form-control"
          placeholder={'min' + ' ' + this.props.metric }
        />
        <span className="dash">&mdash;</span>
        <input
          type="text"
          className="form-control"
          placeholder={'max' + ' ' + this.props.metric }
        />
      </fieldset>
    );
  }
}

RangeFilter.propTypes = {
  title: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired //placeholder will be 'min <metric>' and 'max <metric>'
}
