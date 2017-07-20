import React from 'react';
import ReactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React-Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="logo"></div>
        <h1> Apodments Placeholder Title </h1>
        <div className="hamburger-menu"></div>
      </div>
    )
  }
}

export default Header
