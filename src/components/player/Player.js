import React, { Component } from 'react';
import Song from '../song/Song.js'
// import { queue } from '../../store'
import './Player.css'
import axios from 'axios'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.queue = props.queue
    this.streamUrl = ''
  }

  loadSong(song) {
    var audio = document.getElementById('audio');
    console.log(audio);
    console.log(song.source_id);
    let payload = {
      source: song.source,
      id: song.source_id
    }
    axios.post(`http://localhost:9393/stream`, payload)
      .then((success) => {
        console.log(success)
        this.streamUrl = success.data
        audio.src = this.streamUrl
        audio.load()
        console.log(this.streamUrl);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount(props) {
    console.log('init props', this.props);
    this.loadSong(this.props.queue[0])
  }

  componentWillReceiveProps(nextProps) {
    console.log('nexProps', nextProps);
    this.loadSong(nextProps.queue[0])
  }

  render() {
    return (
      <footer className="footer">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={this.props.queue[0].artwork} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <span className="title is-6">{this.props.queue[0].title} - </span>
              <span className="subtitle is-6">{this.props.queue[0].artists.join(', ')}</span>
              <audio id="audio" src={this.streamUrl} controls></audio>
            </p>
          </div>
        </div>
      </article>
      </footer>
    );
  }
}

export default Player
