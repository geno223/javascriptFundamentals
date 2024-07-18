//************************************** */
// The Math Object
//************************************** */

console.log(Math)
console.log(Math.PI) // 3.141592653589793

// Math Methods (Functions)
// Math.round() (rounds to nearest integer)
console.log(Math.round(4.9)) // 5
// Math.floor() (always rounds down)
console.log(Math.floor(4.9)) // 4
// Math.ceil() (always rounds up)
console.log(Math.ceil(4.1)) // 5

// Generating Random Numbers
// Math.random() (generates a random number between 0 and 1)
console.log(Math.random())

// How to randomize integers between 0 and 10
// you take a random number between 0 and 1
const randomNum = Math.random()
console.log("random number", randomNum)
// multiply by the max number you want to find (10)
const numTimesTen = randomNum * 10
console.log("randomNum * 10", numTimesTen)
// round down to the nearest integer
const roundedNum = Math.floor(numTimesTen)
console.log("roundedNum", roundedNum)

// Same thing by on one line        
const randomInteger = Math.floor(Math.random() * 10)
console.log("randomInteger", randomInteger)