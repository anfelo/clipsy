import React, { Component } from 'react';

// Components
import ClipPlayer from '../components/clip-player/ClipPlayer';

class App extends Component {
  state = {
    currentClip: {
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4'
    }
  };

  render() {
    return (
      <div>
        <ClipPlayer clip={this.state.currentClip} />
      </div>
    );
  }
}

export default App;