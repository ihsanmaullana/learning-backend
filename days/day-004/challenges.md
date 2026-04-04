# Day 4 — Challenges & Debugging

## Challenge 1: Variable name typo

### What I tried to do

Print a greeting message using a variable.

### The error I got

```
/home/ihsanmaulana/projects/learning-backend/days/day-004/exercises/02-errors.js:5
console.log(greting);
            ^

ReferenceError: greting is not defined
    at Object.<anonymous> (/home/.../02-errors.js:5:13)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    ...

Node.js v18.19.1
```

### Why this happened

I wrote `greting` but the variable was declared as `greeting`.
The computer cannot guess intent — it looked for exactly `greting`, found nothing,
and stopped immediately.

### How I fixed it

Changed `greting` → `greeting` to match the declared variable name exactly.

### What I learned

The computer executes exactly what is written, not what is meant. Even a single
character difference in a variable name is enough to break the program. There is no
fuzzy matching — either the name matches perfectly, or it does not exist.
