import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ActionCreators
import * as ClipListActionCreators from '../store/clip-list/actions';

// Containers
import ClipFormContainer from './clip-form/ClipFormContainer';
import ClipPlayerContainer from './clip-player/ClipPlayerContainer';

// Components
import ClipList from '../components/clip-list/ClipList';
import NewClip from '../components/clip-list/NewClip';

class App extends Component {
  render() {
    const { clipList, actions, isAddingClip } = this.props;
    return (
      <div className="app-container">
        <ClipPlayerContainer clipList={clipList} />
        <div className="clip-editor-wrapper">
          <ClipList
            clipList={clipList}
            onPlayClip={actions.playClip}
            onEnableEditClip={actions.enableEditClip}
            onRemoveClip={actions.removeClip}
            isAddingClip={isAddingClip}
            onEditClip={actions.editClip}
            onDisableEditForm={actions.disableEditClip}>
            {
              !isAddingClip
                ? <NewClip onNewClipClick={actions.enableNewClipForm} />
                : <ClipFormContainer
                  onAddNewClip={actions.addClip}
                  onCancelNewClip={actions.disableNewClipForm} />
            }
          </ClipList>
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