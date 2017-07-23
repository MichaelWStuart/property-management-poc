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
// import './style/main.scss';

injectTapEventPlugin();
document.body.style.overflow = 'hidden';

const App = () => (
  <BrowserRouter>
    <div>
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
