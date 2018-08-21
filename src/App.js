import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import PropertyListing from './ResultsList/PropertyListing';
import './App.css';

import PropertiesJSON from './properties.js';

class App extends Component {
  render() {
    const properties = JSON.parse(PropertiesJSON);
    return (
      <div className="App">
        <Header />
        <Banner />
        <PropertyListing
          property={properties[3]}
        />
      </div>
    );
  }
}

export default App;
