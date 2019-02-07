import React from 'react';

import './ClipList.scss';

// Components
import Clip from './Clip';

const ClipList = props => {
  const clips = props.clipList.map(clip => {
    return (
      <li key={clip.id}><Clip clip={clip} onPlayClip={props.onPlayClip} /></li>
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