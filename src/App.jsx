import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing"
import Register from "./Components/MUI/Register"
import Arrowfunction from "./Components/ES7/Arrowfunction";
import BasicTable from "./Components/MUI/BasicTable";


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Testing' element={<Testing/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Arrowfunction' element={<Arrowfunction/>}/>
          <Route path='/BasicTable' element={<BasicTable/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}