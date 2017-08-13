import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, Song } from './components'

const App = (props) => {
  const { query, songs } = props;
  let text = 'poop'
  const songList = songs.map((song) => {
    return <Song key={song.id} data={song} />
  })

  const results = (query) => {
    if (query) {
      return <div className="App-intro box">
        {songList}
      </div>
    } else {
      return
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
      </div>
      {results(query)}
    </div>
  );
}

export default App;
