import React from 'react';

import './Clip.scss';

const Clip = props => (
  <div className="clip clip-primary">
    <div className="clip-name">
      {props.clip.name}
    </div>
    <div className="clip-actions">
      <button
        type="button"
        className="button button-primary"
        onClick={() => props.onPlayClip(props.clip.id)}>
        <span className="fas fa-play"></span>
      </button>
      {
        !props.clip.isMain
          ? (
            <>
              <button
                type="button"
                className="button button-info"
                onClick={() => props.onEnableEditClip(props.clip.id)}>
                <span className="fas fa-edit"></span>
              </button>
              <button
                type="button"
                className="button button-danger"
                onClick={() => props.onRemoveClip(props.clip.id)}>
                <span className="fas fa-trash-alt"></span>
              </button>
            </>
          )
          : ''
      }
    </div>
  </div>
);

export default Clip;