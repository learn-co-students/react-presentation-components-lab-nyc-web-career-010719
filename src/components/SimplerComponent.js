import React from "react"

const SimplerComponent = () => {
  function handleClick(){
    console.log('clicked!')
  }
  return (
  <div className="simpler-component" onClick={handleClick}>
    <p>I am just happy</p>

  </div>
  )
}

export default SimplerComponent
