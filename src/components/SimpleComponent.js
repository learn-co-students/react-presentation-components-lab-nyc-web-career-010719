// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  handleClick = () => {
    this.setState(prevState => {
      if (prevState.mood === "happy") {
        return {mood: "sad"}
      }
      else if (prevState.mood === "sad") {
        return {mood: "happy"}
      }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
