import React from 'react';
import Issue from './Issue';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  List,
  ListItem,
  Divider,
} from 'material-ui/List';

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
            <List>
              <ListItem disabled={true}>
                <span>Issue Name</span>
                <span>Condition</span>
                <span>Pass/Fail</span>
              </ListItem>
              {props.area.issues.map(issue =>
                <Issue
                  key={generateKey()}
                  issue={issue}
                />
              )}
            </List>
          </MuiThemeProvider>
        </CardText>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default Area;
