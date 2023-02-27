// Classes

// Objects are collections of data written in key value pairs
// Hard coded - manually setting values 
// Dynamic - we can use parameters that allow us pass in a variety of values

// Classes - are a blueprint for an object
  // Class declaration - class
  // Class name - naming syntax for classes use PascalCase
  // Curly braces to define scope of the class

  // Constructor - built in method used to instantiate class variables
  // Instantiate - creates an object by calling on the class using the Javascript keyword "new"

// class Book {
//   constructor() {
//     this.title = "Cracking the Coding Interview",
//     this.pages = 696,
//     this.author = "Gayle McDowell"
//   }
//   showBook() {
//     return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long.`
//   }
// }

// console.log(new Book)
// Book {
//   title: 'Cracking the Coding Interview',
//   pages: 696,
//   author: 'Gayle McDowell'
// }

// const myBook = new Book
// console.log("my book:",myBook)
// console.log(myBook.showBook()) // I am reading Cracking the Coding Interview by Gayle McDowell which is 696 pages long.
// const book1 = new Book
// console.log("book 1:", book1)
// const book2 = new Book
// console.log("book 2:", book2)

//_________________
// Making our class Dynamic

class Book {
  constructor(title, pages, author) {
    this.title = title,
    this.pages = pages,
    this.author = author,
    this.currentPage = 1
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long.`
  }
  readPage(pagesRead) {
    // return this.currentPage = this.currentPage + pagesRead
    return this.currentPage += pagesRead
  }
}

const book1 = new Book("Start With Why", 256, "Simon Sinek")
console.log(book1) // Book { title: 'Start With Why', pages: 256, author: 'Simon Sinek' }
console.log(book1.showBook()) // I am reading Start With Why by Simon Sinek which is 256 pages long.
book1.readPage(30)
console.log(book1)
book1.readPage(25)
console.log(book1)

// const book2 = new Book("Unafraid", 310, "Eddie Penny")
// console.log(book2) // Book { title: 'Unafraid', pages: 310, author: 'Eddie Penny' }
// console.log(book2.showBook()) // I am reading Unafraid by Eddie Penny which is 310 pages long.

