// JavaScript Functions 2/17/2023

// functions allow a developer to decide when the code executes and creates reusable code

// input => output

// encapsulation - your functions don't rely on any external information other than the input

// arrow function - the particular style of function that we will use in class

// declare a variable, always use const
// naming function - camelCase, descriptive
// single equal - assignment operator
// parentheses - action or behavior
// arrow syntax - describes the function
// all functions need a return

// function expression - the basic outline of a function
// const coffeeMaker = () => {
//   return "coffee is made"
// }

// invoke the function
// console.log(coffeeMaker())
// --> undefined
// --> added return to the function: coffee is made

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())

// add parameters
// parameter is a variable that belongs to a function
// const coffeeMaker = (coffeeType) => {
//   return `${coffeeType} is made`
// }
// invoking the function - argument which is a value for the parameter
// console.log(coffeeMaker())
// --> undefined is made
// console.log(coffeeMaker("Latte"))
// --> Latte is made
// console.log(coffeeMaker("Mocha"))
// console.log(coffeeMaker("Tuxedo"))

// add multiple parameters
const coffeeMaker = (coffeeType, coffeeSize) => {
  // string interpolation
  return `Your ${coffeeSize} ${coffeeType} is made`
}
// console.log(coffeeMaker("Tuxedo", "large"))
// --> Your large Tuxedo is made
// console.log(coffeeMaker("large", "Tux"))
// --> Your Tux large is made

const myLatte = "latte"
// console.log(coffeeMaker(myLatte, "medium"))
// --> Your medium latte is made

// --> latte is made
// console.log(coffeeMaker("Leo"))
// console.log(coffeeMaker(8))
console.log(coffeeMaker("large"))
// --> Your undefined large is made
