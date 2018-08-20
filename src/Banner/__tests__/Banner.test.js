import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../Banner';

let banner;
beforeEach(() => {
  banner = shallow(
    <Banner />
  );
});

it('renders without crashing', () => {
  shallow(<Banner />);
});

it('has the correct heading', () => {
  expect(banner.find('h2').length).toBe(1);
  expect(banner.find('h2').text()).toBe('Find your perfect Niseko vacation property today!');
});

it('has a text search component', () => {
  expect(banner.find('TextSearch').length).toBe(1);
});
