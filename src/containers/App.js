import React, { Component } from 'react';

// Components
import ClipPlayer from '../components/clip-player/ClipPlayer';
import ClipList from '../components/clip-list/ClipList';

class App extends Component {
  state = {
    currentClipId: 1,
    clipList: [
      {
        id: 1,
        name: 'Main Clip',
        source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        type: 'video/mp4',
        start: '',
        end: '',
        isMain: true
      },
      {
        id: 2,
        name: 'Clip 1',
        source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        type: 'video/mp4',
        start: '10',
        end: '20',
        isMain: false
      },
      {
        id: 3,
        name: 'Clip 2',
        source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        type: 'video/mp4',
        start: '20',
        end: '30',
        isMain: false
      },
      {
        id: 4,
        name: 'Clip 3',
        source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        type: 'video/mp4',
        start: '30',
        end: '',
        isMain: false
      },
    ]
  };

  render() {
    return (
      <div>
        <ClipPlayer clip={this.state.clipList.find(clip => clip.id === this.state.currentClipId)} />
        <ClipList clipList={this.state.clipList} />
      </div>
    );
  }
}

export default App;