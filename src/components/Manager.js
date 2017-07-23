import React from 'react';
import Areas from './Areas';
import Header from './header';
import data from '../../data.json';

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
        <Areas
          className='areas'
          areas={this.state.areas} />
        <button>Approve</button>
      </div>
    );
  }
}
