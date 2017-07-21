import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';
import TenantInfo from './components/Tenant-Info'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tenant: {
        residentName: '',
        email: '',
        phone: '',
        unitNumber: '',
        property: '',
        rentStartDate: '',
        unitVacateDate: '',
        unitLockChangeDate: '',
        unitReadyToRentDate: '',
        moveInDeposit: 0,
        nonRefundable: 0,
        rentDue: 0,
        damagesPayable: 0,
        cleaningFees: 0,
        other: '',
        refundOwed: 0,
        managerRemarks: '',
      }
    }
  }

    getApp(){
      return {
        state: this.state,
        setState: this.setState.bind(this),
      };
    }

   render() {
    return (
      <BrowserRouter>
        <div>
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
