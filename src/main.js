import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TenantInfo from './components/Tenant-Info';
import Tenant from './components/Tenant';
import Manager from './components/Manager';
import Boss from './components/Boss';

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
      },
      areas: [
        {mainRoom: {
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
        }
        },

        {doors: {
          areaName: 'Doors',
          issues: [
            {
              issueName: 'Entry free of prints/marks inside and out',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Bath free of prints/marks inside and out',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Knobs working and clean',
              conditionDefault: 'Clean',
            },
          ],
        }
        },

        {bed: {
          areaName: 'Bed',
          issues: [
            {
              issueName: 'Mattress, NO STAINS OR SPOTS',
              conditionDefault: 'Mattress clean, no stains. Cover is new, no spots',
            },
            {
              issueName: 'Boxspring new condition',
              conditionDefault: 'In new condition',
            },
            {
              issueName: 'Bedframe',
              conditionDefault: 'Clean, no damage',
            },
            {
              issueName: 'Table and Chair',
              conditionDefault: 'Both are clean, no damage, no stains or marks',
            },
          ],
        }
        },

        {windows: {
          areaName: 'Windows',
          issues: [
            {
              issueName: 'Windows clean, free of prints',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Screen good',
              conditionDefault: 'No rips or frame damage',
            },
            {
              issueName: 'Tracks clean and new-looking',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Blinds clean and new-looking',
              conditionDefault: 'Clean. No bends. Operates as new.',
            },
          ],
        }
        },

        {wetbar: {
          areaName: 'Wetbar',
          issues: [
            {
              issueName: 'Cabinet clean inside and out',
              conditionDefault: 'Clean, no items stored',
            },
            {
              issueName: 'Sink wiped down',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Counter-top clean, no marks',
              conditionDefault: 'Clean, no marks or damages',
            },
            {
              issueName: 'Backsplash wiped down, no damage',
              conditionDefault: 'Clean, no marks, no dents, no damage',
            },
            {
              issueName: 'Faucet clean and free of scum',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Fridge moved and cleaned, inside and out',
              conditionDefault: 'Clean, defrosted, operating as new',
            },
            {
              issueName: 'Microwave moved and cleaned, inside and out',
              conditionDefault: 'Clean, operating as new',
            },
          ],
        }
        },

        {bathroom: {
          areaName: 'Bathroom',
          issues: [
            {
              issueName: 'Toilet clean, inside and out, all around',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Shower scrubbed and free of soap scum',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Shower curtain',
              conditionDefault: 'Complimentary - not required to be returned at move-out',
            },
            {
              issueName: 'Bath fan/light cover clean',
              conditionDefault: 'Fan cover grates are clean, lights work',
            },
            {
              issueName: 'Mirror/cabinet clean',
              conditionDefault: 'Clean. No damage to shelves. Door operates as new',
            },
            {
              issueName: 'Baseboards wiped down',
              conditionDefault: 'Clean',
            },
            {
              issueName: 'Tile and grout clean, NO STAINS/SCUM!',
              conditionDefault: 'Clean, no stains or damage',
            },
          ],
        }
        },

        {pantryLocker: {
          areaName: 'Pantry Locker',
          issues: [
            {
              issueName: 'Cleaned out and wiped Down',
              conditionDefault: 'Clean. Avenida, Videre, and Pine Only',
            },
          ],
        }
        },

        {personalItemsLeft: {
          areaName: 'Personal Items Left',
          issues: [
            {
              issueName: 'Items left in unit',
              conditionDefault: 'None',
            },
            {
              issueName: 'Items left on property',
              conditionDefault: 'None',
            },
          ],
        }
        },
      ],
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
