import React from 'react';
import Areas from './Areas';
import data from '../../data.json';
import TenantContainer from './tenant-container.js';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(data);
  }

  render() {
    return (
      <TenantContainer />
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
