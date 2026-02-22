import React from 'react'
import {name,age} from './Exportmodule'

export default function Importmodule() {
  return (
    <div>
      {name} is {age} years old.
    </div>
  )
}
