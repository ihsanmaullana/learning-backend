# Day 14 — Closure

## What Is a Closure?
A closure is when an inner function retains access to variables from its outer function,
even after the outer function has already finished executing.

## How It Works
The outer function creates an environment (a scope) that contains variables.
The inner function "remembers" that environment.
So even though the outer function is done, the inner function still has access to those variables.

## Analogy That Helped It Click
Imagine you have a drawer full of important data.
You hand a key to that drawer to your assistant.

Even after you leave, your assistant can still open the drawer — because they have the key.
The inner function is like the assistant, and the variable in the outer function is what's inside the drawer.

## Practical Example

```js
function createCounter() {
  let count = 0;

  function increment() {
    count = count + 1;
    return count;
  }

  return increment;
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
```

`createCounter` runs once and finishes — but `myCounter` still has access to `count`
because it closed over the outer function's scope. Each call to `myCounter()` updates
the same `count` variable, which persists between calls.

## Why Wrap It in a Variable First?
`createCounter()` returns a function, not a value.
To call that returned function multiple times, you store it in a variable first.
If you called `createCounter()` directly each time, you'd get a brand new counter starting from 0 every time.
