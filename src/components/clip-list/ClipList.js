import React from 'react';

// Components
import Clip from './Clip';

const ClipList = props => {
  const clips = props.clipList.map(clip => {
    return (
      <li key={clip.id} ><Clip clip={clip} onPlayClip={props.onPlayClip} /></li>
    );
  });
  return (
    <section>
      <ul className="clip-list">
        {clips}
      </ul>
    </section>
  );
};

export default ClipList;