// Javascript Functions - Loops - Arrays

// Multiply each number in an array by 5

var myArrayOfNums = [2, 3, 4, 5]
var mySecondArrayOfNums = [10, 20, 30, 40]

// pseudocode:
// iterate over my array - for loop - multiply each value by 5
// functions input - array (array of numbers)
// functions output - array with intial values times 5
// create a function and name it mult5

// for loop - starting / end point / increments

// create a function and name it mult5
// const mult5 = (array) => {
//     return array * 5
// }
// console.log(mult5(myArrayOfNums)) -> NaN

// const mult5 = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 5)
//     }
//     return newArray
// }
// console.log(array)
// console.log(mult5(myArrayOfNums))
// -> [ 10, 15, 20, 25 ]
// console.log(mult5([13, 70, 6, 72]))
// -> [ 65, 350, 30, 360 ]
// console.log(mult5(mySecondArrayOfNums)) -> [ 50, 100, 150, 200 ]

// Diner Function: Create a function that takes a set of data (aka an array) and adds each item into a sentence

// pseudocode: 
// input - array of strings
// output - string interpolation of items into a sentence
// create a function named dinerOrder
// declare a newOrder variable - empty array
// iterate through the array (for loop)
// return the values string interpolated


var beverages = ["coffee", "water", "soda", "milk", "juice"]
var food = ["burger", "panini", "bagel", "soup"]
var dessert = ["cake", "ice cream", "creme brulee"]

const dinerOrder = (array) => {
    let newOrder = []
    for (let i = 0; i < array.length; i++) {
        newOrder.push(`I would like to order ${array[i]}, please.`)
    }
    return newOrder
}

console.log(dinerOrder(beverages))
// [
//     'I would like to order coffee, please.',
//     'I would like to order water, please.',
//     'I would like to order soda, please.',
//     'I would like to order milk, please.',
//     'I would like to order juice, please.'
//   ]

// console.log(dinerOrder(food))
// [
//     'I would like to order burger, please.',
//     'I would like to order panini, please.',
//     'I would like to order bagel, please.',
//     'I would like to order soup, please.'
//   ]

// console.log(dinerOrder(dessert))
// [
//     'I would like to order cake, please.',
//     'I would like to order ice cream, please.',
//     'I would like to order creme brulee, please.'
//   ]
