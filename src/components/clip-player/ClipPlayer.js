import React from 'react';

import './ClipPlayer.scss';

const ClipPlayer = props => {
  const clipSource = `${props.clip.source}#t=${props.clip.start}${props.clip.end ? ',' : ''}${props.clip.end}`;
  return (
    <section>
      <div className="player-container">
        <video id="clip-player" controls autoPlay ref={props.videoRef}>
          <source
            src={clipSource}
            type={props.clip.type} />
        </video>
      </div>
    </section>
  );
};

export default ClipPlayer;
