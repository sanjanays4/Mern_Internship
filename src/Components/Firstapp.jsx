import React from 'react'

export default function Firstapp() {
    const mystyle = {
        color: "yellow",
        backgroundColor: "pink"
    };

  return (
    <div>
      <h1>Hello from Firstapp component</h1>

      <h3 style={{color: "blue",border: "2px dotted red"}}>INLINE CSS</h3>

      <h4 style={mystyle}>INTERNAL CSS</h4>
    </div>
  )
}


