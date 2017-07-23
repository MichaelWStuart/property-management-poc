import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// import IconMenu from 'material-ui/IconMenu';
// import MenuIcon from 'material-ui/svg-icons/navigation/menu';
// import IconButton from 'material-ui/IconButton';
// import MenuItem from 'material-ui/MenuItem';
// import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

const styleButton = {
  backgroundColor: '#4476b2',
  margin: 0,
  position: 'relative',
};

// const stylePositionMiddle =

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  render(){
    return (
      <div style={{height: '100vh', overflow: 'hidden', width: 'auto', backgroundImage: 'radial-gradient(circle, rgb(182, 202, 222), rgb(51,87,129)'}}>
        <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto'}}>
          <img src='https://github.com/skyfriends/podpodpod/blob/master/src/components/pod-logo.png?raw=true' style={{height: '30vh'}}/>
        </div>
        <MuiThemeProvider>
          <RaisedButton label="Welcome" buttonStyle={{backgroundColor: 'rgb(255, 255, 255)', position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto'}}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Landing;
