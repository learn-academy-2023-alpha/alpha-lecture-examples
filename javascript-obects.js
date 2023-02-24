// Objects

// Primitive Data types
  // Number
  // String
  // Null
  // Undefined
  // Boolean
  // Symbol

// Arrays - collection of data type

console.log(typeof [1, 2, 3]) // object

// Object - data type that is a collection of things:
  // Arrays - [1, 2, 3] values can be located by index
  // Object - A collection of data that stores a value to a name instead of an index {key: value}
    // Key value pairs
    // Stored inside of curly braces

// h1 {
//   color: "purple"
// }


// let myObject = {key1: "value1", key2: "value2", key3: "value3"}
// console.log(myObject) // { key1: 'value1', key2: 'value2', key3: 'value3' }

// Symbol - unique identifier often used as keys in objects
    // Acts as little variables
    // Key holds the value
    // Value is any valid javascript data type

let myObject = {
  key1: "value1", 
  key2: "value2", 
  key3: "value3", 
  key4: 7, 
  key5: true
}

// console.log(myObject)
// console.log(myObject.key2) // value2
// console.log(myObject.key4) // 7

//____________

let breakfast = {
  item1: "Bacon",
  item2: "Sandwich",
  item3: "Eggs",
  item4: {
    beverage1: "Coffee",
    beverage2: "Water",
    beverage3: "Orange Juice",
    beverage4: {
      smoothie1: "Banana",
      smoothie2: "Strawberry",
      smoothie3: "Protein",
      smoothie4: ["Banana", "Stawberry", "Peanut Butter"]
    }
  }
}

// console.log(breakfast)
// console.log(breakfast.item1) // Bacon
// console.log(breakfast.item4)
// {
//   beverage1: 'Coffee',
//   beverage2: 'Water',
//   beverage3: 'Orange Juice',
//   beverage4: {
//     smoothie1: 'Banana',
//     smoothie2: 'Strawberry',
//     smoothie3: 'Protein'
//   }
// }

// console.log(breakfast.smoothie1) // undefined
// console.log(breakfast.item4.beverage4.smoothie1) // Banana
// console.log(breakfast.item4.beverage4.smoothie2) // Strawberry
// console.log(breakfast.item4.beverage4.smoothie3) // Protein

// console.log(breakfast.item4.beverage4.smoothie4.map(value => value.toUpperCase()))


// _________________
// Object Destructuring - defining a pathway through a nested object

let { smoothie1, smoothie2, smoothie3, smoothie4 } = breakfast.item4.beverage4
// console.log(smoothie1, smoothie2) // Banana
// console.log(smoothie1) // Banana
// console.log(smoothie2) // Strawberry
// console.log(smoothie3) // Protein
// console.log(smoothie4) // [ 'Banana', 'Stawberry', 'Peanut Butter' ]
// // console.log(item4) // undefined

// _______________
// Methods - functions that belong to an object

// this - references the object name when inside the object
// objects can have static data (any data type) and behavior

let numbers = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}

console.log(numbers.num2) // 10

console.log(numbers.addUp()) // 30
