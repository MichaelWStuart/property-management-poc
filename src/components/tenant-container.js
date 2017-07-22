import React from 'react';
import Issue from './Issue';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Area from './Area.js';

const generateKey = () => Math.random();

const TenantContainer = props => (
  <div className='tenant-container-title'>
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title={props.tenant.residentName}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <MuiThemeProvider>
            <Table>
              <TableBody
                displayRowCheckbox={false}>
                {props.areas.map(area =>
                  <Area
                    className='area'
                    key={generateKey()}
                    area={area}
                  />
                )}
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </CardText>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default TenantContainer;
