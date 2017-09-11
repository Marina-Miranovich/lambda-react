import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';

import './App.css';
import logo from './fronttalks-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo__wrapper">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Search />
        </header>
        <Results />
      </div>
    );
  }
}

export default App;
