import React from 'react';
import { shallow } from 'enzyme';

import PropertyListing from '../PropertyListing';

import PropertiesJSON from '../../properties.js';

const properties = JSON.parse(PropertiesJSON);

let deepTracks1;
beforeEach(() => {
  deepTracks1 = shallow(
    <PropertyListing
      property={properties[3]}
    />
  );
});

it('has the name in a heading', () => {
  expect(deepTracks1.find('h3').length).toBe(1);
  expect(deepTracks1.find('h3').text()).toBe('Deep Tracks 1');
});

it('has the description', () => {
  expect(deepTracks1.find('p.description').length).toBe(1);
  expect(deepTracks1.find('p.description').text())
  .toBe('Located just 200 m from the Hirafu Gondola, this 1 bedroom apartment is ideal for those seeking fresh tracks.');
});

it('has a list of attributes', () => {
  expect(deepTracks1.find('ul.attributes').length).toBe(1);
});

test('the attributes are correct and in the correct order', () => {
  let listItems = deepTracks1.find('ul.attributes').find('li');
  expect(listItems.at(0).text()).toBe('Floor Area: 44 sqm');
  expect(listItems.at(1).text()).toBe('Number of Bathrooms: 1');
  expect(listItems.at(2).text()).toBe('Distance to Village Center: 182 m');
  expect(listItems.at(3).text()).toBe('Distance to Ski Lifts: 179 m');

  let amenitiesList = listItems.at(4).find('ul');
  let amenitiesItems = amenitiesList.find('li');

  expect(amenitiesList.length).toBe(1);
  expect(amenitiesItems.at(0).text()).toBe('Apple TV');
  expect(amenitiesItems.at(1).text()).toBe('Bluetooth Speakers');
  expect(amenitiesItems.at(2).text()).toBe('Card Key Access');
  expect(amenitiesItems.at(3).text()).toBe('Nespresso Machine');
});
