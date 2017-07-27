import React from 'react';
import MediaQuery from 'react-responsive';

class Footer extends React.Component{
  render(){
    return (
      <div style={{color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, zIndex: 10, height: '4em', width: '100%', paddingTop: '0.5em', paddingBottom: '0.5em', backgroundColor: '#4476b2'}}>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div style={{display: 'inlineBlock', float: 'left', margin: '0 auto', paddingLeft: '1em', width: '(100/3)%', height: '3em', transform: 'translateY(-1em)'}}>
            <img src='https://s3-us-west-2.amazonaws.com/podpodpod/calhoun-logo-alpha-white.png' style={{height: '3em'}} />
            <p style={{fontFamily: 'Roboto', fontSize: '0.7em', transform: 'translateY(-1.2em)'}}>© 2017 - All Rights Reserved.</p>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div style={{display: 'inlineBlock', float: 'left', fontSize: '0.7em', width: '(100/3)%', textAlign: 'left', paddingLeft: '5vw'}}>
            <p style={{fontFamily: 'Roboto', fontWeight: 100, margin: 0}}>Office Hours: 9:00 am to 5:00 pm PT (weekdays)</p>
            <p style={{fontFamily: 'Roboto', fontWeight: 100, margin: 0}}>Mail: P.O. Box 95558, Seattle, WA 98145</p>
            <p style={{fontFamily: 'Roboto', fontWeight: 100, margin: 0}}>Phone: (206) 801-3570</p>
            <p style={{fontFamily: 'Roboto', fontWeight: 100, margin: 0}}>Fax: (206) 322-3374</p>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div style={{width: '(100/3)%', display: 'inlineBlock', float: 'right', textAlign: 'center', paddingTop: '0.5em'}}>
            <a href='https://twitter.com/aPodment'>
              <i className="fa fa-twitter-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', padding: '0.2em'}}>
              </i>
            </a>
            <a href='https://www.facebook.com/apodment.suites'>
              <i className="fa fa-facebook-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', padding: '0.2em'}}>
              </i>
            </a>
            <a href='mailto:leasing@apodment.com'>
              <i className="fa fa-envelope" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', padding: '0.2em'}}>
              </i>
            </a>
            <a href='tel:2068013570'>
              <i className="fa fa-phone-square" aria-hidden="true" style={{color: 'white', fontSize: '1.5em', padding: '0.2em', marginRight: '2em'}}>
              </i>
            </a>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1223px)'>
          <div style={{width: '(100/3)%', display: 'block', textAlign: 'center', transform: 'translateX(-1%)'}}>
            <a href='https://twitter.com/aPodment'>
              <i className="fa fa-twitter-square" aria-hidden="true" style={{color: 'white', fontSize: '2em', padding: '0.3em'}}>
              </i>
            </a>
            <a href='https://www.facebook.com/apodment.suites'>
              <i className="fa fa-facebook-square" aria-hidden="true" style={{color: 'white', fontSize: '2em', padding: '0.3em'}}>
              </i>
            </a>
            <a href='mailto:leasing@apodment.com'>
              <i className="fa fa-envelope" aria-hidden="true" style={{color: 'white', fontSize: '2em', padding: '0.3em'}}>
              </i>
            </a>
            <a href='tel:2068013570'>
              <i className="fa fa-phone-square" aria-hidden="true" style={{color: 'white', fontSize: '2em', padding: '0.3em'}}>
              </i>
            </a>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Footer;
