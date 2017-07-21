import React from 'react';
import ReactDom from 'react-dom';
import FUButton from './FU-Button.js';

class Item extends React-Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      condition: 5,
      followUp: 'No'
    }
  }



  handleClickFU(e){
    e.preventDefault()
    if(this.state.followUp === 'No') {
      this.state.followUp === 'Yes'
      e.target.style = {styles.buttonFU}
    } else {
      this.state.followUp === 'No'
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          name='condition'
          type='number'
          min=1
          max=5
          value={this.state.condition}
          onChange={this.handleChange}
          />
        <FUButton FU={this.state.followUp}/>
      </form>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: green;
  },
  buttonFU: {
    backgroundColor: red;
  }
});

export default TenantInfo
