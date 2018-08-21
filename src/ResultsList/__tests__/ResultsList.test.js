import React from 'react';
import { shallow } from 'enzyme';

import ResultsList from '../ResultsList';

import PropertiesJSON from '../../properties.js';

const properties = JSON.parse(PropertiesJSON);

let allProperties;
beforeEach(() => {
  allProperties = shallow(
    <ResultsList
      properties={properties}
    />
  );
});

it('has five property listings', () => {
  expect(allProperties.find('PropertyListing').length).toBe(5);
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

it('all five properties are present', () => {
  for(let property of properties) {
    propertyIsInList(property, allProperties);
  }
});
