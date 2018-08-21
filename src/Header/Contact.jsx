import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <ul className="Contact">
        <li>
          <i className="far fa-envelope"></i>
          <a href="mailto:notArealAddress@kiniseko.com">stay@kiniseko.com</a>
        </li>
        <li>
          <i className="fa fa-phone"></i>
          <span className="phoneNumber">+81 (0) 136 21 2565</span>
        </li>
      </ul>
    );
  }
}
