import React from 'react';
import Areas from './Areas';
import Header from './header';
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
      <div>
        <Header />
        <Areas
          className='areas'
          areas={this.state.areas} />
        <div style={{textAlign: 'center', margin: '2em'}}>
          <MuiThemeProvider>
            <RaisedButton href="/" label="Approve" labelColor='#4476b2' buttonStyle={{width: '30vw', border: '1px solid #4476b2', fontWeight: 'bold', backgroundColor: 'rgb(255, 255, 255)'}}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
