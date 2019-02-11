import React, { Component } from 'react';
import Jumbotron from './headerComponent/jumbotron.js';
import Photos from './photos.js';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Photos />
      </div>
    )
  }
}

export default App;