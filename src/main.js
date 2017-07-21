import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js'

import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={''} component={Header} />
          <Route exact path={'/boss'} component={Boss} />
          <Route exact path={'/manager'} component={Manager} />
          <Route exact path={'/tenant'} component={Tenant} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
