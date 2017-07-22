import React from 'react';
import Areas from './Areas';
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
      this.state.tenants.map(tenant => <TenantContainer areas={this.state.areas} tenant={tenant} key={generateKey()} />)
    );
  }
}

// <div>
// <Areas
// className='areas'
// app={this.props.app}
// areas={this.props.areas} />
// <button>Approve</button>
// </div>
