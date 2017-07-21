import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DotHam = (props) => (
<IconMenu
  {...props}
  iconButtonElement={
    <IconButton><MoreVertIcon /></IconButton>
  }
  targetOrigin={{horizontal: 'right', vertical: 'top'}}
  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
>
  <MenuItem primaryText="list1" />
  <MenuItem primaryText="list2" />
  <MenuItem primaryText="list3" />
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
    iconStyleRight={{fontColor: 'white'}}
    />
  </MuiThemeProvider>
);

export default AppNav;
