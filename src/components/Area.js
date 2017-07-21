import React from 'react';
import Issue from './issue';

const generateKey = () => Math.random();

export const Area = props => (
  <li>
    <h2 className='area-name'>{props.areaName}</h2>
    <table>
      <tr>
        <th></th>
        <th>Condition</th>
        <th>Pass/Fail</th>
      </tr>
      {props.issues.map(issue =>
        <Issue
          className='issue'
          key={generateKey()}
          issue={issue}
        />
      )}
    </table>
  </li>
);
