import React, { useState } from 'react'
import MenuItem from './component/MenuItem'

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Ribs", ordered: false},
    { name: "Brisket", ordered: false},
    { name: "Wings", ordered: false},
    { name: "Beans", ordered: false},
    { name: "Pulled Pork", ordered: false},
  ])

  // Create a function with an argument of which item I clicked on that I can pass to MenuItem as props and be called when the button is clicked
  const orderItem = (selectedItemIndex) => {
    console.log(selectedItemIndex)
    // find the item by index in the menu array, then access the ordered property and reassign the value to true
    menu[selectedItemIndex].ordered = true
    // Spread operator makes a copy of menu with the updated value
    setMenu([...menu])
  }

  return (
    <>
      <h1>Alpha 2023 BBQ</h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return (
          <MenuItem 
            item={item} 
            key={index}
            orderItem={orderItem}
            index={index} 
          />
        )
      })}
    </>
  )
}

export default App