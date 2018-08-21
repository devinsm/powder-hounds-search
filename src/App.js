import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
