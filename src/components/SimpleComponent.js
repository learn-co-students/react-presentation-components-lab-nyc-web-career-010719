// Code SimpleComponent Here
import React from "react";

class SimpleComponent extends React.Component {

  state = {
    mood: "happy"
  }

  handleChange = () => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.handleChange}>
        {this.state.mood}
      </div>
    )
  }
}
export default SimpleComponent
