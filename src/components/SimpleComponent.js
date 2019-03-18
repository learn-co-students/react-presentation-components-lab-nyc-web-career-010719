// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  } //end constructor

  handleClick = () => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
} //end SimpleComponent

export default SimpleComponent
