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
