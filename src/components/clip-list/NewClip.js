import React from 'react';

const NewClip = props => (
  <button
    type="button"
    className="clip new-clip"
    onClick={() => props.onNewClipClick()}>+</button>
);

export default NewClip;