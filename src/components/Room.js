import React from 'react';
import ReactDom from 'react-dom';

class Room extends React-Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
    }
  }

  render(){
    return (
      <div>
        <h3 className="room">{this.state.name}</h3>
      </div>
    )
  }
}

export default Room
