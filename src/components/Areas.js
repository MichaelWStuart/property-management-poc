import React from 'react';
import Area from './Area';

const generateKey = () => Math.random();

const Areas = props => (
  <ul>
    {props.areas.map((area, i) =>
      <Area
        className='area'
        key={generateKey()}
        app={props.app}
        area={area}
        areaIndex={i} />)}
  </ul>
);

export default Areas;
