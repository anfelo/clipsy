import React from 'react';

import './ClipList.scss';

// Components
import Clip from './Clip';
import ClipFormContainer from '../../containers/clip-form/ClipFormContainer';

const ClipList = props => {
  const clips = props.clipList.map(clip => {
    return (
      <li key={clip.id}>
        {
          !clip.isEditing
            ? (
              <Clip
                clip={clip}
                onPlayClip={props.onPlayClip}
                onEnableEditClip={props.onEnableEditClip}
                onRemoveClip={props.onRemoveClip} />
            )
            : (
              <ClipFormContainer
                onAddNewClip={props.onEditClip}
                onCancelNewClip={props.onDisableEditForm}
                clip={clip} />
            )
        }
      </li>
    );
  });
  return (
    <section>
      <ul className="clip-list clips-container">
        <li key="0">{props.children}</li>
        {clips}
      </ul>
    </section>
  );
};

export default ClipList;