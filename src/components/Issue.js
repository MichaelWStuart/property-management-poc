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
      lineItems: '',
      approvedByManager: false,
      approvedByBoss: false,
    };

    this.uploadImage = this.uploadImage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpload(event) {
    event.preventDefault();

  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleConditionChange(event) {

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
          <ConditionButton />
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
                type='text'
                name='localPhotoURI'
                value={this.localPhotoURI}
                onChange={this.handleInputChange}
              />
              <input
                type='submit'
                name='uploadPhoto'
                value='Upload'
              />
            </td>
          </form>
        </tr>
      }
    );
  }
}
