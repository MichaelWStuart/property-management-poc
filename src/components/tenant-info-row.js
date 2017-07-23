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
            <TableRow style={{height: 0}}>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Move In Date</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Move Out Date</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Lock Change Date</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Ready-To-Rent Date</TableHeaderColumn>
            </TableRow>
            <TableRow style={{height: '45px'}}>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.startDate}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.vacateDate}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.lockChangeDate}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.readyToRentDate}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Table>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow style={{height: 0}}>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Move In Deposit</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Deposit Refundable</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Rent Due</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Damages</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Cleaning Fees</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Refund Owed</TableHeaderColumn>
            </TableRow>
            <TableRow style={{height: '45px'}}>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.moveInDeposit}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.nonRefundable === 'True' ? 'False' : 'True'}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.rentDue}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.damages}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.cleaningFees}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.refundOwed}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Table>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow style={{height: 0}}>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Phone Number</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Email</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Manager Remarks</TableHeaderColumn>
              <TableHeaderColumn style={{fontWeight: 'bold', color: 'black', height: 0}}>Other</TableHeaderColumn>
            </TableRow>
            <TableRow style={{height: '45px'}}>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.phoneNumber}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.email}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.managerRemarks}</TableRowColumn>
              <TableRowColumn style={{height: '45px'}}>{props.tenant.other}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
    </CardText>
  </Card>
);

export default TenantInfoRow;
