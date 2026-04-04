# Day 4 — What Is a Program?

## Key Concepts

**A program** is a list of instructions that the computer executes from top to bottom,
one by one, without skipping. Every line is read in order, and a single mistake can stop
the entire execution.

---

## What I Understood Today

### `let` — storing data with a name

The computer saves a value in memory and I can reference it by name later.

```js
let totalSources = 50;  // stores the number 50 under the name "totalSources"
```

---

### `console.log()` — printing output to the terminal

This is how I see what is happening inside the program while it runs.

```js
console.log("Hello, world!");
```

---

### Node.js — the runtime that executes `.js` files

Without Node.js, a `.js` file is just plain text. Node.js is what "reads" and executes
the instructions written in JavaScript. You run a file like this:

```bash
node filename.js
```

---

### Error messages are friends, not enemies

An error tells you: **what the problem is** + **which line it is on**.

```
ReferenceError: greting is not defined
```

This means the computer looked for a variable named `greting`, found none, and stopped.
The fix: check the spelling against the declared variable name.

---

## How to Read an Error Message

1. Find the **first line that mentions your own file name** — that is where the problem is.
2. It shows: `file name : line number : character position`.
3. The rest of the stack trace shows Node.js internals — ignore those for now.

---

## Interesting Discovery

You can run JavaScript directly in the **browser console** (`F12` → Console tab).
It is not just for displaying output — it is a full JavaScript runtime.
