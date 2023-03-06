import React from 'react'

const UpperCased = ({name}) => {

  const changeToUpperCase = (userInput) => {
    return userInput.toUpperCase()
  }

  return (
    <>
      <h2>HELLO, I SEE YOUR NAME IS:</h2>
      <p>{changeToUpperCase(name)}</p>
    </>
  )
}

export default UpperCased