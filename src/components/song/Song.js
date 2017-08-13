import React, { Component } from 'react';
import { addToQueue } from '../../store'
import './Song.css'

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.song = props.data
  }

  toggleDropdown(e) {

  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={this.song.artwork} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <h6 className="title is-6 text">{this.song.title}</h6>
            <h6 className="subtitle is-6 text">{this.song.artists.join(', ')}</h6>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <i className="fa fa-plus" aria-hidden="true" onClick={this.toggleDropdown}></i>
        </div>
      </article>
    )
  }
}

export default Song
