import React from 'react';
import { shallow } from 'enzyme';

import PropertyListing from '../PropertyListing';

import PropertiesJSON from '../../test-properties.js';

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
  expect(deepTracks1.find('dl.attributes').length).toBe(1);
});

test('the attributes are correct and in the correct order', () => {
  let listTerms = deepTracks1.find('dl.attributes').find('dt');
  expect(listTerms.at(0).text()).toBe('Floor Area');
  expect(listTerms.at(1).text()).toBe('Number of Bathrooms');
  expect(listTerms.at(2).text()).toBe('Distance to Village Center');
  expect(listTerms.at(3).text()).toBe('Distance to Ski Lifts');
  expect(listTerms.at(4).text()).toBe('Amenities');

  let listDefinitions = deepTracks1.find('dl.attributes').find('dd');
  expect(listDefinitions.at(0).text()).toBe('44 sqm');
  expect(listDefinitions.at(1).text()).toBe('1');
  expect(listDefinitions.at(2).text()).toBe('182 m');
  expect(listDefinitions.at(3).text()).toBe('179 m');

  let amenitiesList = listDefinitions.at(4).find('ul');
  let amenitiesItems = amenitiesList.find('li');

  expect(amenitiesList.length).toBe(1);
  expect(amenitiesItems.at(0).text()).toBe('Apple TV');
  expect(amenitiesItems.at(1).text()).toBe('Bluetooth Speakers');
  expect(amenitiesItems.at(2).text()).toBe('Card Key Access');
  expect(amenitiesItems.at(3).text()).toBe('Nespresso Machine');
});

it('displays all amenities when they are all present', () => {
  let theWorks = shallow(
    <PropertyListing
      property={properties[5]}
    />
  );

  let listDefinitions = theWorks.find('dl.attributes').find('dd');
  let amenitiesList = listDefinitions.at(4).find('ul');
  let amenitiesItems = amenitiesList.find('li');

  expect(amenitiesList.length).toBe(1);
  expect(amenitiesItems.at(0).text()).toBe('Air Conditioning');
  expect(amenitiesItems.at(1).text()).toBe('Apple TV');
  expect(amenitiesItems.at(2).text()).toBe('Bluetooth Speakers');
  expect(amenitiesItems.at(3).text()).toBe('Card Key Access');
  expect(amenitiesItems.at(4).text()).toBe('Chromecast');
  expect(amenitiesItems.at(5).text()).toBe('Fireplace');
  expect(amenitiesItems.at(6).text()).toBe('HD TV');
  expect(amenitiesItems.at(7).text()).toBe('Jacuzzi');
  expect(amenitiesItems.at(8).text()).toBe('Nespresso Machine');
});

it('displays no amenities when none are present', () => {
  let chaletA = shallow(
    <PropertyListing
      property={properties[1]}
    />
  );

  let listTerms = chaletA.find('dl.attributes').find('dt');
  let listDefinitions = chaletA.find('dl.attributes').find('dd');

  expect(listTerms.length).toBe(4);
  expect(listDefinitions.length).toBe(4);
});
