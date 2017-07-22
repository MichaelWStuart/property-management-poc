import React from 'react';
import Areas from './Areas';
import data from '../../data.json';

export default class Tenant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(data);
  }

  render() {
    return (
      <div>
        <Areas
          className='areas'
          areas={this.state.areas} />
        <button>Submit</button>
      </div>
    );
  }
}
