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
import TenantInfoRow from './tenant-info-row.js';
import TenantInfoList from './tenant-info-list.js';

const generateKey = () => Math.random();

const TenantContainer = props => (
  <div className='tenant-container-title'>
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title={props.tenant.tenantName}
          subtitle={`Property: ${props.tenant.property} | Unit Number: ${props.tenant.unitNumber}`}
          actAsExpander={props.tenantIndex === 0 ? true : false}
          showExpandableButton={props.tenantIndex === 0 ? true : false}
        />
        <CardText expandable={true}>
          <MuiThemeProvider>
            <Table>
              <TableBody
                displayRowCheckbox={false}>
                <TenantInfoList tenant={props.tenant} />
                <Card>
                  <CardHeader
                    title={<strong>Move In Form</strong>}
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
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </CardText>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default TenantContainer;
