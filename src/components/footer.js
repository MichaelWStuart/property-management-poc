import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import IconButton from 'material-ui/IconButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component{
  render(){
    return (
      <div style={{color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, zIndex: 10, height: '3em', width: '100%', padding: '0.5em', backgroundColor: '#4476b2'}}>
        <img src='https://s3-us-west-2.amazonaws.com/podpodpod/calhoun-logo-alpha-white.png' style={{height: '3em', position: 'absolute', bottom: '1vh', left: '3vw'}} />
        <div style={{position: 'absolute', bottom: '0.1em', right: '2em'}}>
          <p style={{fontSize: '0.7em'}}>© 2017 Vertical - All Rights Reserved.</p>
          <a href='https://www.facebook.com/apodment.suites'>
            <i className="fa fa-facebook-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', position: 'absolute', bottom: '1.2em', right: '2em'}}>
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;

// <MuiThemeProvider>
//   <IconButton style={{postion: 'absolute', bottom: '1vh', right: '3vw', zIndex: 15}}>
//     <i className="fa fa-facebook-square" aria-hidden="true"></i>
//   </IconButton>
// </MuiThemeProvider>
