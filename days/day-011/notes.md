# Day 11 — Operators & Conditionals (Continued)

## == vs ===
Two comparison operators in JavaScript that work very differently.

`==` (loose equality) compares values after automatically converting types to match.
This process is called type coercion. It's dangerous because the results can be unexpected.

`===` (strict equality) compares both value AND type simultaneously.
No automatic conversion happens. This is always the one to use.

**Rule: always use `===`, never `==`.**

## Type Coercion
The process where JavaScript silently converts a value's type during comparison.
It happens automatically, without being asked.

Examples:
- `1 == "1"` → JavaScript converts `"1"` to number `1` → `true`
- `0 == false` → JavaScript converts `false` to number `0` → `true`

## Falsy Values
There are exactly 6 values that evaluate as `false` inside an `if` condition:
- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy — including `"0"`, `[]`, and `{}`.

## Common Traps
`0` and `""` don't mean a variable doesn't exist.
The variable is there, the value is there — JavaScript just evaluates them as false.
Example: `userAge = 0` will be treated as "not filled in" if you're not careful.

## Short-circuit Evaluation
With `&&`, JavaScript reads left to right.
If the first value is already falsy, it stops immediately — it won't check the rest.
With `||`, if the first value is already truthy, it stops immediately.

## Connection to capital-pulse
The news filter logic uses all of these concepts:
- Check `ageInHours > 24` → skip old articles
- Check `!isVerified` → skip unverified sources
- Check `!title` → skip articles with no title
- `else` → article is safe to display
