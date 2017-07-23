import React from 'react';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';


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
          <Drawer
            docked={false}
            width={'70%'}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Tenant Name</h2></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><h2>Property</h2></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><h3>Unit #</h3></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Phone #</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Email</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Start Date</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Vacate Date</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Lock Change Date</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Ready to Rent Date</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Move-In Deposit</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Non-Refundable</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Rent Due</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Damages</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Cleaning Fees</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Other</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Refund Owed</p></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><p>Manager Remarks</p></MenuItem>

          </Drawer>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBar   title="aPodment"
            titleStyle={{fontSize:'3em', fontWeight: '100'}}
            style={{height: '4em', backgroundColor: '#4476b2', position: 'fixed', top: 0}}
            onRightIconButtonTouchTap={this.handleToggle.bind(this)}
            iconElementRight={<IconButton><MenuIcon /></IconButton>}
            showMenuIconButton={false}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
