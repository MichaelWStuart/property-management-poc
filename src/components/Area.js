import React from 'react';
import Issue from './Issue';

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
      {props.area.issues.map((issue, i) =>
        <Issue
          className='issue'
          key={generateKey()}
          app={props.app}
          issue={issue}
          issueIndex={i}
          areaIndex={props.areaIndex}
        />
      )}
      </tbody>
    </table>
  </li>
);

export default Area;
