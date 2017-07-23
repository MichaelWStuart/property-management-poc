import React from 'react';
import Areas from './Areas';
import Header from './header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import data from '../../data.json';
import TenantContainer from './tenant-container.js';

const generateKey = () => Math.random();

export default class Manager extends React.Component {
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
        {this.state.tenants.map(tenant => <TenantContainer areas={this.state.areas} tenant={tenant} key={generateKey()} />)}
        <div style={{textAlign: 'center', margin: '2em'}}>
          <MuiThemeProvider>
            <RaisedButton href="/boss" label="Approve" labelColor={"#4476b2"} buttonStyle={{width: '30vw', border: '1px solid #4476b2', fontWeight: 'bold', backgroundColor: 'rgb(255, 255, 255)'}}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
