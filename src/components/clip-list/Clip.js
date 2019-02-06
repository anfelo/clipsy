import React from 'react';

import './Clip.scss';

const Clip = props => (
  <div className="clip">
    <div className="clip-name">
      {props.clip.name}
    </div>
    <div className="clip-actions">
      <button
        type="button"
        className="button"
        onClick={() => props.onPlayClip(props.clip.id)}>
        Play
      </button>
      <button
        type="button"
        className="button"
        onClick={() => props.onPlayClip(props.clip.id)}>
        Edit
      </button>
      <button
        type="button"
        className="button"
        onClick={() => props.onPlayClip(props.clip.id)}>
        Delete
      </button>
    </div>
  </div>
);

export default Clip;