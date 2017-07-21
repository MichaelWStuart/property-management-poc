import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/header'
=======
>>>>>>> 6fd75a40f643a8ccf874b0960e9e8fa4223b966d

import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
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

=======
        <Switch>
          <Route exact path={'/boss'} component={Boss} />
          <Route exact path={'/manager'} component={Manager} />
          <Route exact path={'/tenant'} component={Tenant} />
        </Switch>
>>>>>>> 6fd75a40f643a8ccf874b0960e9e8fa4223b966d
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
