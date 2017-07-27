import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';


export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      open: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleOpen(e) {
    this.setState({ open: true});
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  clearForm() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <MuiThemeProvider>
          <Dialog
            title="Please Enter Password"
            modal={false}
            open={this.state.open}
            style={{textAlign: 'center'}}
          >
            <form onSubmit={(e) => this.props.testPassword(e, this.state.value, this.clearForm)}>
              <TextField name='password' onChange={this.handleChange} value={this.state.value} type='password' underlineFocusStyle={{borderColor: '#4476b2'}}/>
              <RaisedButton type='submit' label='Login' style={{display: 'block', width: '50%', margin: '0 auto'}}/>
            </form>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}
