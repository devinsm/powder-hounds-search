import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../Banner';

let mockOnSearchStringChange;
let banner;
beforeEach(() => {
  mockOnSearchStringChange = jest.fn();
  banner = shallow(
    <Banner
      searchString="2 bedroom"
      onSearchStringChange={mockOnSearchStringChange}
    />
  );
});

it('has the correct heading', () => {
  expect(banner.find('h2').length).toBe(1);
  expect(banner.find('h2').text()).toBe('Find your perfect ski vacation property today!');
});

it('has a text search component', () => {
  expect(banner.find('TextSearch').length).toBe(1);
});

test('the text search component has the correct search string', () => {
  expect(banner.find('TextSearch').props().searchString).toBe('2 bedroom');
});

it('calls onSearchStringChange when the TextSearch component calls its onSearchStringChange', () => {
  expect(mockOnSearchStringChange.mock.calls.length).toBe(0);

  let textSearchOnChange = banner.find('TextSearch').props().onSearchStringChange;
  textSearchOnChange('large');

  expect(mockOnSearchStringChange.mock.calls.length).toBe(1);
  expect(mockOnSearchStringChange.mock.calls[0].length).toBe(1); //passed one argument
  expect(mockOnSearchStringChange.mock.calls[0][0]).toBe('large');
});
