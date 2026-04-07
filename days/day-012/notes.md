# Day 12 — Functions

## What Is a Function?
A function is a named block of code designed to perform a specific task and reuse it
whenever needed. Functions help group logic so that code stays clean and organized.

## Why Functions Matter
Functions make code more efficient, readable, and maintainable. Instead of rewriting
the same logic over and over, you define it once and call it by name. This reduces
mistakes and makes programs easier to scale.

## Three Ways to Write a Function

**1. Function Declaration** — uses the `function` keyword:
```js
function greet(name) {
  return `Hello, ${name}`;
}
```

**2. Function Expression** — the function is stored in a variable:
```js
const greet = function(name) {
  return `Hello, ${name}`;
};
```

**3. Arrow Function** — shorter syntax using `=>`:
```js
const greet = (name) => `Hello, ${name}`;
```

## Return Value
A return value is the result a function sends back after it runs. With `return`,
the output of the function can be used elsewhere in the code — not just printed.
A function without `return` gives back `undefined`.

## Functions Calling Functions
A function can call other functions inside it to break down complex tasks into
smaller, more manageable pieces. This is the foundation of modular thinking.
