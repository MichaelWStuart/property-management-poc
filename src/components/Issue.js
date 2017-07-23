import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui/List';


const generateKey = () => Math.random();

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      file: '',
      imagePreviewUrl: '',
      value: '',
      toggled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ open: false });
  }

  handleToggle() {
    const newState = this.state.file ? { file: '', imagePreviewUrl: '', value: '' } : { open: !this.state.open };
    this.setState(Object.assign({}, newState, { toggled: !this.state.toggled }));
  }

  handleClose() {
    this.setState({open: false, toggled: false});
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width: '100%'}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please Select an Image</div>);
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
      />);

    return (

      <ListItem
        primaryText={this.props.issue.issueName}
        secondaryText={this.props.issue.conditionDefault}
        rightToggle={<Toggle
          toggled={this.state.toggled}
          iconStyle={{width: '46px'}}
          thumbStyle={{backgroundColor: 'green'}}
          trackStyle={{backgroundColor: '#A5D6A7'}}
          thumbSwitchedStyle={{backgroundColor: 'red'}}
          trackSwitchedStyle={{backgroundColor: '#ff9d9d'}}
          hoverColor='rgba(182,202,222,.75)'
          onToggle={this.handleToggle.bind(this)}/>}
        >

        {this.state.file && !this.state.open &&
          <span>
            <div className="imgPreview">{$imagePreview}</div>
            <div>{this.state.value}</div>
          </span>
        }
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
            {$imagePreview}
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
