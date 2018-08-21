import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

let header = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('contains the logo', () => {
  expect(header.find('Logo').length).toBe(1);
});

it('contains the contact info', () => {
  expect(header.find('Contact').length).toBe(1);
});
