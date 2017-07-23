import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <div style={{color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, zIndex: 10, height: '3em', width: '100%', padding: '0.5em', backgroundColor: '#4476b2'}}>
        <img src='https://s3-us-west-2.amazonaws.com/podpodpod/calhoun-logo-alpha-white.png' style={{height: '3em', position: 'absolute', bottom: '3vh', left: '3vw'}} />
        <p style={{fontSize: '0.7em', position: 'absolute', bottom: '0vh', left: '3vw'}}>© 2017 - All Rights Reserved.</p>
        <div style={{position: 'absolute', bottom: '-0.5em', right: '2em'}}>
          <a href='mailto:leasing@apodment.com'>
            <i className="fa fa-envelope" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', position: 'absolute', bottom: '1.2em', right: '4.4em'}}>
            </i>
          </a>
          <a href='https://www.facebook.com/apodment.suites'>
            <i className="fa fa-facebook-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', position: 'absolute', bottom: '1.2em', right: '3.2em'}}>
            </i>
          </a>
          <a href='https://twitter.com/aPodments'>
            <i className="fa fa-twitter-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', position: 'absolute', bottom: '1.2em', right: '2em'}}>
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
