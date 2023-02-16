// JavaScript Arrays 2/16/2023

// Data types
// primitive data types - number, string, Boolean, undefined, null, symbol

// console.log(8.toUpperCase())
// --> error

// console.log(4 + 4)
// --> 8
// console.log("hello" + "!")
// concatenation
// console.log("hello".concat("!"))
// --> hello!
// console.log(6.concat(6))
// --> SyntaxError

// Data types have their own properties

// console.log(7)
const myNumber = 7

// console.log(myNumber)
// variables represent data
// abstraction - working with variables that represent values

// console.log([].length)
// console.log([4].length)
// console.log([true, 4, "hello", "hi"].length)
// console.log([true, 4, "hello", "hi"][0])
// --> true
// console.log([true, 4, "hello", "hi"][9])
// --> undefined
// console.log([true, 4, "hello", "hi"][10])

// arrays - length, zero-indexed, pull a value by referencing the index

const myArray = [4, 5, 6, 7, 8, 9, 5, 6, 6, 7, 7, 7]
// console.log(myArray)
// console.log(myArray.length)
// --> 6
// console.log(myArray[0])
// --> 4
// console.log(myArray[myArray.length - 1])
// dynamically gets the last element in the array

var myIceCream = [
  "moose tracks",
  "mint chocolate",
  "half baked",
  "cookies and cream"
]
// console.log((myIceCream[1] = "mint chocolate chip"))
// --> mint chocolate chip
// console.log(myIceCream)
// console.log(myIceCream[-1])
// --> undefined

// console.log(myIceCream.push("rocky road"))
var rocky = myIceCream.push("rocky road")
// console.log(rocky)
// --> 5
// console.log(myIceCream)
// myIceCream.pop()
// console.log(myIceCream)
// myIceCream.pop()
// console.log(myIceCream)
// myIceCream.pop()
// console.log(myIceCream)

myIceCream.reverse()
// console.log(myIceCream)
// console.log("hello".reverse())
// --> TypeError: "hello".reverse is not a function
// console.log("hello".split())
// --> [ 'hello' ]
// console.log("hello".split(""))
// --> [ 'h', 'e', 'l', 'l', 'o' ]
// console.log("hello".split("").reverse())
// --> [ 'o', 'l', 'l', 'e', 'h' ]
// console.log(89.split())
// --> SyntaxError
// console.log("hello".split("").reverse().join())
// --> o,l,l,e,h
// console.log("hello".split("").reverse().join(""))
// --> olleh

var iceCreamToppings = ["m&m", "reeses", "oreos", "sprinkles"]
// console.log(iceCreamToppings)
iceCreamToppings.concat(myIceCream) // didn't change either array
var iceCreamAndToppings = iceCreamToppings.concat(myIceCream)
// console.log(iceCreamToppings)
// console.log(myIceCream)
// console.log(iceCreamAndToppings)

// mutator method - permanently changes every instance of the data

// accessor methods - they don't

// console.log(iceCreamAndToppings.indexOf("m&m"))
// --> 0
console.log(iceCreamAndToppings.indexOf("chocolate chips"))
// --> -1
