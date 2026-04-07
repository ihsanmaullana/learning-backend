function sayHello() {
  console.log("hello");
}

// Storing the function reference in another variable
// (passing the recipe, not calling it yet)
const myFunction = sayHello;

// Now call it from the variable
myFunction();
