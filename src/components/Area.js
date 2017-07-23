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

const generateKey = () => Math.random();

const Area = props => (
  <div className='area-title'>
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title={props.area.areaName}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <MuiThemeProvider>
            <Table>
              <TableBody
                displayRowCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Issue Name</TableHeaderColumn>
                  <TableHeaderColumn>Condition</TableHeaderColumn>
                  <TableHeaderColumn>Pass/Fail</TableHeaderColumn>
                </TableRow>
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </CardText>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default Area;
