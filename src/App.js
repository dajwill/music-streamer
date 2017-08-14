import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, Song, Player } from './components'

const App = (props) => {
  const { query, songs, queue } = props;
  const songList = songs.map((song) => {
    return <Song key={song.id} data={song} />
  })

  const resultsStyle = () => {
    return queue.length ? { marginBottom: '110px' } : { marginBottom: '20px' }
  }

  const results = (query) => {
    if (songs.length) {
      return <div className="App-intro box" style={resultsStyle()}>
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
        <SearchBar />
      </div>
      {results(query)}
      {player()}
    </div>
  );
}

export default App;
