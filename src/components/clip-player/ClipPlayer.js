import React from 'react';

import './ClipPlayer.scss';

const ClipPlayer = props => {
  const clipSource = `${props.clip.source}#t=${props.clip.start}${props.clip.end ? ',' : ''}${props.clip.end}`;
  return (
    <div className="player-container">
      <video id={`clip-player-${props.clip.id}`} controls ref={props.videoRef}>
        <source
          src={clipSource}
          type={props.clip.type} />
      </video>
    </div>
  );
};

export default ClipPlayer;
