import React from 'react';
import { shallow } from 'enzyme';

import RangeFilter from '../RangeFilter';

let rangeFilterSquareFeet;
let rangeFilterDistanceToTown;

beforeEach(() => {
  rangeFilterSquareFeet = shallow(
    <RangeFilter
      title="Square feet"
      metric="area"
    />
  );

  rangeFilterDistanceToTown = shallow(
    <RangeFilter
      title="Distance to town center"
      metric="distance"
    />
  );
});


it('renders without crashing', () => {
  shallow(
    <RangeFilter
      title="Square feet"
      metric="area"
    />
  );
});

it('has two input boxes', () => {
  expect(rangeFilterSquareFeet.find('input').length).toBe(2);
});

it('the first input box has the correct placeholder', () => {
  expect(rangeFilterSquareFeet.find('input').at(0).props().placeholder).toBe('min area');
});

it('the second input box has the correct placeholder', () => {
  expect(rangeFilterSquareFeet.find('input').at(1).props().placeholder).toBe('max area');
});

it('has the correct title', () => {
  expect(rangeFilterSquareFeet.find('.filterTitle').text()).toBe('Square feet')
});
