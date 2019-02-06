import React from 'react';

const ClipForm = props => (
  <div className="">
    <form onSubmit={e => this.handleAddNewClip(e)}>
      <input type="text" name="name" value={props.name} onChange={props.onInputChange} />
      <input type="text" name="start" value={props.start} onChange={props.onInputChange} />
      <input type="text" name="end" value={props.end} onChange={props.onInputChange} />
      <button
        type="submit">
        Add Clip
      </button>
      <button
        type="button"
        onClick={() => props.onCancelNewClip()}>
        Cancel
      </button>
    </form>
  </div>
);

export default ClipForm;