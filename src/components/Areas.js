import React from 'react';
import Area from './area';

const generateKey = () => Math.random();

export const Areas = props => (
  <ul>
    {props.areas.map(area =>
      <Area
        className='area'
        key={generateKey()}
        area={area} />)}
  </ul>
);
