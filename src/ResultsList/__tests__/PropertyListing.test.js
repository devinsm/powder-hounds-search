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
  expect(deepTracks1.find('dl.attributes').length).toBe(1);
});

/**
 * Asserts that deepTracks1's list of attributes is correct when
 * the amenities are hiden.
*/
function assertCorrectNoAmenities() {
  let listTerms = deepTracks1.find('dl.attributes').find('dt');
  let listDefinitions = deepTracks1.find('dl.attributes').find('dd');

  expect(listTerms.length).toBe(5);
  expect(listDefinitions.length).toBe(4);

  expect(listTerms.at(0).text()).toBe('Floor Area');
  expect(listTerms.at(1).text()).toBe('Number of Bathrooms');
  expect(listTerms.at(2).text()).toBe('Distance to Village Center');
  expect(listTerms.at(3).text()).toBe('Distance to Ski Lifts');
  expect(listTerms.at(4).find('span.amenities').length).toBe(1);
  expect(listTerms.at(4).find('span.amenities').text()).toBe('Modern Amenities ');
  expect(listTerms.at(4).find('a.showHide').length).toBe(1);
  expect(listTerms.at(4).find('a.showHide').text()).toBe('(show)');

  expect(listDefinitions.at(0).text()).toBe('44 sqm');
  expect(listDefinitions.at(1).text()).toBe('1');
  expect(listDefinitions.at(2).text()).toBe('182 m');
  expect(listDefinitions.at(3).text()).toBe('179 m');
}

/**
 * Asserts that deepTracks1's list of attributes and amenities is correct when
 * the amenities are shown.
*/
function assertCorrectWithAmenities() {
  let listTerms = deepTracks1.find('dl.attributes').find('dt');
  let listDefinitions = deepTracks1.find('dl.attributes').find('dd');

  //Make sure property attributes are correct
  expect(listTerms.length).toBe(5);
  expect(listDefinitions.length).toBe(5);

  expect(listTerms.at(0).text()).toBe('Floor Area');
  expect(listTerms.at(1).text()).toBe('Number of Bathrooms');
  expect(listTerms.at(2).text()).toBe('Distance to Village Center');
  expect(listTerms.at(3).text()).toBe('Distance to Ski Lifts');
  expect(listTerms.at(4).find('span.amenities').length).toBe(1);
  expect(listTerms.at(4).find('span.amenities').text()).toBe('Modern Amenities ');
  expect(listTerms.at(4).find('a.showHide').length).toBe(1);
  expect(listTerms.at(4).find('a.showHide').text()).toBe('(hide)');

  expect(listDefinitions.at(0).text()).toBe('44 sqm');
  expect(listDefinitions.at(1).text()).toBe('1');
  expect(listDefinitions.at(2).text()).toBe('182 m');
  expect(listDefinitions.at(3).text()).toBe('179 m');

  //Make sure property amenities are correct
  let amenitiesList = listDefinitions.at(4).find('ul');
  let amenitiesItems = amenitiesList.find('li');

  expect(amenitiesList.length).toBe(1);
  expect(amenitiesItems.at(0).text()).toBe('Apple TV');
  expect(amenitiesItems.at(1).text()).toBe('Bluetooth Speakers');
  expect(amenitiesItems.at(2).text()).toBe('Card Key Access');
  expect(amenitiesItems.at(3).text()).toBe('Nespresso Machine');
}

it('has the correct attributes (floor area, distance to lifts, etc.)', () => {
  assertCorrectNoAmenities();
});

it('shows and hides the amenities properly', () => {
  assertCorrectNoAmenities();

  let showHideLink = deepTracks1.find('a.showHide');

  showHideLink.simulate('click', {preventDefault: () => {}});
  deepTracks1.update();

  assertCorrectWithAmenities();

  showHideLink = deepTracks1.find('a.showHide');

  showHideLink.simulate('click', {preventDefault: () => {}});
  deepTracks1.update();

  assertCorrectNoAmenities();
});

it('prevents the default link action when the show/hide link is clicked', () => {
  let mockClickEvent = {
    preventDefault: jest.fn()
  }

  let preventDefault = mockClickEvent.preventDefault;

  expect(preventDefault.mock.calls.length).toBe(0);

  //Test it when link says 'show'
  let showHideLink = deepTracks1.find('a.showHide');

  showHideLink.simulate('click', mockClickEvent);

  expect(preventDefault.mock.calls.length).toBe(1);
  expect(preventDefault.mock.calls[0].length).toBe(0); //passed no args

  //Test it when link says 'hide'
  showHideLink = deepTracks1.find('a.showHide');

  showHideLink.simulate('click', mockClickEvent);

  expect(preventDefault.mock.calls.length).toBe(2);
  expect(preventDefault.mock.calls[1].length).toBe(0); //passed no args
});

it('displays all amenities when they are all present', () => {
  let theWorks = shallow(
    <PropertyListing
      property={properties[5]}
    />
  );
  let showHideLink = theWorks.find('a.showHide');

  showHideLink.simulate('click', {preventDefault: () => {}});
  deepTracks1.update();

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
