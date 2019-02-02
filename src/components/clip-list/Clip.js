import React from 'react';

const Clip = props => (
  <button
    type="button"
    onClick={() => props.onClipPlay(props.clip.id)}>
    {props.clip.name}
  </button>
);

export default Clip;