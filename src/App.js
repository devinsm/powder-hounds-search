import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import ResultsList from './ResultsList/ResultsList';
import './App.css';

import PropertiesJSON from './properties.js';

class App extends Component {
  render() {
    const properties = JSON.parse(PropertiesJSON);
    return (
      <div className="App">
        <Header />
        <Banner />
        <ResultsList
          properties={properties}
        />
      </div>
    );
  }
}

export default App;
