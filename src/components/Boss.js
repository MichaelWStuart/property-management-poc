import React from 'react';
import Areas from './Areas';

export default class Boss extends React.Component {
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
