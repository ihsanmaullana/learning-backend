// Exercise: Truthy and Falsy Check
// Fill in each input with a value — try mixing truthy and falsy values to see the difference

const input1 = "hello";      // truthy — non-empty string
const input2 = 0;            // falsy  — zero is always falsy
const input3 = null;         // falsy  — null is always falsy
const input4 = "0";          // truthy — the string "0" is NOT falsy, only the number 0 is
const input5 = [];           // truthy — even an empty array is truthy in JavaScript

if (input1) {
    console.log("Input received:", input1);
} else {
    console.log("Input is empty or invalid");
}

if (input2) {
    console.log("Input received:", input2);
} else {
    console.log("Input is empty or invalid");
}

if (input3) {
    console.log("Input received:", input3);
} else {
    console.log("Input is empty or invalid");
}

if (input4) {
    console.log("Input received:", input4);
} else {
    console.log("Input is empty or invalid");
}

if (input5) {
    console.log("Input received:", input5);
} else {
    console.log("Input is empty or invalid");
}
