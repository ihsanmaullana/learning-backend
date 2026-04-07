# Day 13 — Reflections

## What Clicked Immediately
The definition of scope was easy to understand — a variable only exists within
the area where it was declared, and JavaScript walks up the chain to find it.

## What Was Still Confusing
Whether to default to `const` or `let` when declaring variables inside a scope.

The rule I've settled on: start with `const` always. Only switch to `let` if you
know the value will need to be reassigned later. This keeps the code more predictable
and signals intent clearly to anyone reading it.

## How I Would Explain Scope to a Non-Developer
Scope is like being inside a car with tinted windows. From inside, you can see
everything outside — but people outside can't see you. Variables in an inner scope
can access outer scope, but the outer scope has no visibility into what's inside.
