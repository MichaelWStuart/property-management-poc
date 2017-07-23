import React from 'react';
// import IconMenu from 'material-ui/IconMenu';
// import MenuIcon from 'material-ui/svg-icons/navigation/menu';
// import IconButton from 'material-ui/IconButton';
// import MenuItem from 'material-ui/MenuItem';
// import Toggle from 'material-ui/Toggle';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  render(){
    return (
      <div style={{height: '100vh', backgroundColor: 'rgb(51,87,129)'}}>
        <div style={{}}>
          <img src='https://github.com/skyfriends/podpodpod/blob/master/src/components/apodments-logo-transparent.png?raw=true'/>
        </div>
      </div>
    );
  }
}

export default Landing;
