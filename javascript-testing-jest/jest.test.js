// Testing with Jest 2/23/2023

// Jest - testing library
// library - collection of code snippets, dependencies
// package manager - manages code dependencies
// yarn - a package manager for javascript

// process
// creating a folder/directory
// yarn add jest
// three things: package.json, yarn.lock, node_modules

// run a jest testing file: yarn jest
// -->  Your test suite must contain at least one test.

// Pseudo: create a function called makeCoffee that returns "coffee is made"

// const makeCoffee = () => {
//   return "coffee is made"
// }
// // input - nothing
// // output - "coffee is made"

// describe("makeCoffee", () => {
//   it("returns 'coffee is made'", () => {
//     expect(makeCoffee()).toEqual("coffee is made")
//   })
// })
// --> makeCoffee ✓ returns 'coffee is made'
// test calls the function and logs the results

// TDD - test driven development
// refactor - making your code better over time

// Pseudo: create a function called makeCoffee that takes in a coffeeType and returns the specific type of coffee is made.
// const makeCoffee = (coffeeType) => {
//   return `${coffeeType} is made`
// }

// input - coffeeType (string)
// output - "<coffeeType> is made" (string)

// describe("makeCoffee", () => {
//   it("returns the specific type of coffee is made", () => {
//     expect(makeCoffee("tuxedo")).toEqual("tuxedo is made")
//   })
// })
// 1. run our test with no function created
// --> ReferenceError: makeCoffee is not defined
// 2. created the function but with nothing inside
// --> undefined
// 3. Added code logic
// --> test passed

// Testing multiple outcomes
// Pseudo: create a function called makeCoffee that takes in coffeeType and coffeeSize and returns a statement with the appropriate coffee order

// input: coffeeType, coffeeSize (strings)
// output: coffee order (string)

describe("makeCoffee", () => {
  it("returns a statement with the appropriate coffee order", () => {
    expect(makeCoffee("small", "cortado")).toEqual("Your small cortado is made")
    expect(makeCoffee("tall", "black")).toEqual("Your tall black is made")
  })
})

const makeCoffee = (coffeeSize, coffeeType) => {
  return `Your ${coffeeSize} ${coffeeType} is made`
}
