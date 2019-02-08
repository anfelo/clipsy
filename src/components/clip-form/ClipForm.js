import React from 'react';

import './ClipForm.scss';

const ClipForm = props => {
  return (
    <div className="clip clip-form">
      <form onSubmit={e => this.handleAddNewClip(e)}>
        <label htmlFor="name">
          Name:
        <input type="text" name="name" value={props.form.name} onChange={e => props.onInputChange(e)} >
          </input>
        </label>
        <label htmlFor="start">
          Start Time:
        <input type="number" name="start" value={props.form.start} onChange={e => props.onInputChange(e)} />
        </label>
        <label htmlFor="end">
          End Time:
        <input type="number" name="end" value={props.form.end} onChange={e => props.onInputChange(e)} />
        </label>
        <div className="form-actions">
          <button
            className="button button-primary"
            type="submit"
            onClick={e => props.onAddNewClip(e)}>
            {
              props.form.id === ''
                ? 'Add Clip'
                : 'Edit Clip'
            }
          </button>
          <button
            className="button button-warning"
            type="button"
            onClick={() => props.onCancelNewClip(props.form.id)}>
            Cancel
        </button>
        </div>
      </form>
    </div>
  );
}


export default ClipForm;