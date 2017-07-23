import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styleButton = {
  backgroundColor: '#4476b2',
  margin: 0,
  position: 'relative',
};

class Footer extends React.Component{
  render(){
    return (
      <div style={{color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, zIndex: 10, height: '5em', width: '100%', padding: '0.5em', backgroundColor: '#4476b2'}}>
        <img src='https://s3-us-west-2.amazonaws.com/podpodpod/calhoun-logo-alpha-white.png' style={{height: '2em', position: 'fixed', bottom: '1vh', right: '3vw'}} />
        © 2017 Vertical - All Rights Reserved.
      </div>
    );
  }
}

export default Footer;
