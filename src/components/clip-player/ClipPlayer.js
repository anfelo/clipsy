import React from 'react';

const ClipPlayer = props => (
  <section>
    <div className="container">
      <video id="clip-player" controls autoPlay>
        <source
          src={`${props.clip.source}#t=${props.clip.start},${props.clip.end}`}
          type={props.clip.type} />
      </video>
    </div>
  </section>
);

export default ClipPlayer;
