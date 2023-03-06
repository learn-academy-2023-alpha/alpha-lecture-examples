import React, { useState } from 'react'
import UpperCased from './component/UpperCased'

const App = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    // Event is an object with many key:value pairs
    // console.log(e)
    // Target gets us to the input tag
    // console.log(e.target)
    // Value gets us the value of each individual key stroke
    // console.log(e.target.value)
    setName(e.target.value)
  }

  // console.log(name)

  return (
    <>
      <h1>Greeter App</h1>
      <input 
        type="text" 
        // onChange has a special argument that is automatically passed to the function called event or e for short
        onChange={handleChange}
        value={name}
      />
      <UpperCased name={name} />
    </>
  )
}

export default App