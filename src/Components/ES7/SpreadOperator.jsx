import React from 'react'

export default function SpreadOperator() {
    const array1=[1,2,3,4,5]
    const array2=[6,7,8,9,10]
    const combinedarray=[...array1,...array2]

    const obj1={name:"user",age:10}
    const obj2={email:"user@example.com"}
    const mergedobj={...obj1,...obj2}

  return (
    <div>
        
      <h2>Spread Operator Example</h2>
      <p>{combinedarray}</p>
      <p>{mergedobj.name}</p>
      <p>{mergedobj.age}</p>
      <p>{mergedobj.email}</p>

    </div>
  )
}
