import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import TenantInfo from '../Tenant-Info'

injectTapEventPlugin()

const DotHam = (props) => (
<IconMenu
  {...props}
  iconButtonElement={
    <IconButton><MenuIcon color={'white'} /></IconButton>
  }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
>

  <TenantInfo />
</IconMenu>
);


const AppNav = () => (
  <MuiThemeProvider>
  <AppBar
    title="Apodment "
    iconElementRight={<DotHam />}
    showMenuIconButton={false}
    style={{height: '5 em', backgroundColor: '#4476b2'}}
    titleStyle={{fontSize:'2em'}}
    />
  </MuiThemeProvider>
);

export default AppNav;
