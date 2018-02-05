// Bomb Component Code Goes Here
import React from 'react';
export default class Bomb extends React.Component {
  constructor(props){
    super();
    this.state={
      secondsLeft: props.initialCount;
    }
  }
  render(){
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}
