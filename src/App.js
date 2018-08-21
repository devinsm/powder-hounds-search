import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import ResultsList from './ResultsList/ResultsList';
import './App.css';

import PropertiesJSON from './properties.js';
const properties = JSON.parse(PropertiesJSON);

class App extends Component {
  constructor(props) {
    super(props);
    this.state =({
      searchString: 'suite'
    });
  }

  getFilteredProperties() {
    return [];
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner
          searchString={this.state.searchString}
        />
        <ResultsList
          properties={properties}
          searchString={this.state.searchString}
        />
      </div>
    );
  }
}

export default App;
