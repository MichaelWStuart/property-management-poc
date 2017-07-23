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

const TenantInfoRow = props => (
  <Card>
    <CardHeader
      title={<strong>Resident Info</strong>}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <MuiThemeProvider>
        <Table>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Move In Date</TableHeaderColumn>
              <TableHeaderColumn>Move Out Date</TableHeaderColumn>
              <TableHeaderColumn>Lock Change Date</TableHeaderColumn>
              <TableHeaderColumn>Ready-To-Rent Date</TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{props.tenant.startDate}</TableRowColumn><TableRowColumn>{props.tenant.vacateDate}</TableRowColumn><TableRowColumn>{props.tenant.lockChangeDate}</TableRowColumn><TableRowColumn>{props.tenant.readyToRentDate}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Table>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Move In Deposit</TableHeaderColumn>
              <TableHeaderColumn>Deposit Refundable</TableHeaderColumn>
              <TableHeaderColumn>Rent Due</TableHeaderColumn>
              <TableHeaderColumn>Damages</TableHeaderColumn>
              <TableHeaderColumn>Cleaning Fees</TableHeaderColumn>
              <TableHeaderColumn>Refund Owed</TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{props.tenant.moveInDeposit}</TableRowColumn><TableRowColumn>{props.tenant.nonRefundable === 'True' ? 'False' : 'True'}</TableRowColumn><TableRowColumn>{props.tenant.rentDue}</TableRowColumn><TableRowColumn>{props.tenant.damages}</TableRowColumn><TableRowColumn>{props.tenant.cleaningFees}</TableRowColumn><TableRowColumn>{props.tenant.refundOwed}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Table>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Phone Number</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Manager Remarks</TableHeaderColumn>
              <TableHeaderColumn>Other</TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{props.tenant.phoneNumber}</TableRowColumn><TableRowColumn>{props.tenant.email}</TableRowColumn><TableRowColumn>{props.tenant.managerRemarks}</TableRowColumn><TableRowColumn>{props.tenant.other}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
    </CardText>
  </Card>
);

export default TenantInfoRow;
