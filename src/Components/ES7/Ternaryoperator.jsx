import React from 'react'

export default function Ternaryoperator() {
    const score=65;
  return (
    <div style={score>=80 ? {backgroundColor:"green"} : score >= 60 ? {backgroundColor:"yellow"} : score >= 40 ? {backgroundColor:"orange"} : {backgroundColor:"red"}}>


      {score >= 80 ?  <h3 style={{color:"green"}}>Grade A</h3> :
      score >= 70 ? <h3 style={{color:"blue"}}>Grade B</h3> :
      score >= 40 ? <h3 style={{color:"orange"}}>Grade C</h3> : <h3 style={{color:"red"}}>Grade D</h3>}


      {score >= 80 ? "Grade A" :
      score >= 70 ? "Grade B" :
      score >= 40 ? "Grade C" : "Grade D"}
      
     
    </div>
  )
}
