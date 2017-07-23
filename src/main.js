import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//eslint-disable-next-line
import Header from './components/header'
import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={'/tenant'} component={Tenant} />
        <Route exact path={'/manager'} component={Manager} />
        <Route exact path={'/boss'} component={Boss} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
