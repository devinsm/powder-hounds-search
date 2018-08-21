import React from 'react';
import { shallow } from 'enzyme';

import ResultsList from '../ResultsList';

import PropertiesJSON from '../../properties.js';

const properties = JSON.parse(PropertiesJSON);

it('renders without crashing', () => {
  shallow(<ResultsList />);
});
