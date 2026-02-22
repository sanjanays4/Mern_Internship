import React,{ useState } from 'react'
import { name } from '../ES7/Exportmodule';

export default function HookUseState() {
    //syntax
    // const [state, setState] = useState()
    let favcolor = "pink";
    const handlechange=()=>{
        favcolor="yellow"
        console.log(favcolor)
    }
    //using useState hook
    const [color, setColor] = useState("Pink");
    const handleColor=()=>{ setColor("yellow") }

    const [college, setCollege] = useState({
        name:"Mite",
        location:"Moodabidri",
        course:"ISE"
    })

    const handlecollege=()=>{setCollege({name:"MIT",location:"Manipal",course:"CSE"})

    }
  return (
    <div>
      <h3>my favourite color is {favcolor}</h3>
      <button onClick={handlechange}>Change color</button>

      <h3>Using usestate</h3>
       <h3>my favourite color is {color}</h3>
      <button onClick={handleColor}>Change color</button>   

      <h3> I am an {college.course} student, from {college.name}, {college.location} </h3>
        <button onClick={handlecollege}>Change course</button>
      
    </div>
  )
}
