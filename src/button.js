import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './style/main.scss'

const testButton = () => (
  <RaisedButton label="Primary"/>
);

export default testButton;
