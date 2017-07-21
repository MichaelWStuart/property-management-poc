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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    event.preventDefault();
    let file = event.target.localPhotoURI.files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    }
    let file = files[0];
    let fileName = file.name;
    let photoKey = albumPhotosKey + fileName;
    s3.upload({
      Key: photoKey,
      Body: file,
      ACL: 'public-read'
    }, function(err, data) {
      if (err) {
        return alert('There was an error uploading your photo: ', err.message);
      }
      alert('Successfully uploaded photo.');
      viewAlbum(albumName);
    });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleConditionChange(newCondition) {
    this.setState({ conditionCurrent: newCondition });
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
          <ConditionButton handleConditionChange={this.handleConditionChange} />
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
            </td>
          </form>
        </tr>
      }
    );
  }
}
