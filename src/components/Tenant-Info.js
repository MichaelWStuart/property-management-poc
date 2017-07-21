import React from 'react';
import ReactDom from 'react-dom';

class TenantInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h2 className="tenantName">Resident's Name: {this.props.app.state.tenant.residentName}</h2>
        <h3 className="property">Property: {this.props.app.state.tenant.property}</h3>
        <h3 className="unit">Unit #: {this.props.app.state.tenant.unitNumber}</h3>
        <p className="tenantData">Phone: {this.props.app.state.tenant.phone}</p>
        <p className="tenantData">Email :{this.props.app.state.tenant.email}</p>
        <p className="tenantData">Start Date: {this.props.app.state.tenant.rentStartDate}</p>
        <p className="tenantData">Vacate Date: {this.props.app.state.tenant.unitVacateDate}</p>
        <p className="tenantData">Lock Change Date: {this.props.app.state.tenant.unitLockChangeDate}</p>
        <p className="tenantData">Ready to Rent Date: {this.props.app.state.tenant.unitReadyToRentDate}</p>
        <p className="tenantData">Move-In Deposit: {this.props.app.state.tenant.moveInDeposit}</p>
        <p className="tenantData">Non-Refundable: {this.props.app.state.tenant.nonRefundable}</p>
        <p className="tenantData">Rent Due: {this.props.app.state.tenant.rentDue}</p>
        <p className="tenantData">Damages Payable: {this.props.app.state.tenant.damagesPayable}</p>
        <p className="tenantData">Cleaning Fees: {this.props.app.state.tenant.cleaningFees}</p>
        <p className="tenantData">Other: {this.props.app.state.tenant.other}</p>
        <p className="tenantData">Refund Owed: {this.props.app.state.tenant.refundOwed}</p>
        <p className="tenantData">Manager Remarks: {this.props.app.state.tenant.managerRemarks}</p>
      </div>
    )
  }
}

export default TenantInfo
