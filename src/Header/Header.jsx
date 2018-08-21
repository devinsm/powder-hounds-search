import React, { Component } from 'react';

import Logo from './Logo';
import Contact from './Contact';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-left">
            <Logo />
          </div>
          <div className="col-12 col-md-6 text-center text-md-right">
            <Contact />
          </div>
        </div>
      </header>
    );
  }
}
