import React from 'react';
import ReactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

class TenantInfo extends React-Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      building: '',
      unit: 000,
      phoneNumber: '',
      email: '',
    }
  }

  render(){
    return (
      <div>
        <h2 className="tenantName">{this.state.name}</div>
        <h3 className="buildingName">{this.state.building}</h3>
        <h3 className="unit">{this.state.unit}</h3>
        <p>{this.state.phoneNumber}</p>
        <p>{this.state.email}</p>
      </div>
    )
  }
}

export default TenantInfo
