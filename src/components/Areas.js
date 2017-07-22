import React from 'react';
import Area from './Area';

const generateKey = () => Math.random();

class Areas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const areas = this.props.areas.filter((area, i, a) => {
      return !((this.props.view === 'tenant') && (i === a.length - 1));
    });
    return (
      <ul>
        {areas.map(area =>
          <Area
            className='area'
            key={generateKey()}
            area={area}
          />
        )}
      </ul>
    );
  }
}

export default Areas;
