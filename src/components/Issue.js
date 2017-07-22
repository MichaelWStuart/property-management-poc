import React from 'react';

import ConditionButton from './Condition-Button.js';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.issue.name,
      conditionDefault: props.issue.conditionDefault,
      conditionCurrent: 'pass', // pass, noted, fail
      s3PhotoURI: '',
      localPhotoURI: '',
      photoUploaded: false,
      lineItems: '',
      approvedByManager: false,
      approvedByBoss: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    event.preventDefault();
    this.setState({ localPhotoURI: event.target.localPhotoURI, photoUploaded: true });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleConditionChange(event) {
    event.preventDefault();
    if(this.state.conditionCurrent === 'pass')
      this.setState({ conditionCurrent: 'fail' })
    else if(this.state.conditionCurrent === 'fail')
      this.setState({ conditionCurrent: 'noted' });
    else
      this.setState({ conditionCurrent: 'pass' });
  }

  render() {
    return (
      <tr>
        <td>
          {this.state.name}
        </td>
        <td>
          {this.state.conditionDefault}
        </td>
        <td>
          <input
            type='button'
            name='changeCondition'
            value='Change Condition'
            className='changeCondition'
            onClick={this.handleConditionChange}
          />
        </td>
      </tr>
      if(this.state.conditionCurrent === 'fail') {
        <tr>
          <form className='uploadImage' onSubmit={this.handleUpload}>
            <td>
              <input
                type='text'
                name='lineItems'
                value={this.state.lineItems}
                onChange={this.handle}
            </td>
            <td>
              <input
                type='file'
                name='localPhotoURI'
                value={this.localPhotoURI}
                onChange={this.handleInputChange}
              />
              <input
                type='submit'
                name='uploadPhoto'
                value='Upload'
              />

              if(this.state.photoUploaded) {
                <img name='photoDisplay' src={this.state.localPhotoURI} />
              }

            </td>
          </form>
        </tr>
      }
    );
  }
}

export default Issue;
