import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ActionCreators
import * as ClipListActionCreators from '../store/clip-list/actions';

// Containers
import ClipForm from './clip-form/ClipForm';

// Components
import ClipPlayer from '../components/clip-player/ClipPlayer';
import ClipList from '../components/clip-list/ClipList';
import NewClip from '../components/clip-list/NewClip';

class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  replayVideo() {
    if (this.videoRef.current !== null) {
      this.videoRef.current.load();
    }
  }

  render() {
    const { clipList, actions, isAddingClip } = this.props;
    this.replayVideo();
    return (
      <div>
        <ClipPlayer
          clip={clipList.find(clip => clip.isPlaying)}
          videoRef={this.videoRef} />
        {
          !isAddingClip
            ? <NewClip onNewClipClick={actions.enableNewClipForm} />
            : <ClipForm
              onAddNewClip={actions.addClip}
              onCancelNewClip={actions.disableNewClipForm} />
        }
        <ClipList
          clipList={clipList}
          onPlayClip={actions.playClip}
          isAddingClip={isAddingClip} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    clipList: state.clipList.data,
    isAddingClip: state.clipList.isAddingClip
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(
      ClipListActionCreators, dispatch
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);