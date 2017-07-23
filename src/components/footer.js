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
      <div style={{color: 'white', textAlign: 'center', clear: 'both', position: 'fixed', bottom: 0, zIndex: 10, height: '1.5em', width: '100vw', padding: '0.5em', backgroundColor: "#4476b2"}}>© 2017 Vertical - All Rights Reserved.
      </div>
    );
  }
}

export default Footer;
