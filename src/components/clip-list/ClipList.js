import React from 'react';

// Components
import Clip from './Clip';

const ClipList = props => {
  const clips = props.clipList.map(clip => <Clip key={clip.id} clip={clip} />);
  return (
    <section>
      <ul className="clip-list">
        {clips}
      </ul>
    </section>
  );
};

export default ClipList;