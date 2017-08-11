import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="field">
            <div className="control is-large is-loading">
              <input className="input is-large" type="text" placeholder="Large loading input" />
            </div>
          </div>
        </div>
        <p className="App-intro box">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
