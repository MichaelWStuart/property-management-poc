import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import ImagePreview from 'react-image-preview';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Issue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false, pictures: {}}
    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
  handleClose() {
    this.setState({open: false}); }

  render() {
    console.log(this.props)
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
      labelStyle={{color: 'red'}}
    />,
    <RaisedButton
      containerElement='label'
      label='Upload'>
      <ImagePreview />
    </RaisedButton>
  ];
    return (

      <TableRow>
        <td>
          {this.props.issue.issueName}
        </td>
        <td>
          {this.props.issue.conditionDefault}
        </td>
        <td>
          <Toggle
            iconStyle={{width: '46px'}}
            thumbStyle={{backgroundColor: 'green'}}
            trackStyle={{backgroundColor: '#A5D6A7'}}
            thumbSwitchedStyle={{backgroundColor: 'red'}}
            trackSwitchedStyle={{backgroundColor: '#ff9d9d'}}
            onToggle={this.handleToggle.bind(this)}
          />
        </td>
        <Dialog
          title='Upload'
          modal={true}
          actions={actions}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onRequestClose={this.handleClose}
          >
          <ImagePreview />
          </Dialog>
      </TableRow>


    );
  }
}

export default Issue;
