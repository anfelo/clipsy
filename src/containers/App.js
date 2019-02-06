import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ActionCreators
import * as ClipListActionCreators from '../store/clip-list/actions';

// Containers
import ClipFormContainer from './clip-form/ClipFormContainer';

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
      <div className="app-container">
        <ClipPlayer
          clip={clipList.find(clip => clip.isPlaying)}
          videoRef={this.videoRef} />
        <div className="clip-editor-wrapper">
          {
            !isAddingClip
              ? <NewClip onNewClipClick={actions.enableNewClipForm} />
              : <ClipFormContainer
                onAddNewClip={actions.addClip}
                onCancelNewClip={actions.disableNewClipForm} />
          }
          <ClipList
            clipList={clipList}
            onPlayClip={actions.playClip}
            isAddingClip={isAddingClip} />
        </div>
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