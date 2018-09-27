import React, { Component } from 'react';
import powderHoundsLogo from '../Powder_Hounds.svg';

export default class Logo extends Component {
  render() {
    return (
      <img
        className="Logo"
        width="139"
        height="124"
        src={powderHoundsLogo}
        alt="Ki Niseko logo"
      />
    )
  }
}
