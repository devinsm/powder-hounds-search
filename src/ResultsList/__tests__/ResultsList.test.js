import React from 'react';
import { shallow } from 'enzyme';

import ResultsList from '../ResultsList';

import properties from '../../properties.json';

let allProperties;
beforeEach(() => {
  allProperties = shallow(
    <ResultsList
      properties={properties}
      searchString=""
    />
  );
});

it('has six property listings', () => {
  expect(allProperties.find('PropertyListing').length).toBe(6);
});

/**
 * Takes a shallow rendering of a ResultsList and asserts that the given property
 * is present in the list.
 * @param property The property which is supposed to be in the list. This property
 * will be compared against the properties in the list using ===.
 * @param list The shallow rendering of the ResultsList.
*/
function propertyIsInList(property, list) {
  let propertyListings = list.find('PropertyListing');
  let isPresent = false;
  for(let i = 0; i < propertyListings.length; i++) {
    if(propertyListings.at(i).props().property === property) {
      isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
}

it('all six properties are present', () => {
  for(let property of properties) {
    propertyIsInList(property, allProperties);
  }
});

it('filters correctly when the search string is bedroom', () => {
  let bedroomProperties = shallow(
    <ResultsList
      properties={properties}
      searchString="bedroom"
    />
  );

  expect(bedroomProperties.find('PropertyListing').length).toBe(6);
  for(let property of properties) {
    propertyIsInList(property, bedroomProperties);
  }
});

it('filters correctly when the search string is powder', () => {
  let powderProperties = shallow(
    <ResultsList
      properties={properties}
      searchString="powder"
    />
  );

  expect(powderProperties.find('PropertyListing').length).toBe(3);
  for(let property of [properties[0], properties[2], properties[5]]) {
    propertyIsInList(property, powderProperties);
  }
});

it('filters correctly when the search string is monkey', () => {
  let monkeyProperties = shallow(
    <ResultsList
      properties={properties}
      searchString="monkey"
    />
  );

  expect(monkeyProperties.find('PropertyListing').length).toBe(0);
});

it('filters correctly when the search string has trailing/leading white space', () => {
  let powderProperties = shallow(
    <ResultsList
      properties={properties}
      searchString="   powder       "
    />
  );

  expect(powderProperties.find('PropertyListing').length).toBe(3);
  for(let property of [properties[0], properties[2], properties[5]]) {
    propertyIsInList(property, powderProperties);
  }
});

it('filters in a case insensitive maner', () => {
  let powderProperties = shallow(
    <ResultsList
      properties={properties}
      searchString="pOWdEr"
    />
  );

  expect(powderProperties.find('PropertyListing').length).toBe(3);
  for(let property of [properties[0], properties[2], properties[5]]) {
    propertyIsInList(property, powderProperties);
  }
});

it('escapes regex special characters', () => {
  let pStarProperties = shallow(
    <ResultsList
      properties={properties}
      searchString='p*'
    />
  );

  expect(pStarProperties.find('PropertyListing').length).toBe(0);
});

it('Shows error message when there are no matches', () => {
  let monkeyProperties = shallow(
    <ResultsList
      properties={properties}
      searchString='monkey'
    />
  );

  expect(monkeyProperties.find('PropertyListing').length).toBe(0);
  expect(monkeyProperties.find('.noResultsError').length).toBe(1);
  expect(monkeyProperties.find('.noResultsError').text()).toBe('There are no properties matching your search.');
});
