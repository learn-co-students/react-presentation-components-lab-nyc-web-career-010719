import React from "react"

const SimplerComponent = (props) => {
  // const  handleClick=()=>{
  //   console.log('clicked!')
  // }
  return (
  <div className="simpler-component" onClick={props.handleClick}>
    <p>I am just happy</p>

  </div>
  )
}

export default SimplerComponent
