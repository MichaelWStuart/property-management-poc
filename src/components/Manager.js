import React from 'react';
import Areas from './Areas';
import Header from './header';

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
      </div>
    );
  }
}
