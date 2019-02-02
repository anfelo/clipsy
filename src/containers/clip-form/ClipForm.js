import React, { Component } from 'react';

class ClipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  isValidForm() {
    return true;
  }

  handleAddNewClip(event) {
    event.preventDefault();
    if (this.isValidForm()) {
      this.props.onAddNewClip({
        ...this.state,
        source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        type: 'video/mp4',
        isMain: false,
        isPlaying: false
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="">
        <form onSubmit={e => this.handleAddNewClip(e)}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <input type="text" name="start" value={this.state.start} onChange={this.handleInputChange} />
          <input type="text" name="end" value={this.state.end} onChange={this.handleInputChange} />
          <button
            type="submit">
            Add Clip
          </button>
          <button
            type="button"
            onClick={() => this.props.onCancelNewClip()}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ClipForm;