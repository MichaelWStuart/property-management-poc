import React from 'react';
// import Issue from './Issue';

const generateKey = () => Math.random();

const Area = props => (
  <li>
    <h2 className='area-name'>{props.area.areaName}</h2>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Condition</th>
          <th>Pass/Fail</th>
        </tr>
      </tbody>
    </table>
  </li>
);

export default Area;
