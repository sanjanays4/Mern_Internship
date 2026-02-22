import React from 'react'

export default function Destructuring() {
    const number=[1,2,3,4,5,6]

    const [a,,,d,e,f]=number

    const num=number[0]

    const person1=[{name:"John",age:30,city:"New York"}]
    // const person2=[{name:"Jane",age:25,city:"Los Angeles"}]
    // const person3=[{name:"Bob",age:35,city:"Chicago"}]
    
    const [{name:A,age:B,city:C}]=person1
    
  return (
    <div>
      {d},{f},{num}
      {A},{B}, {C}
      
    </div>
  )
}
