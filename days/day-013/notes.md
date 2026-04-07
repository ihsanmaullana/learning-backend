# Day 13 — Scope

## What Is Scope?
Scope is the region of code where a variable can be accessed. It defines where a
variable "lives" and from which parts of the program it can be used.

## Three Types of Scope

- **Global Scope** — a variable declared outside any function or block. It can be accessed from anywhere in the program.
- **Function Scope** — a variable declared inside a function. It only exists within that function and cannot be accessed from outside.
- **Block Scope** — a variable declared inside a block like `if`, `for`, or `while`. It only exists within that block.

## Scope Chain
When JavaScript tries to use a variable, it first looks in the current scope.
If it's not there, it moves up to the outer scope, then further out, until it reaches global scope.

If the variable still isn't found at global level, JavaScript throws a `ReferenceError`.

The reverse is not true: variables in an inner scope cannot be accessed from an outer scope.

## var vs let vs const — Scope Differences

- `var` is rarely used today because it ignores block scope, which leads to hard-to-find bugs.
- `let` and `const` both respect block scope, making them safer and more predictable.
- Use `const` by default when the value won't change, and `let` when it will.
