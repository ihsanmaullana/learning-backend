// Exercise 1 — Variables and Data Types

// Product data for a simple store
const productName = "Mechanical Keyboard";
const productPrice = 850000;
const productStock = 15;
const isAvailable = true;
const discount = null;

// Display product information
console.log("Product:", productName);
console.log("Price:", productPrice);
console.log("Stock:", productStock);
console.log("Available:", isAvailable);
console.log("Discount:", discount);

// Check data types
console.log("--- Data Types ---");
console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);
console.log(typeof discount); // note the output — there's a small surprise here (typeof null returns "object")
