import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import data from '../../data.json';
import Snackbar from 'material-ui/Snackbar';

const generateKey = () => Math.random();

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      file: '',
      localPhotoURI: '',
      value: '',
      toggled: false,
      conditionCurrent: 'pass',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    let podpodpod, path;
    if(this.props.comingFromBoss === true) {
      podpodpod = JSON.parse(localStorage.getItem('podpodpod'));
      path = podpodpod.areas[this.props.areaIndex].issues[this.props.issueIndex];
      path.whoPays = path.whoPays === 'tenant' ? 'boss' : 'tenant';
      console.log('podpodpod', podpodpod);
    } else {
      podpodpod = Object.assign({}, data);
      path = podpodpod.areas[this.props.areaIndex].issues[this.props.issueIndex];
      path.conditionCurrent = this.state.conditionCurrent;
      path.localPhotoURI = this.state.localPhotoURI;
      path.lineItems = this.state.value;
    }
    localStorage.setItem('podpodpod', JSON.stringify(podpodpod));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ open: false });
  }

  handleToggle() {
    if(this.props.comingFromBoss === true) {
      this.setState({ toggled: !this.state.toggled });
    } else {
      const newState = this.state.file ? { file: '', localPhotoURI: '', value: '', conditionCurrent: 'fail' } : { open: !this.state.open, conditionCurrent: 'fail' };
      this.setState(Object.assign({}, newState, { toggled: !this.state.toggled }));
    }
  }

  handleClose(e) {
    const newState = e.target.innerHTML === 'Cancel' ? {file: '', localPhotoURI: '', value: '', conditionCurrent: 'fail'} : {};
    this.setState(Object.assign({}, newState, {open: false, toggled: false}));
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        localPhotoURI: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let {localPhotoURI} = this.state;
    let $localPhotoURI = null;

    if (localPhotoURI) {
      $localPhotoURI = (<img src={localPhotoURI} style={{width: '100%'}}/>);
    } else {
      $localPhotoURI = (<div className="previewText">Please Select an Image</div>);
    } 

    if(this.props.comingFromBoss) {
      let podpodpod = JSON.parse(localStorage.getItem('podpodpod'));
      let path = podpodpod.areas[this.props.areaIndex].issues[this.props.issueIndex];
      localPhotoURI = path.localPhotoURI;
    }

    const actions = [
      <FlatButton
        key={generateKey()}
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        labelStyle={{color: 'red'}}
      />,
      <RaisedButton
        key={generateKey()}
        containerElement='label'
        label='Upload'
        onTouchTap={this.handleU}>
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput"
              type="file"
              onChange={(e)=>this._handleImageChange(e)}
              style={{display:'none'}}/>
          </form>
        </div>
      </RaisedButton>,
    ];

    this.state.file && actions.pop();
    this.state.file && actions.push(
      <FlatButton
        key={generateKey()}
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
        labelStyle={{color: '#4476b2'}}
      />
    );

    return (

      <ListItem
        primaryText={this.props.issue.issueName}
        secondaryText={this.props.issue.conditionDefault}
        hoverColor='rgba(182,202,222,.75)'
        rightToggle={<span><Toggle
          toggled={this.state.toggled}
          iconStyle={{width: '46px'}}
          thumbStyle={{backgroundColor: 'green'}}
          trackStyle={{backgroundColor: '#A5D6A7'}}
          thumbSwitchedStyle={{backgroundColor: 'red'}}
          trackSwitchedStyle={{backgroundColor: '#ff9d9d'}}
          onToggle={this.handleToggle.bind(this)}
        />
        {localPhotoURI ? <img src={localPhotoURI} style={{width: '30px', height: '30px'}} /> : null}
        </span>
        }
      >

        <Snackbar
          open={!this.state.open && this.state.localPhotoURI ? true : false}
          message="Photo Added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{backgroundColor: 'green'}}
        />

        <Dialog
          title='Upload'
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onRequestClose={this.handleClose}
          repositionOnUpdate={true}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
        >
          <div className="imgPreview" style={{float: 'left'}}>
            {$localPhotoURI}
          </div>
          <TextField
            onChange={this.handleChange}
            value={this.state.value}
            hintText="Comments"
            floatingLabelText="Describe comment"
            multiLine={true}
            rows={8}
            style={{float: 'right', width: '100%'}}
            floatingLabelStyle={{color: '#4476b2'}}
            floatingLabelFocusStyle={{color: '#4476b2'}}
            underlineFocusStyle={{borderColor: '#4476b2'}}
          />

        </Dialog>
      </ListItem>
    );
  }
}

export default Issue;
