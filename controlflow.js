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

// Loops
// Loops are used to execute the same block of code a specified number of times.



// While Loop
// while (condition) { // code block }

let i = 0;

while (i < 5) {
    console.log(i);
    i++; // ++ is the same as i = i + 1
}
// nested while loop

let outer = 0


while (outer < 5) {
    console.log("outer", outer);

    let inner = 0;

    while (inner < 3) {
        console.log("inner", inner);
        inner++;
    }
    
    outer++
}

// write a loop that runs 5 times
// 1. declare a variable to tracks loops
let loop = 0;
// 2. declare a loop using the variable
while (loop < 5) {
    console.log("loop", loop);
    // 3. increment the variable at the end of the loop
    loop++;
}
// For Loop
// for (initialization; condition; increment) { // code block }

for (let v = 0; v < 5; v++) {
    console.log(v);
}
// Functions
// Functions are blocks of code that can be reused.
// attaching a block of code to a name, that you can reuse whenever you want

// function declaration
function helloWorld(){
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
}

helloWorld()
helloWorld()
helloWorld()