// Higher order functions

// Built in methods - premade functions made by js devs that are easily invoked

// Syntactical sugar - piece of code created to make language sweeter

// Iteration - process of performing an action a certain number of times or until condition is met

// Higher Order Function - function that takes a function as an argument
    // Only called on arrays
    // Can replace some for loops - uses less cpu

// __________
// For Each

// Arrow syntax (anonymous function): () => {}

// Required arguments: value
  // value: current value in iteration process (think array[i])
// Optional arguments: index, array
  // index: current index in iteration process (think i)
  // array: allows you to pass the array the higher order function was called on

[2, 3, 4, 5].forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})

// [2, 3, 4, 5].forEach((banana, apple, orange) => {
//   console.log("banana:", banana)
//   console.log("apple:", apple)
//   console.log("orange:", orange)
// })

// Naming doesn't matter as much as the order matters

// __________
// Map - iterates over each element in an array and returns a new array with the same length

  // Great for modifying or displaying each value in an array

  const myArray = [3, 4, 5, 6]

  // const mappedArray = myArray.map(value => {
  //   return value * 2
  // })

  const mappedArray = myArray.map(value => value * 2)

console.log(mappedArray)  // [ 6, 8, 10, 12 ]


const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0) {
      return "even"
    } else if(value % 2 !== 0) {
      return "odd"
    } else {
      return "oops, something went wrong"
    }
  })
}

console.log(evenOrOdd(myArray)) // [ 'odd', 'even', 'odd', 'even' ]

// __________
// Filter - iterates over an array and narrows down what is returned based on a condition

  // Built in if statement
  // Returns a subset of the array

const myFilteredArray = myArray.filter(value => {
  return value % 2 !== 0
})

console.log(myFilteredArray) // [ 3, 5 ]


// Create a function that acts on an array of mixed data and returns only the given data types
const mixedData = [3, "hi", true, null]

const showMyData = (array, dataType1, dataType2) => {
  return array.filter(value => {
    return typeof value === dataType1 || typeof value === dataType2
  })
}

console.log(showMyData(mixedData, "string", "number")) // [ 3, 'hi' ]
console.log(showMyData(mixedData, "boolean", "number")) // [ 3, true ]
console.log(showMyData(mixedData, "boolean", "string")) // [ 'hi', true ]

// ____________
// Other Higher Order functions

// .sort()
console.log([2, 20, 4, 100].sort()) // [ 100, 2, 20, 4 ]
console.log([2, 20, 4, 100].sort((a, b) => a - b)) // [ 2, 4, 20, 100 ]

// .reduce()
