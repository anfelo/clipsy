import React from 'react';

const ClipPlayer = props => (
  <section>
    <div className="container">
      <video id="clip-player" controls preload="metadata">
        <source src={props.clip.source} type={props.clip.type} />
      </video>
    </div>
  </section>
);

export default ClipPlayer;
