import React, { Component } from 'react';
import Jumbotron from './headerComponent/jumbotron.js';
import Photos from './photos.js';
import '../../dist/styles.css';

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