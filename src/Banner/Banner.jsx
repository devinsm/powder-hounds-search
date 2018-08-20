import React, { Component } from 'react';
import TextSearch from './TextSearch';

import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <section className="Banner">
        <h2>Find your perfect Niseko vacation property today!</h2>
        <TextSearch />
      </section>
    );
  }
}
