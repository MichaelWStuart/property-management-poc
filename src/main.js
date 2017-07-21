import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header'

import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
          <TenantInfo app={this.getApp()} />
          <Switch>
           <Route
            exact
            path={'/tenant'}
            component={() => <Tenant app={this.getApp()} />} />
           <Route
            exact
            path={'/manager'}
            component={() => <Manager app={this.getApp()} />} />
           <Route
            exact
            path={'/boss'}
            component={() => <Boss app={this.getApp()} />} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
