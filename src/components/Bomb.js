// Bomb Component Code Goes Here
import React from 'react';
export default class Bomb extends React.Component {
  constructor(this.props){
    super();
    this.state={
      secondsLeft: this.props.initialCount;
    }
  }
  render(){
    return(
      {this.secondsLeft === 0 :}
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    )
  }
}
