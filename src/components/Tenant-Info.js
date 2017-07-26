import React from 'react';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import MediaQuery from 'react-responsive';


export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }


  handleToggle() {
    this.setState({open: !this.state.open});
    console.log('open');
  }
  handleClose() { this.setState({open: false}); }
  render() {

    return (
      <div>
        <MuiThemeProvider>
          <MediaQuery query='(min-device-width: 1224px)'>
            <Drawer
              docked={false}
              open={this.state.open}
              width={'30%'}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Tenant Name: Bill Walters</h2></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Property: Fiora</h2></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h3>Unit #: D-7</h3></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Phone #: (206) 123-4567</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Email: bill@microinc.com</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Start Date: 05-12-2017</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Vacate Date: 05-12-2018</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Move-In Deposit: $450</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Rent: $785</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Non-Refundable Cleaning Fees: $125</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Refund Owed: $325</p></MenuItem>
            </Drawer>
          </MediaQuery>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MediaQuery query='(max-device-width: 1223px)'>
            <Drawer
              docked={false}
              open={this.state.open}
              width={'90%'}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Tenant Name: Bill Walters</h2></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Property: Fiora</h2></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><h3>Unit #: D-7</h3></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Phone #: (206) 123-4567</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Email: bill@microinc.com</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Start Date: 05-12-2017</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Vacate Date: 05-12-2018</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Move-In Deposit: $450</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Rent: $785</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Non-Refundable Cleaning Fees: $125</p></MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Refund Owed: $325</p></MenuItem>
            </Drawer>
          </MediaQuery>
        </MuiThemeProvider>
        <h2 style={{color: 'white', fontFamily: 'Roboto', fontWeight: 100, position: 'absolute', top: '-0.5em', left: '0.5em', zIndex: 10}}>a
          <img
            src='https://s3-us-west-2.amazonaws.com/podpodpod/pod-logo-smaller.png'
            style={{height: '1.5em', position: 'relative', top: '0.2em'}}
          />
        ment<span style={{fontSize: '0.6em', verticalAlign: 'top'}}>&reg;</span></h2>
        <MuiThemeProvider>
          <AppBar
            titleStyle={{fontSize:'3em', fontWeight: '100'}}
            style={{height: '4em', backgroundColor: '#4476b2', zIndex: 9}}
            onRightIconButtonTouchTap={this.handleToggle.bind(this)}
            iconElementRight={<IconButton><MenuIcon /></IconButton>}
            showMenuIconButton={false}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
