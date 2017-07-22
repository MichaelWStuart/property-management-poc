import React from 'react';
<<<<<<< HEAD
=======
import Issue from './Issue';

>>>>>>> 1b6608338031d1688e3c77542989f7e5896db515
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
