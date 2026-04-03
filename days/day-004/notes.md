# Day 004 - Notes: What is a Program?

## What is a program?
A list of instructions that the computer executes from top to bottom,
one by one, without skipping.

## What I understood today:

**`let` = store data with a name**
The computer saves a value in memory, and I can reference it by name.
Example: `let totalSources = 50` → stores the number 50 under the name `totalSources`

**`console.log()` = ask the computer to print something to the terminal**
This is how I see what's happening inside the program.

**Node.js = the thing that runs `.js` files in the terminal**
Without Node.js, a `.js` file is just plain text.
Node.js is what "reads" and executes the instructions.

**Error messages are friends, not enemies**
An error tells you: what the problem is + which line it's on.
`ReferenceError: greting is not defined` =
the computer looked for a variable named `greting`, found none.

## How to read an error message

Find the first line that mentions my own file name.
It shows: file name + line number + the problematic character.
The rest of the stack trace = Node.js internals, ignore for now.
