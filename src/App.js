import React, { Component } from 'react';
import { search } from './store'
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const { query } = props;
  const results = (query) => {
    if (query) {
      return <p className="App-intro box">
        '{query}'
      </p>
    } else {
      return
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    search(e.target.value)
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="field">
          <div className="control is-large">
            <input className="input is-large" type="text" placeholder="Large input" value={query} onChange={handleChange} />
          </div>
        </div>
      </div>
      {results(query)}
    </div>
  );
}

export default App;
