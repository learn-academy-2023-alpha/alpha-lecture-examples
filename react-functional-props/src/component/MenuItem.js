import React from 'react'

const MenuItem = (props) => {
  // console.log(props)
  return (
    <>
      <p>{props.item.name}</p>
      {/* Conditional rendering allows us to render something based on a condition being true */}
      {/* props.item.ordered === true show this */}
      {props.item.ordered &&
        <p>Ordered</p>
      }
      {/* To keep control over when function is invoked, pass an anonymous function */}
      <button onClick={() => props.orderItem(props.index)}>Order</button>
    </>
  )
}

export default MenuItem


