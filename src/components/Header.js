import React from 'react';
import ReactDom from 'react-dom';
import AppNav from './appbar.js';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <AppNav />
      </div>
    )
  }
}

export default Header
