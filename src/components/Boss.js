import React from 'react';
import Areas from './Areas';
import Header from './header';
import Footer from './footer';
import data from '../../data.json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Boss extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.setState(data);
  }

  render() {
    return (
      <div style={{minHeight: '100%', position: 'relative'}}>
        <Header />
        <h1 style={{color: 'white', zIndex: 10}}> Director's Dashboard </h1>
        <div style={{paddingBottom: '5em'}}>
          <Areas
            className='areas'
            areas={this.state.areas} />
          <div style={{textAlign: 'center', margin: '2em'}}>
            <MuiThemeProvider>
              <RaisedButton href="/" label="Approve" labelColor={"#4476b2"} buttonStyle={{width: '30vw', border: '1px solid #4476b2', fontWeight: 'bold', backgroundColor: 'rgb(255, 255, 255)'}}/>
            </MuiThemeProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
