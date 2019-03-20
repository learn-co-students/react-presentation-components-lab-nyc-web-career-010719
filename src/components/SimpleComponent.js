// Code SimpleComponent Here
import React from "react";

class SimpleComponent extends React.Component {
  state={
    mood:'happy'
  }
  handleClick=()=>{
    if(this.state.mood ==='happy')
      this.state.mood='sad'
    else if(this.state.mood==='sad')
      this.state.mood='happy'
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
export default SimpleComponent
