import React from 'react';

const NewClip = props => (
  <div className="clips-container">
    <button
      type="button"
      className="clip new-clip"
      onClick={() => props.onNewClipClick()}>+</button>
  </div>
);

export default NewClip;