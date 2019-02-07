import React from 'react';

import './ClipForm.scss';

const ClipForm = props => (
  <div className="clip clip-form">
    <form onSubmit={e => this.handleAddNewClip(e)}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" value={props.name} onChange={props.onInputChange} />
      </label>
      <label htmlFor="start">
        Start Time:
        <input type="text" name="start" value={props.start} onChange={props.onInputChange} />
      </label>
      <label htmlFor="end">
        End Time:
        <input type="text" name="end" value={props.end} onChange={props.onInputChange} />
      </label>
      <div className="form-actions">
        <button
          className="button button-primary"
          type="submit"
          onClick={props.onAddNewClip}>
          Add Clip
        </button>
        <button
          className="button button-warning"
          type="button"
          onClick={() => props.onCancelNewClip()}>
          Cancel
        </button>
      </div>
    </form>
  </div>
);

export default ClipForm;