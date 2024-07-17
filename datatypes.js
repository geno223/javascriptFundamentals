//************************************** */
// DATA TYPES
//************************************** */

// Strings
// one or more characters inside of quotes
// "" '' ``
console.log("Hello World");
console.log("Hello World");
console.log(`Hello World`);

// declared a variable, stored a string inside of it
let str = "Hello World";

// logging the value of the variable
console.log(str);

// using string properties and methods
console.log(str.length); // logging the length of the string
console.log(str.split("-")); // splitting the string into an array of individual lettrs
console.log(str.charAt(4)); // show me the fifth character of the string

// Numbers
// integers (whole numbers), floats(decimals)
console.log(5);

// declared a variable, stored a number inside of it
let num = 5;

console.log(num);
console.log(num + 5); // 5 + 5 = "10"
console.log(num + "5"); // "5" + "5" = "55" (Type Coercion)

console.log(5 / "cheese"); //NaN

// VARIABLES
// VARIABLES ARE CONTAINERS FOR VALUES

// const - block scoped, cannot be reassigned
const bread1 = "sourdough";
console.log(bread1);

// let - block scoped, can be reassigned
let bread2 = "wheat";
bread2 = "white";
console.log(bread2);

//var - function scoped, can be reassigned
var bread3 = "white";
bread3 = "wheat";
console.log(bread3);

// BLOCK SCOPING
// The variable only exists inside the of the {} it was defined in

const a = 5;

{
  const a = 10;
  console.log(a); // log 10
}

console.log(a); // log 5

// FUNCTION SCOPING
// The only time a variable gets its own scope is inside of a function, otherwise its global

{
    var b = 10;
}

console.log(b); // log 10

function myFunc() {
    var b = 5;
    console.log(b) // log 5
}
myFunc();

console.log(b); // log 10

// OPERATORS

// Math Operators
// +, -, *, /, %, **
console.log(5 + 5); // 10
console.log(5 - 5); // 0
console.log(5 * 5); // 25
console.log(5 / 5); // 1
console.log(5 % 5); // 0 (Remainder/Pizza)
console.log(5 ** 5); // 3125

// BOOLEAN OPERATORS (Booleans are either true or false)
// >, <, >=, <=, ===, !==, !
console.log(5 > 5); // false
console.log(5 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true
console.log(5 === 5); // true
console.log(5 !== 5); // false
console.log(!true); // false
console.log(!false); // true

console.log(5 === "5"); // false
console.log(5 == "5"); // true

console.log(Boolean("cheese"))

// truthy and falsy values
// everything is true unless it is falsy
// falsy values: 0, "", null, undefined, NaN, false