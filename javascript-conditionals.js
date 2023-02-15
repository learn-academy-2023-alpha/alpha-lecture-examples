// Javascript Conditionals - 2/15/23 Alpha 2023

// Conditionals - decision trees, if/else statements, conditional statements
    // - use conditions to produce an output
    // Conditions - determine if a value is true or false (Boolean values)
    // The first true condition will produce an output for the conditional. Only one output per conditional.

// Conditions
  // Boolean values - true or false
  // Conditions are setup by three operators
    // Operators
      // Equality: == loose or === strict

      // Examples
        // var num = 23
        // console.log(num === 23) //output: true
        // console.log(num == "23") //output: true
        // console.log(num === "23") //output: false because different datatypes
        // console.log(num === 20) //output: false

      // Relational: <, <=, >, >=

      // Examples
      // var myName = "CJ"
      // console.log(num > 20) //output: true
      // console.log(num > myName) // output: false different datatypes
      // console.log(myName.length) //output: 2
      // console.log(num > myName.length) // output: true

      // Logical: && (And), || (Or), ! (Bang operator, Not, Negation)

      // Examples
      // Logical And
        // console.log(num > 20 && num > myName.length) //output: true
        // console.log(num < 20 && num > myName.length) //output: false, because the first condition is false. && only produces true when all conditions are true.

      // Logical Or
        // console.log(num < 20 || num > myName.length) //output: true, || only needs one condition to be true

      // Negation
        // console.log(!(num < 20 || num > myName.length)) //output: false
        // console.log(num < 20 || !num > myName.length) //output: false
        // console.log(!num > myName.length) //output: false

// Conditionals
  // if - takes a condition () and performs logic {}
    // - only one if per conditional
  // var num = 23
  // if(num > 18){
  //   console.log("This number is greater than 18")
  // }

  // else - only performs logic if the other conditions are false, catchall
    // - only one else per conditional
  // var favColor = "blue"
  // if(favColor === "purple") {
  //   console.log("Have you considered blue?")
  // } else {
  //   console.log("Blue is a better color")
  // }

  // else if - allows to include additional conditions and logic
  var favColor = "purple"
  // var nextColor = "pink"
  if(favColor === "purple") {
    console.log("Have you considered blue?")
  } else if( favColor === "pink") {
    console.log("That is the second best color to blue")
  } else if(favColor === "blue") {
    console.log("You have great taste")
  } else {
    console.log("Try blue")
  }
  