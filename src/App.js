import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, Song, Player } from './components'

const App = (props) => {
  const { query, songs, queue } = props;
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

  const player = () => {
    if (queue.length) {
      return <Player queue={queue} />
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
      {player()}
    </div>
  );
}

export default App;
