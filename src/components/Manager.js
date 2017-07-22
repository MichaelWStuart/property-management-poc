import React from 'react';
import Areas from './Areas';

export default class Manager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Areas
          className='areas'
          app={this.props.app}
          areas={this.props.areas} />
        <button>Approve</button>
      </div>
    );
  }
}
