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

              {props.area.issues.map((issue, issueIndex) =>
                <Issue
                  issueIndex={issueIndex}
                  areaIndex={props.areaIndex}
                  key={generateKey()}
                  issue={issue}
                  area={props.area}
                  comingFromBoss={props.comingFromBoss}
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
