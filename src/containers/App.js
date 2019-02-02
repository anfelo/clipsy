import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ClipPlayer from '../components/clip-player/ClipPlayer';
import ClipList from '../components/clip-list/ClipList';

class App extends Component {
  render() {
    const { clipList } = this.props;
    return (
      <div>
        <ClipPlayer clip={clipList.find(clip => clip.isPlaying)} />
        <ClipList clipList={clipList} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    clipList: state.clipList.data
  }
);

export default connect(mapStateToProps)(App);