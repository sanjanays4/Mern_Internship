import React , {useState} from 'react'

export default function Counter() {
    const mystyle={
        marginRight:"50px"
    }
    

    const [count,setCount] = useState(0)

    const handleincrement=()=>{
      setCount(count+1)
    }
    const handledecrement=()=>{
      setCount(count-1)
    }
    const handlereset=()=>{
      setCount(0)
    }

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={handleincrement} style={mystyle}>increment</button>
      <button onClick={handledecrement} style={mystyle}>decrement</button>
      <button onClick={handlereset} style={mystyle}>reset</button>
    </div>
  )
}
