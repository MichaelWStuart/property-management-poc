import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js'

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
      areas: [
        mainRoom: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: 'Unit tile and grout clean',
              conditionDefault: 'Clean, no stains or damage',
            },
            {
              issueName: 'Carpet free of spots, indents, rips, or tears',
              conditionDefault: 'No stains, no indents from furnishings, no damage',
            },
            {
              issueName: 'Baseboards wiped down',
              conditionDefault: 'Clean, no marks',
            },
            {
              issueName: 'Pin holes filled AND wiped down',
              conditionDefault: 'No holes',
            },
            {
              issueName: 'Heaters clean and wall streaks cleaned',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Markes repaired or painted',
              conditionDefault: 'No marks',
            },
            {
              issueName: 'Closet organizer wiped down/damage free',
              conditionDefault: 'Clean, no damage, no marks',
            },
          ],
        ],

        doors: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        bed: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        windows: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        wetbar: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        bathroom: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        pantryLocker: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],

        personalItemsLeft: [
          areaName: 'Main Room',
          issues: [
            {
              issueName: '',
              conditionDefault: '',
            },
            {
              issueName: '',
              conditionDefault: '',
            },
          ],
        ],
      ]
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
