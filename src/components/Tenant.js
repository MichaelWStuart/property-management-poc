import React from 'react';

import Areas from './Areas';

export default class Tenant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Areas areas={this.props.areas} />
        <button>Submit</button>
      </div>
    );
  }
}
