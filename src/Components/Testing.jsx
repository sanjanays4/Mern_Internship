import React from 'react'
import './style.css'
import image1 from '../assets/flower.jpg'

export default function Testing() {
   const mystyle = {
        color: "yellow",
        backgroundColor: "pink"
    };
  return (
    <div>
      <h1>Hello from Testing component</h1>

      <h3 style={{color: "blue",border: "2px dotted red"}}> Testing INLINE CSS</h3>

      <h4 style={mystyle}>Testing INTERNAL CSS</h4>

      <h5 className='myclass'>Testing EXTERNAL CSS</h5>
      
      <img src={image1} alt='img' width={300} height={200} />
    </div>
  )
}
