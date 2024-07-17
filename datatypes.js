//************************* */
// DATA TYPES
//************************* */


//Strings
//One or more characters inside of quotes
// "",'', ``
console.log("Hello World")
console.log('Hello World')
console.log(`Hello World`)

// declared a variable, stored a string inside of it
let str= "Hello World"
console.log(str)


// using string properties and methods
console.log(str.length) // logging the length of the string
console.log(str.split("")) // splitting the string into an array of individual lettrs
console.log(str.charAt(5))// show me the fifth character of the string

//Numbers
// integers(whole numbers), floats(decimals)
console.log(5)
let num =5
console.log(num)
console.log(num + 5) // 5 + 5 = "10"
console.log(num + "5") // "5" + "5" = "55" (Type Coercion)

console.log(5 / "cheese") //NaN 

// VARIABLES
// VARIABLES ARE CONTAINERS FOR VALUES

// const - block scoped, cannot be reassigned
const bread1 = "sourdough"
console.log(bread1)

// let - block scoped, can be reassigned
let bread2 = "wheat"
bread2 = "white"
console.log(bread2)

//var - function scoped, can be reassigned
var bread3 = "white"
bread3 = "wheat"
console.log(bread3)