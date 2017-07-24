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
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

import Area from './Area.js';

const generateKey = () => Math.random();

const TenantInfoList = props => (
  <Card>
    <CardHeader
      title={<strong>Tenant Info</strong>}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <MuiThemeProvider>
        <List>
          <ListItem
            primaryText='Lease Start Date'
            secondaryText={props.tenant.startDate}
            hoverColor='rgba(182,202,222,.75)'
          />
          <ListItem
            primaryText='Vacate Date'
            secondaryText={props.tenant.vacateDate}
            hoverColor='rgba(182,202,222,.75)'
          />
          <ListItem
            primaryText='Lock Change Date'
            secondaryText={props.tenant.lockChangeDate}
            hoverColor='rgba(182,202,222,.75)'
          />
          <ListItem
            primaryText='Lease Start Date'
            secondaryText={props.tenant.startDate}
            hoverColor='rgba(182,202,222,.75)'
          />
        </List>
      </MuiThemeProvider>
    </CardText>
  </Card>
);

export default TenantInfoList;
