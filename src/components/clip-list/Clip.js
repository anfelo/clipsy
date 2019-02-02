import React from 'react';

const Clip = props => (
  <button
    type="button"
    className="clip"
    onClick={() => props.onPlayClip(props.clip.id)}>
    {props.clip.name}
  </button>
);

export default Clip;