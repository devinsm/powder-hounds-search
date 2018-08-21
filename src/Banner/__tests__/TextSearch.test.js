import React from 'react';
import { shallow } from 'enzyme';

import TextSearch from '../TextSearch';

let mockOnSearchStringChange;
let textSearch;

beforeEach(() => {
  mockOnSearchStringChange = jest.fn();
  textSearch = shallow(
    <TextSearch
      searchString="hot tub"
      onSearchStringChange={mockOnSearchStringChange}
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

test('when the value of the input box changes, onSearchStringChange is called', () => {
  expect(mockOnSearchStringChange.mock.calls.length).toBe(0);

  textSearch.find('input').simulate('change', {target: {value: 'fireplace'}});

  expect(mockOnSearchStringChange.mock.calls.length).toBe(1);
  expect(mockOnSearchStringChange.mock.calls[0].length).toBe(1); //called with one argument
  expect(mockOnSearchStringChange.mock.calls[0][0]).toBe('fireplace');
});

it('stops the submit event', () => {
  let mockPreventDefault = jest.fn();

  expect(mockPreventDefault.mock.calls.length).toBe(0);

  textSearch.find('form').simulate('submit', {preventDefault: mockPreventDefault});

  expect(mockPreventDefault.mock.calls.length).toBe(1);
  expect(mockPreventDefault.mock.calls[0].length).toBe(0);
});
