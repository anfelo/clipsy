import React, { Component } from 'react';

// Components
import ClipForm from '../../components/clip-form/ClipForm';

class ClipFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: props.clip !== undefined
        ? props.clip
        : {
          id: '',
          name: '',
          start: '',
          end: ''
        }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddNewClip = this.handleAddNewClip.bind(this);
  }

  handleAddNewClip(event) {
    event.preventDefault();
    this.props.onAddNewClip({
      ...this.state.clip,
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      isMain: false,
      isPlaying: false
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      clip: {
        ...this.state.clip,
        [name]: value
      }
    });
  }

  render() {
    return (
      <ClipForm
        form={this.state.clip}
        onInputChange={this.handleInputChange}
        onCancelNewClip={this.props.onCancelNewClip}
        onAddNewClip={this.handleAddNewClip} />
    );
  }
}

export default ClipFormContainer;