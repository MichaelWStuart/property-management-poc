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
        {
          areaName: 'Main Room',
          issues: [
            {
              issueName: 'Unit tile and grout clean',
              conditionDefault: 'Clean, no stains or damage',
              conditionCurrent: 'pass', // pass, noted, fail
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Carpet free of spots, indents, rips, or tears',
              conditionDefault: 'No stains, no indents from furnishings, no damage',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Baseboards wiped down',
              conditionDefault: 'Clean, no marks',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Pin holes filled AND wiped down',
              conditionDefault: 'No holes',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Heaters clean and wall streaks cleaned',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Markes repaired or painted',
              conditionDefault: 'No marks',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Closet organizer wiped down/damage free',
              conditionDefault: 'Clean, no damage, no marks',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Doors',
          issues: [
            {
              issueName: 'Entry free of prints/marks inside and out',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Bath free of prints/marks inside and out',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Knobs working and clean',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Bed',
          issues: [
            {
              issueName: 'Mattress, NO STAINS OR SPOTS',
              conditionDefault: 'Mattress clean, no stains. Cover is new, no spots',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Boxspring new condition',
              conditionDefault: 'In new condition',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Bedframe',
              conditionDefault: 'Clean, no damage',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Table and Chair',
              conditionDefault: 'Both are clean, no damage, no stains or marks',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Windows',
          issues: [
            {
              issueName: 'Windows clean, free of prints',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Screen good',
              conditionDefault: 'No rips or frame damage',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Tracks clean and new-looking',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Blinds clean and new-looking',
              conditionDefault: 'Clean. No bends. Operates as new.',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Wetbar',
          issues: [
            {
              issueName: 'Cabinet clean inside and out',
              conditionDefault: 'Clean, no items stored',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Sink wiped down',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Counter-top clean, no marks',
              conditionDefault: 'Clean, no marks or damages',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Backsplash wiped down, no damage',
              conditionDefault: 'Clean, no marks, no dents, no damage',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Faucet clean and free of scum',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Fridge moved and cleaned, inside and out',
              conditionDefault: 'Clean, defrosted, operating as new',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Microwave moved and cleaned, inside and out',
              conditionDefault: 'Clean, operating as new',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Bathroom',
          issues: [
            {
              issueName: 'Toilet clean, inside and out, all around',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Shower scrubbed and free of soap scum',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Shower curtain',
              conditionDefault: 'Complimentary - not required to be returned at move-out',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Bath fan/light cover clean',
              conditionDefault: 'Fan cover grates are clean, lights work',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Mirror/cabinet clean',
              conditionDefault: 'Clean. No damage to shelves. Door operates as new',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Baseboards wiped down',
              conditionDefault: 'Clean',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Tile and grout clean, NO STAINS/SCUM!',
              conditionDefault: 'Clean, no stains or damage',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Pantry Locker',
          issues: [
            {
              issueName: 'Cleaned out and wiped Down',
              conditionDefault: 'Clean. Avenida, Videre, and Pine Only',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },

        {
          areaName: 'Personal Items Left',
          issues: [
            {
              issueName: 'Items left in unit',
              conditionDefault: 'None',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
            {
              issueName: 'Items left on property',
              conditionDefault: 'None',
              conditionCurrent: 'pass',
              s3PhotoURI: '',
              localPhotoURI: '',
              photoUploaded: false,
              lineItems: '',
              approvedByManager: false,
              approvedByBoss: false,
            },
          ],
        },
      ],
    };
    this.getApp = this.getApp.bind(this);
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
              component={() => <Tenant app={this.getApp()} areas={this.state.areas} />} />
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
