import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TenantInfo from '../Tenant-Info';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render(){
    return (
      <div>
        <TenantInfo open={this.state.open} onToggleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}

export default Header;
