import React from 'react';

export default class Tenant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className='areaName'>{this.props.state.areas.areaName}</h2>
      </div>
    );
  }
}
