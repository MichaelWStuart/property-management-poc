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
import { withRouter } from 'react-router-dom';

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
      disabledSubmit: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state)
    // let podpodpod, path, areaIndex, issueIndex;
    // if(this.props.location.pathname === '/manager' || this.props.location.pathname === '/boss') {
    //   podpodpod = JSON.parse(localStorage.getItem('podpodpod'));
    //   podpodpod.areas.forEach((area, aI) => {
    //     if(area.areaName === this.props.area.areaName) {
    //       area.issues.forEach((issue, iI) => {
    //         if(issue.issueName === this.props.issue.issueName) {
    //           areaIndex = aI;
    //           issueIndex = iI;
    //         }
    //       });
    //     }
    //   });
    //   path = podpodpod.areas[areaIndex].issues[issueIndex];
    //   if(this.props.location.pathname === '/manager') {
    //     path.conditionCurrent = path.conditionCurrent === 'pass' ? 'fail' : 'pass';
    //     path.localPhotoURI = '';
    //   }
    //   else
    //     path.whoPays = path.whoPays === 'tenant' ? 'boss' : 'tenant';
    //   console.log('podpodpod', podpodpod);
    // } else {
    //   podpodpod = Object.assign({}, data);
    //   path = podpodpod.areas[this.props.areaIndex].issues[this.props.issueIndex];
    //   path.conditionCurrent = this.state.conditionCurrent;
    //   path.localPhotoURI = this.state.localPhotoURI;
    //   path.lineItems = this.state.value;
    // }
    // localStorage.setItem('podpodpod', JSON.stringify(podpodpod));
  }

  handleChange(e) {
    this.setState({ value: e.target.value, disabledSubmit: false });
  }

  handleSubmit(e) {
    console.log('submit')
    // e.preventDefault();
    // this.setState({ open: false });
  }

  handleToggle() {
    console.log('toggle')
    // if(this.props.location.pathname === '/manager' || this.props.location.pathname === '/boss') {
    //   this.setState({ localPhotoURI: '', toggled: !this.state.toggled });
    // } else {
    //   const newState = this.state.file ? { file: '', localPhotoURI: '', value: '', conditionCurrent: 'fail' } : { open: !this.state.open, conditionCurrent: 'fail' };
    //   this.setState(Object.assign({}, newState, { toggled: !this.state.toggled }));
    // }
  }

  handleClose(e) {
    console.log('close')
    // const newState = e.target.innerHTML === 'Cancel' ? {file: '', localPhotoURI: '', value: '', conditionCurrent: 'fail'} : {};
    // this.setState(Object.assign({}, newState, {open: false, toggled: false}));
  }

  _handleImageChange(e) {
    e.preventDefault();
    console.log('handle image change')
    // let reader = new FileReader();
    // let file = e.target.files[0];
    //
    // reader.onloadend = () => {
    //   this.setState({
    //     file: file,
    //     localPhotoURI: reader.result,
    //   });
    // };
    //
    // reader.readAsDataURL(file);
  }

  render() {
    let podpodpod, areaIndex, issueIndex, path;
    let {localPhotoURI} = this.state;
    let $localPhotoURI = null;

    if (localPhotoURI) {
      $localPhotoURI = (<img src={localPhotoURI} style={{width: '100%'}}/>);
    } else {
      $localPhotoURI = (<div className="previewText">Please Select an Image</div>);
    }

    if(this.props.location.pathname === '/manager' || this.props.location.pathname === '/boss') {
      podpodpod = JSON.parse(localStorage.getItem('podpodpod'));
      podpodpod.areas.forEach((area, aI) => {
        if(area.areaName === this.props.area.areaName) {
          area.issues.forEach((issue, iI) => {
            if(issue.issueName === this.props.issue.issueName) {
              areaIndex = aI;
              issueIndex = iI;
            }
          });
        }
      });
      path = podpodpod.areas[areaIndex].issues[issueIndex];
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
        disabled={this.state.disabledSubmit}
        onTouchTap={this.handleSubmit}
        labelStyle={{color: '#4476b2'}}
      />
    );

    const photoURIStyle = this.props.location.pathname === '/boss' ? {display: 'none'} : {width: '30px', height: '30px'};

    return (

      <ListItem
        primaryText={this.props.issue.issueName}
        secondaryText={this.props.issue.conditionDefault}
        hoverColor='rgba(182,202,222,.75)'
        innerDivStyle={{padding: '0'}}
        rightToggle={<span><Toggle
          toggled={(this.props.location.pathname === '/manager' && localPhotoURI) ? !this.state.toggled : this.state.toggled}
          iconStyle={{width: '46px'}}
          thumbStyle={{backgroundColor: 'green'}}
          trackStyle={{backgroundColor: '#A5D6A7'}}
          thumbSwitchedStyle={{backgroundColor: 'red'}}
          trackSwitchedStyle={{backgroundColor: '#ff9d9d'}}
          onToggle={this.handleToggle.bind(this)}
        />
        {localPhotoURI && this.state.toggled === false && (this.props.location.pathname !== '/tenant') && <img src={localPhotoURI} style={photoURIStyle} />}
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
          modal={true}
          actions={actions}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          repositionOnUpdate={false}
          style={{paddingTop: '0'}}
        >
          <div className="imgPreview" style={{float: 'left', height: '100%'}}>
            {$localPhotoURI}
          </div>
          <TextField
            onChange={this.handleChange}
            value={this.state.value}
            hintText="Comments"
            floatingLabelText="Describe comment"
            multiLine={true}
            rows={2}
            style={{float: 'right', width: '100%'}}
            floatingLabelStyle={{color: '#4476b2'}}
            floatingLabelFocusStyle={{color: '#4476b2'}}
            underlineFocusStyle={{borderColor: '#4476b2'}}
            errorText='Comment Required'
          />

        </Dialog>
        {localPhotoURI && this.state.toggled === false && (this.props.location.pathname === '/boss') && <img src={localPhotoURI} style={{width: '100%', height: '100%'}} />}

      </ListItem>
    );
  }
}

export default withRouter(Issue);
