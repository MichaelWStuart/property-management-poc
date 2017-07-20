import React from 'react';
import ReactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

class FUButton extends React-Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
    }
  }

  render(){
    return (
      <button
        style={styles.button}
        className="follow-up"
        onClickFU={this.handleClickFU}> {this.props.FU} </button>
    )
  }
}

export default Room
