import React, { Component } from 'react';
import { addToQueue } from '../../store'
import axios from 'axios'
import './Song.css'

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.song = props.data
    this.view = props.view
  }

  handleAdd() {
    let vm = this
    console.log(this);
    addToQueue(this.props.data)
  }

  render() {
    return (
      <article className="media" onClick={this.handleAdd.bind(this)}>
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={this.props.data.artwork} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <h6 className="title is-6 text">{this.props.data.title}</h6>
            <h6 className="subtitle is-6 text">{this.props.data.artists.join(', ')}</h6>
          </div>
        </div>
      </article>
    )
  }
}

export default Song
