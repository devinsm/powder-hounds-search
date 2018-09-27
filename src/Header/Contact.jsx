import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <ul className="Contact">
        <li>
          <i className="far fa-envelope"></i>
          <a href="mailto:stay@powder-realty.com">stay@powder-realty.com</a>
        </li>
        <li>
          <i className="fa fa-phone"></i>
          <span className="phoneNumber">(307) 391 2565</span>
        </li>
      </ul>
    );
  }
}
