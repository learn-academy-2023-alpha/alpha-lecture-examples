// JAVASCRIPT FOR LOOPS

// Iteration - the process of repeating something over and over again
// Array - [] ; groups data
// For loops do not inherently connect to arrays
// For loops are GREAT for counting

// Info needed to set up a for loop:
// Starting point (aka where to start counting)
// Stopping point (aka where to stop counting)
// Increment of counting (aka how to get from start to stop)

// Variable types and Declarations:
// var - global scope ; can be accessed inside or outside of your code block {this is a code block} ; can be reassigned and can be redeclared

// let - available ONLY inside of your code block ; can be reassign but cannot redeclare the variable

// const - CANNOT be reassigned and cannot be redeclared

// EXAMPLES :
if (true) {
    var myName = "Nicole"
    // console.log(myName) // Nicole
}
// console.log(myName) // Nicole

if (true) {
    let yourName = "Josh"
    // console.log(yourName) // Josh
}
// console.log(yourName) // yourName is not defined

let myDog = "Tala"
myDog = "Gus"
// console.log(myDog) // this works

const myCat = "Dotty"
myCat = "Dexter"
// console.log(myCat) //  Assignment to constant variable.

// LOOPS :
// it is common to use the variable name index to store the current count (a shorthand = i)

// Info needed to set up a for loop:
// Starting point (aka where to start counting) (let index = 0)
// Stopping point (aka where to stop counting) (index < 10)
// Increment of counting (aka how to get from start to stop) (index = index + 1)

// LONG HAND :
for (let index = 0; index < 10; index = index + 1) {
    console.log(index)
}

// SHORTHAND :
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// CONNECT LOOPS TO ARRAYS :
// Arrays at index 0
// Arrays have a length property
// Index identifier -- can extract the value

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numsArray.length; i++) {
    console.log("index:", i)
    console.log("value", numsArray[i])
}

// CONNECTING LOGIC WITH OUR LOOPS :
for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] % 2 !== 0) {
        console.log(`${numsArray[i]} is an odd number`)
    }
}

// infinite loops can occur .. don't be afraid! CTRL + C then reevaluate your for loop
// for (let i = 1; i > 0; i++) {
    
//     console.log(i)
// }

// Stackoverflow : when your machine runs out of memory to continue executing