import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

import PropertiesJSON from './properties.js';
const allProperties = JSON.parse(PropertiesJSON);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let app;
beforeEach(() => {
  app = shallow(<App />);
});

it('changes the searchString props when the value changes', () => {
  let bannerProps = () => app.find('Banner').props();
  let resultsListProps = () => app.find('ResultsList').props();

  bannerProps().onSearchStringChange('small');
  app.update();

  expect(bannerProps().searchString).toBe('small');
  expect(resultsListProps().searchString).toBe('small');

  bannerProps().onSearchStringChange('1 bed');
  app.update();

  expect(bannerProps().searchString).toBe('1 bed');
  expect(resultsListProps().searchString).toBe('1 bed');
});
