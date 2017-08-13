import React, { Component } from 'react';
import { search } from '../../store'

class SearchBar extends React.Component {
  
  handleChange(e) {
    if (e.keyCode === 13) search(e.target.value)
  }

  render() {
    return (
      <div className="field">
        <div className="control is-large">
          <input className="input is-large" type="text" placeholder="Large input" onKeyUp={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar
