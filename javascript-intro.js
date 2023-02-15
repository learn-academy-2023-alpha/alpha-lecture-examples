// JavaScript Intro 2/15/2023

// JavaScript dynamic, interpreted, scripting language

// dynamic - you can create a variable and give it any data type, and you can change the data type later if you want

// interpreted - code is read line by line and passed to an interpreter that creates the machine code

// scripting - allows us to perform logic and manipulate data

// data types

// primitive data type - can't be broken down any further

// number
// string
// Boolean
// undefined
// null
// symbol

// number
42 // whole number
3.14 // float

5 + 4
// console.log(5 + 4)
5 - 3
// console.log(5 - 3)
5 * 4
// console.log(5 * 4)
15 / 3
// console.log(15 / 3)
// $ node javascript-intro.js

// console.log(5 % 3)
// --> 2
// console.log(4 ** 3)
// --> 64

// string
// console.log("hello alpha")
// strings have a length property
// index - location of a character inside the string
// zero indexing - counting indexes the first location is 0
// console.log("hello alpha"[1])
// bracket notion will allow you to pass an index and return the value at that index

// Boolean
true
false
// console.log(true)
// --> true

// undefined - a variable that doesn't have a value, if there isn't a value the value will be undefined

// null - value that is equal to nothing else

// symbol - unique key used as an identifier

// variables

// variable declaration
// var - most generic, global scope
// let - local scope, live inside some piece of code functionality
// const - will protect the variable from being reassigned

// variable names - always communicate intent, in camelCase

// thisIsMyVariableInCamelCase - JavaScript best practices

// assignment operator =
var myCohort = "Alpha class 2023"
// console.log(myCohort)
// --> Alpha class 2023

var heyThere
// console.log(heyThere)
// --> undefined

// console.log(hiAlpha)
// --> hiAlpha is not defined

heyThere = "hey there everyone!"
// console.log(heyThere)
// console.log(heyThere[0])
// --> h

heyThere = 29
// console.log(heyThere)
// console.log(heyThere % 3)

// Built-in Methods

// console.log("hello".length)
// --> 5
const helloWorld = "Hey There!!"
// console.log(helloWorld.length)
// console.log(helloWorld[0], helloWorld[1])

console.log(helloWorld.toUpperCase())
// parentheses = action

console.log(helloWorld.includes("e"))
// extra info that gets passed into the parentheses is called an argument
// --> true

console.log(helloWorld.slice(0, 3))
// --> Hey
