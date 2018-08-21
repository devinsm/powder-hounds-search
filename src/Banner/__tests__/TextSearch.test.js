import React from 'react';
import { shallow } from 'enzyme';

import TextSearch from '../TextSearch';

let textSearch;

beforeEach(() => {
  textSearch = shallow(
    <TextSearch
      searchString="hot tub"
    />
  );
});

it('has a form element', () => {
  expect(textSearch.find('form').length).toBe(1);
});

it('has an input box inside the form', () => {
  expect(textSearch.find('form input').length).toBe(1);
});

test('the input box has the correct placeholder', () => {
  expect(textSearch.find('form input').props().placeholder).toBe('Search...');
});

test('the input box has the correct value', () => {
  expect(textSearch.find('form input').props().value).toBe('hot tub');
});

it('has a search button', () => {
  expect(textSearch.find('form button').length).toBe(1);
  expect(textSearch.find('form button').text()).toBe('Search');
});
