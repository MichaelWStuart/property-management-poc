import React from 'react';
import Issue from './Issue';

const generateKey = () => Math.random();

const Area = props => (
  <li>
    <h2 className='area-name'>{props.area.areaName}</h2>
    <table>
      <tr>
        <th></th>
        <th>Condition</th>
        <th>Pass/Fail</th>
      </tr>
      {props.area.issues.map(issue =>
        <Issue
          className='issue'
          key={generateKey()}
          issue={issue}
        />
      )}
    </table>
  </li>
);

export default Area;
