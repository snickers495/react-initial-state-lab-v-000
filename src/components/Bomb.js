// Bomb Component Code Goes Here
import React from 'react';
export default class Bomb extends React.Component {
  constructor(){
    super();
    this.state={
      secondsLeft: 0;
    }
  }
  render(){
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}
