import React from 'react';
import ReactDom from 'react-dom';

class TenantInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h2 className="tenantName">{this.props.app.state.tenant.residentName}></h2>
        <h3 className="buildingName">{this.props.app.state.tenant.property}</h3>
        <h3 className="unit">{this.props.app.state.tenant.unitNumber}</h3>
        <p className="tenantData">{this.props.app.state.tenant.phone}</p>
        <p className="tenantData">{this.props.app.state.tenant.email}</p>
        <p className="tenantData">{this.props.app.state.tenant.rentStartDate}</p>
        <p className="tenantData">{this.props.app.state.tenant.unitVacateDate}</p>
        <p className="tenantData">{this.props.app.state.tenant.unitLockChangeDate}</p>
        <p className="tenantData">{this.props.app.state.tenant.unitReadyToRentDate}</p>
        <p className="tenantData">{this.props.app.state.tenant.moveInDeposit}</p>
        <p className="tenantData">{this.props.app.state.tenant.nonRefundable}</p>
        <p className="tenantData">{this.props.app.state.tenant.rentDue}</p>
        <p className="tenantData">{this.props.app.state.tenant.damagesPayable}</p>
        <p className="tenantData">{this.props.app.state.tenant.cleaningFees}</p>
        <p className="tenantData">{this.props.app.state.tenant.other}</p>
        <p className="tenantData">{this.props.app.state.tenant.refundOwed}</p>
        <p className="tenantData">{this.props.app.state.tenant.managerRemarks}</p>
      </div>
    )
  }
}

export default TenantInfo
