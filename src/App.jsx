import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing"
import Register from "./Components/MUI/Register"
import Arrowfunction from "./Components/ES7/Arrowfunction"
import BasicTable from "./Components/MUI/BasicTable"
import ArrowMethod from "./Components/ES7/ArrowMethod"
import SpreadOperator from "./Components/ES7/SpreadOperator"
import Cards from "./Components/MUI/Cards"
import MuiAppbar from "./Components/MUI/MuiAppbar"
import Destructuring from "./Components/ES7/Destructuring"
import MuiCard from "./Components/MUI/MuiCard"
import Importmodule from "./Components/ES7/Importmodule"
import Ternaryoperator from "./Components/ES7/Ternaryoperator"
import Props from "./Components/ES7/Props"
import HookUseState from "./Components/Hooks/HookUseState"
import Counter from "./Components/Hooks/Counter";
import Themeswitcher from "./Components/Hooks/Themeswitcher";

export default function App(){
  return(
    <div>
      <BrowserRouter>
      <MuiAppbar/>
        <Routes>
          <Route path='/Testing' element={<Testing/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Arrowfunction' element={<Arrowfunction/>}/>
          <Route path='/BasicTable' element={<BasicTable/>}/>
          <Route path='/ArrowMethod' element={<ArrowMethod/>}/>
          <Route path='/SpreadOperator' element={<SpreadOperator/>}/>
          <Route path='/Cards' element={<Cards/>}/>
          <Route path='/Destructuring' element={<Destructuring/>}/>
          <Route path='/MuiCard' element={<MuiCard/>}/>
          <Route path='/Importmodule' element={<Importmodule/>}/>
          <Route path='/Ternaryoperator' element={<Ternaryoperator/>}/>
          <Route path='/Props' element={<Props  name="John" />}/>
          <Route path='/HookUseState' element={<HookUseState/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/Themeswitcher' element={<Themeswitcher/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
