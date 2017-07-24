import React from 'react';
import Areas from './Areas';
import Header from './header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TenantContainer from './tenant-container.js';

const generateKey = () => Math.random();

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(JSON.parse(localStorage.getItem('podpodpod')));
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <Header />
        {this.state.tenants.map(tenant =>
          <TenantContainer
            key={generateKey()}
            areas={this.state.areas}
            tenant={tenant}
          />
        )}
        <div style={{textAlign: 'center', margin: '2em'}}>
          <MuiThemeProvider>
            <RaisedButton href="/boss" label="Approve" labelColor='#4476b2' buttonStyle={{width: '30vw', border: '1px solid #4476b2', fontWeight: 'bold', backgroundColor: 'rgb(255, 255, 255)'}}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
