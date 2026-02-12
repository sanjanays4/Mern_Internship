import Button from '@mui/material/Button'
import React from 'react'
import Stack from '@mui/material/Stack';

export default function Arrowfunction() {

    // 1. normal function
    function Myfunction(){
        return (
         <h3>Normal Function</h3>

        )
    }
    // 2. Arrow function
    const Arrow=()=>{
        return(
            <>
            <h3>Arrow Function using multiple statements</h3>
            <h2>hello</h2>
            </>
        )
    }
    // 3. Arrow function with single statement
    const Singlearrow=()=> <h3>Arrow Function using single statement</h3>

    const Handleclick=()=> alert("Button Clicked !!")

    const Handlegreet=(name)=>{
        alert("Hello Good Evening "+name)
    }

  return (
    <div>
      <Myfunction/>
      <Arrow/>
      <Singlearrow/>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color='primary' onClick={Handleclick}>Click me</Button>
      <Button  variant="outlined" onClick={()=> console.log("Hello Good Evening")}>GREET</Button>
      <Button variant="contained" onClick={()=>Handlegreet("sanjana")}>Pass an argument</Button>
      </Stack>
    </div>
  )
}
