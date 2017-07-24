import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//eslint-disable-next-line
import Header from './components/header'
import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';
import Landing from './components/landing-page';

injectTapEventPlugin();

document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

const App = () => (
  <BrowserRouter>
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'scroll', minHeight: '101%'}}>
      <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route exact path={'/tenant'} component={Tenant} />
        <Route exact path={'/manager'} component={Manager} />
        <Route exact path={'/boss'} component={Boss} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
