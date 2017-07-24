import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styleButton = {
  backgroundColor: '#4476b2',
  margin: 0,
  position: 'relative',
};

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  render(){
    document.body.style.backgroundImage = 'radial-gradient(circle, rgb(182, 202, 222), rgb(51,87,129)';
    return (
      <div style={{height: '100vh', overflow: 'hidden', width: 'auto'}}>
        <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto'}}>
          <img src='https://s3-us-west-2.amazonaws.com/podpodpod/pod-logo-smaller.png' style={{height: '30vh'}}/>
        </div>
        <MuiThemeProvider>
          <RaisedButton href="/tenant" label="Welcome" labelColor={'#4476b2'} buttonStyle={{border: '1px solid #4476b2', fontWeight: 'bold', backgroundColor: 'rgb(255, 255, 255)', position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto'}}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Landing;
