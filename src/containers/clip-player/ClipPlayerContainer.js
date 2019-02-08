import React, { Component } from 'react';

// Components
import ClipPlayer from '../../components/clip-player/ClipPlayer';

class ClipPlayerontainer extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const nextVideo = nextProps.clipList.find(clip => clip.isPlaying);
    const shouldUpdate = `clip-player-${nextVideo.id}` !== this.videoRef.current.id;
    if (shouldUpdate) {
      this.replayVideo();
    }
    return shouldUpdate;
  }

  replayVideo() {
    if (this.videoRef.current !== null) {
      this.videoRef.current.load();
    }
  }

  render() {
    return (
      <ClipPlayer
        clip={this.props.clipList.find(clip => clip.isPlaying)}
        videoRef={this.videoRef} />
    );
  }
}

export default ClipPlayerontainer;