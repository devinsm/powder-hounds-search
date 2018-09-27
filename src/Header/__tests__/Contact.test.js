import React from 'react';
import { shallow } from 'enzyme';

import Contact from '../Contact';

let contact = shallow(<Contact />);

it('renders without crashing', () => {
  shallow(<Contact />);
});

it('has the correct email address in anchor tag', () => {
  expect(contact.find('a').length).toBe(1);
  expect(contact.find('a').props().href).toBe('mailto:stay@powder-realty.com');
  expect(contact.find('a').text()).toBe('stay@powder-realty.com');
});

it('has the correct phone number', () => {
  expect(contact.find('.Contact .phoneNumber').length).toBe(1);
  expect(contact.find('.Contact .phoneNumber').text()).toBe('(307) 391 2565');
});
