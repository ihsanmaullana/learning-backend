# Day 10 — Conditionals (if/else)

## What Is a Conditional Statement?
A conditional statement is a way to branch the logic of a program — if a certain condition is met, one block of code runs; otherwise, a different block runs.

## Structure of if/else

```js
if (condition) {
  // runs if condition is true
} else if (secondCondition) {
  // runs if the first condition was false, but this one is true
} else {
  // runs if none of the above conditions matched
}
```

You can chain as many `else if` blocks as needed. Once a matching condition is found,
the rest are skipped.

## Comparison Operators

| Operator | Description |
|----------|-------------|
| `==`  | Loose equality — compares values after automatic type conversion (type coercion) |
| `===` | Strict equality — compares both value AND type, no conversion |
| `>`   | Greater than |
| `<`   | Less than |
| `>=`  | Greater than or equal to |
| `<=`  | Less than or equal to |
| `!=`  | Loose not-equal |
| `!==` | Strict not-equal |

## Things to Remember
- JavaScript reads conditions top to bottom
- Once a matching `true` condition is found, all remaining blocks are ignored
- `===` is case-sensitive when comparing strings

## Additional Note
The `01-equality.js` file in this folder was created earlier, before the if/else
material was covered. It will be revisited once conditions and operators are properly understood.
