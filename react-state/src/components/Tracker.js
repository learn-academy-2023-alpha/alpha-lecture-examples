import React, { useState } from 'react'

const Tracker = () => {
    const [miles, setMiles] = useState(0)
    // updatable variable: State
    // useState is initial value
    // setMiles is a method to update
    const [color, setColor] = useState("green")
    // a State that will hold my color
    // dynamic - reusable
    // State can work with a lot!
    // State is temporary storage that can be updated from it's initial value

    const addAMile = () => {
        setMiles(miles + 1)
        console.log("miles", miles)
        return miles
    }

    return (
        <>
            {/* <h2>Mile Tracker per month</h2> */}
            <p>Miles: {miles}</p>
            <button onClick={addAMile} style={{ color: color }} >Add a mile</button>
        </>
    )
}

export default Tracker