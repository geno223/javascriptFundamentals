// --------------------------------------
// CONTROL FLOW
// --------------------------------------
// Define: Control flow is the order in which statements are executed in a program.

// Conditionals
// If statements which are used to make decisions in code.
// if (condition) {} else if (condition) {} else {}

let x = 6;

if (x > 5) {
    console.log("x is greater than 5");
} else if (x < 5) {
    console.log("x is less than 5");
} else {
    console.log("x is equal to 5");
}

// Switch statements
// Switch statements are used to perform different actions based on different conditions.
// switch (value) { case x: // code block break; case y: // code block break; default: // code block }

let y = 5;

// run the case in which y is equal to the case value
switch (y) {

    case 5: 
        console.log("y is equal to 5");
        break;

    case 6: 
        console.log("y is equal to 6");
        break;

    default:    
        console.log("y is not equal to 5 or 6");

}
// Ternary Operator
// inlined if statement
// condition ? true : false

let result = 5 > 3 ? "true" : "false"

console.log(result);