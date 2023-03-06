# React Inputs and Events

Event handlers - methods that track events such as clicking, resizing, refreshed windows, etc

onClick - allows you to click a button
onChange - is an attribute that lives on an input tag that captures an input

```javascript
import React from 'react'

const App = () => {

  const handleChange = (e) => {
    // Event is an object with many key:value pairs
    // console.log(e)
    // Target gets us to the input tag
    // console.log(e.target)
    // Value gets us the value of each individual key stroke
    console.log(e.target.value)
  }

  return (
    <>
      <h1>Greeter App</h1>
      <input 
        type="text" 
        // onChange has a special argument that is automatically passed to the function called event or e for short
        onChange={handleChange}
      />
    </>
  )
}

export default App
```