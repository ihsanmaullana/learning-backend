# Week 2 Retrospective — Days 8–14

JavaScript fundamentals week. Every day introduced one new concept, built on the previous,
and ended with at least one real exercise. This document covers everything learned —
including source code and actual output.

---

## Day 8 — Variables & Data Types

### What I Learned
A variable is a named container for a value. In JavaScript there are two modern keywords:
`const` for values that won't change, `let` for values that will.

| Keyword | Reassignable | When to Use |
|---------|-------------|-------------|
| `const` | No  | Names, IDs, config — anything fixed |
| `let`   | Yes | Counters, states, anything that updates |

Five primitive types covered: `Number`, `String`, `Boolean`, `null`, `undefined`.

**The `typeof null` quirk** — `typeof null` returns `"object"` instead of `"null"`.
This is a known bug from 1995 that was intentionally never fixed to preserve backward compatibility.
It's the kind of thing you have to memorize, not understand.

### Exercise: `01-variables.js`

```js
const productName = "Mechanical Keyboard";
const productPrice = 850000;
const productStock = 15;
const isAvailable = true;
const discount = null;

console.log("Product:", productName);
console.log("Price:", productPrice);
console.log("Stock:", productStock);
console.log("Available:", isAvailable);
console.log("Discount:", discount);

console.log("--- Data Types ---");
console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);
console.log(typeof discount); // the surprise: outputs "object"
```

**Output:**
```
Product: Mechanical Keyboard
Price: 850000
Stock: 15
Available: true
Discount: null
--- Data Types ---
string
number
boolean
object
```

### Exercise: `02-my-profile.js`

```js
const fullName = "Ihsan Maulana";
let age = 23;
let homeTown = "Tangerang Selatan";
let isVerified = true;
let phoneNumber = "0823123123123";
let bio = null;

console.log(`My name is ${fullName}`);
console.log(`My age is ${age}`);
console.log(`My hometown is ${homeTown}`);
console.log(`Am I verified: ${isVerified}`);
console.log(`My phone number is ${phoneNumber}`);
console.log(`My bio is ${bio}`);

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof homeTown);
console.log(typeof isVerified);
console.log(typeof phoneNumber);
console.log(typeof bio);
```

**Output:**
```
My name is Ihsan Maulana
My age is 23
My hometown is Tangerang Selatan
Am I verified: true
My phone number is 0823123123123
My bio is null
string
number
string
boolean
string
object
```

---

## Day 9 — Objects

### What I Learned
An object is a collection of related data, structured as key-value pairs.
Where a variable holds one value, an object holds many — all under a single name.

```js
const product = {
  name: "Laptop",
  price: 1500000,
  inStock: true
};
```

**Two ways to access a value:**

```js
product.name         // dot notation   — clean, default choice
product["name"]      // bracket notation — needed when key is dynamic or has special characters
```

Objects are **mutable** even when declared with `const`.
`const` prevents reassigning the variable itself — it doesn't freeze the object's contents.

```js
const product = { price: 1000 };
product.price = 1500; // this is fine
product = {};         // this throws a TypeError
```

**`null` vs `""` vs `undefined` in an object context:**

| Value       | Meaning |
|-------------|---------|
| `null`      | Intentionally absent — "this field exists but has no value right now" |
| `""`        | Exists and is a string — just happens to be empty |
| `undefined` | The key was never set — its existence is unclear |

### Exercise: `01-objects.js`

```js
const product = {
    name: "Nike Air Max",
    price: 1200000,
    stock: 50,
    isAvailable: true,
    category: "Footwear"
};

console.log("Product name:", product.name);
console.log("Price:", product.price);
console.log("Stock:", product.stock);

product.price = 1350000;
console.log("Price after increase:", product.price);

product.discount = 10;
console.log("Discount:", product.discount, "%");

console.log("Full product data:", product);
```

**Output:**
```
Product name: Nike Air Max
Price: 1200000
Stock: 50
Price after increase: 1350000
Discount: 10 %
Full product data: {
  name: 'Nike Air Max',
  price: 1350000,
  stock: 50,
  isAvailable: true,
  category: 'Footwear',
  discount: 10
}
```

### Exercise: `02-objects-practice.js`

```js
const engineer = {
  fullName: "Ihsan Maulana",
  age: 23,
  techStack: "JavaScript",
  isVerified: true,
  motto: null
};

engineer.hobby = "Traveling";
engineer.age = 24;

console.log(`My name is ${engineer.fullName}`);
console.log(`My age is ${engineer.age}`);
console.log(`My tech stack is ${engineer.techStack}`);
console.log(`Am I verified: ${engineer.isVerified}`);
console.log(`My motto is ${engineer.motto}`);
console.log(`My hobby is ${engineer.hobby}`);

console.log(engineer);
```

**Output:**
```
My name is Ihsan Maulana
My age is 24
My tech stack is JavaScript
Am I verified: true
My motto is null
My hobby is Traveling
{
  fullName: 'Ihsan Maulana',
  age: 24,
  techStack: 'JavaScript',
  isVerified: true,
  motto: null,
  hobby: 'Traveling'
}
```

---

## Day 10 — Conditionals (if/else)

### What I Learned
Conditional statements let the program make decisions. JavaScript evaluates each
condition top to bottom and runs the first matching block, ignoring the rest.

```js
if (condition) {
  // runs if true
} else if (anotherCondition) {
  // runs if first was false and this is true
} else {
  // runs if nothing above matched
}
```

`else` is optional — a standalone `if` is perfectly valid. If the condition is false
and there's no `else`, the program just moves on.

**Key comparison operators:**

| Operator | Description |
|----------|-------------|
| `===`    | Strict equal — value AND type must match |
| `!==`    | Strict not-equal |
| `>`      | Greater than |
| `<`      | Less than |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal |

### Exercise: `01-conditionals.js`

```js
// Age checker
const age = 20;
if (age >= 18) {
  console.log("Welcome!");
} else {
  console.log("Cannot enter.");
}

// Score grader
const score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Login check (case-sensitive)
const inputPassword = "OpenSesame";
const correctPassword = "opensesame";
if (inputPassword === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Wrong password");
}
```

**Output:**
```
Welcome!
Grade: B
Wrong password
```

> The login check demonstrates that `===` is case-sensitive.
> "OpenSesame" and "opensesame" are treated as different strings.

### Exercise: `02-truthy-falsy.js`

```js
const input1 = "hello";   // truthy
const input2 = 0;         // falsy
const input3 = null;      // falsy
const input4 = "0";       // truthy — string "0" is NOT the same as number 0
const input5 = [];        // truthy — even an empty array is truthy
```

**Output:**
```
Input received: hello
Input is empty or invalid
Input is empty or invalid
Input received: 0
Input received: []
```

---

## Day 11 — Strict Equality, Type Coercion & Falsy/Truthy Values

### What I Learned
A deeper look at how JavaScript handles comparisons and why `==` is dangerous.

**Type coercion** is when JavaScript silently converts types to make a comparison work:

```js
1 == "1"     // true  — "1" gets coerced to number 1
0 == false   // true  — false gets coerced to number 0
"" == false  // true  — both coerce to 0
```

**Strict equality avoids this entirely:**

```js
1 === "1"    // false — different types, no conversion
0 === false  // false — different types, no conversion
```

**The 6 falsy values in JavaScript:**
`false`, `0`, `""`, `null`, `undefined`, `NaN`

**Everything else is truthy** — including `"0"`, `[]`, and `{}`. This surprises people.

**Short-circuit evaluation:**
- `&&` stops at the first falsy value
- `||` stops at the first truthy value

```js
const username = "";
if (username && password) { ... }
// username is falsy → && short-circuits → password is never checked
```

### Exercise: `01-operators-and-truthiness.js`

```js
// == vs ===
console.log(1 == "1");    // true  — dangerous
console.log(0 == false);  // true  — dangerous
console.log("" == false); // true  — dangerous

console.log(1 === "1");   // false
console.log(0 === false); // false
console.log(1 === 1);     // true

// Falsy values
if ("") { ... } else { console.log("emptyString: falsy"); }
if (0)  { ... } else { console.log("zero: falsy"); }
if (null) { ... } else { console.log("nullValue: falsy"); }

// Surprising truthy values
if ("0") { console.log("zeroAsString: truthy"); }
if ([])  { console.log("emptyArray: truthy"); }
if ({})  { console.log("emptyObject: truthy"); }

// Short-circuit in practice
const username = "";
const password = "abc123";
if (username && password) {
    console.log("Processing login...");
} else {
    console.log("Username or password is empty");
}
```

**Output:**
```
true
true
true
false
false
true
emptyString: falsy
zero: falsy
nullValue: falsy
zeroAsString: truthy
emptyArray: truthy
emptyObject: truthy
Username or password is empty
```

### Exercise: `02-news-filter.js`

A small real-world scenario: filter a news article based on age, verification status, and title.

```js
const newsArticle = {
  title: "Gold prices surge sharply",
  source: "cnbc.com",
  ageInHours: 16,
  isVerified: true
};

if (newsArticle.ageInHours > 24) {
  console.log("Article is too old, skipping");
} else if (!newsArticle.isVerified) {
  console.log("Source is not verified, skipping");
} else if (!newsArticle.title) {
  console.log("Article has no title, skipping");
} else {
  console.log(`Article is safe to display: ${newsArticle.title}`);
}
```

**Output:**
```
Article is safe to display: Gold prices surge sharply
```

> The article passes all three checks: it's under 24 hours old, the source is verified,
> and the title exists. The `else` block runs.

---

## Day 12 — Functions

### What I Learned
A function is a reusable block of code that performs a specific task.
Define it once, call it anywhere.

**Three ways to write a function:**

```js
// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Function Expression
const greet = function(name) {
  return `Hello, ${name}`;
};

// Arrow Function
const greet = (name) => `Hello, ${name}`;
```

**Return value:** what the function sends back. Without `return`, it returns `undefined`.
Use `return` when you need the output elsewhere in the code.

**Functions calling functions:** a function can call other functions inside it.
This is how you break complex tasks into small, composable pieces.

### Exercise: `01-functions.js`

```js
// Task 1: Calculate read time (words ÷ 200 words per minute)
const calculateReadTime = (wordCount) => {
    return wordCount / 200;
};

// Task 2: Categorize market direction
const categorizeMarket = (changePercent) => {
    if (changePercent > 1)  return "Bullish";
    if (changePercent < -1) return "Bearish";
    return "Sideways";
};

// Task 3: Combine both into a label — a function calling two other functions
const generateNewsLabel = (wordCount, changePercent) => {
    const readTime = calculateReadTime(wordCount);
    const market = categorizeMarket(changePercent);
    return `Market: ${market} | Read time: ${readTime} min`;
};

console.log(calculateReadTime(400));          // 2
console.log(calculateReadTime(1000));         // 5
console.log(categorizeMarket(2.5));           // Bullish
console.log(categorizeMarket(-3));            // Bearish
console.log(categorizeMarket(0.5));           // Sideways
console.log(generateNewsLabel(400, 2.5));     // Market: Bullish | Read time: 2 min
```

**Output:**
```
2
5
Bullish
Bearish
Sideways
Market: Bullish | Read time: 2 min
```

---

## Day 13 — Scope

### What I Learned
Scope is the region of code where a variable can be accessed.

**Three types:**

| Type     | Where Declared | Accessible From |
|----------|---------------|-----------------|
| Global   | Outside all functions and blocks | Anywhere in the program |
| Function | Inside a function | Only within that function |
| Block    | Inside `if`, `for`, `while`, etc. | Only within that block |

**Scope chain:** when JavaScript looks up a variable, it starts in the current scope
and works outward — current → enclosing function → global. If it's not found anywhere,
it throws a `ReferenceError`.

**Inner cannot be seen from outer.** A variable inside a function doesn't exist outside it.

**`var` vs `let` vs `const`:**
`var` ignores block scope — it leaks out of `if` and `for` blocks, which caused real bugs.
`let` and `const` have proper block scope. `var` is essentially retired.

### Exercise: `01-scope.js`

```js
// Global vs Function Scope
const siteName = "capital-pulse";

function showSiteInfo() {
    const version = "1.0";
    console.log(siteName); // accessible — global scope
    console.log(version);  // accessible — same function scope
}

showSiteInfo();
console.log(siteName); // accessible — global
// console.log(version); // would throw ReferenceError

// Block Scope with a Conditional
function calculateTotal(price, quantity) {
    let total = 0;

    if (quantity > 0) {
        total = price * quantity;
    }

    return total;
}

console.log(calculateTotal(50000, 3)); // 150000
console.log(calculateTotal(50000, 0)); // 0

// Scope with Arrow Functions
const getUserSummary = (name, age) => {
  const summary = `Name: ${name}, Age: ${age}`;
  return summary;
};

console.log(getUserSummary("Ihsan", 24));
console.log(getUserSummary("Budi", 25));
console.log(getUserSummary("Sari", 30));
```

**Output:**
```
capital-pulse
1.0
capital-pulse
150000
0
Name: Ihsan, Age: 24
Name: Budi, Age: 25
Name: Sari, Age: 30
```

---

## Day 14 — Closure

### What I Learned
A closure is when an inner function retains access to its outer function's variables,
even after the outer function has finished executing.

**Why this is powerful:** the outer function is done — gone from the call stack.
But the inner function still holds a live reference to the variables in that scope.
Those variables persist as long as the inner function exists.

**Mental model:** the outer function creates an environment. The inner function
"closes over" that environment — hence the name. The environment stays alive because
the inner function is still holding a reference to it.

### Exercise: `01-function-basics.js`

This exercise demonstrates that a function is a value — it can be stored in a variable
and called through that variable.

```js
function sayHello() {
  console.log("hello");
}

const myFunction = sayHello; // storing the function reference, not calling it
myFunction();                // calling it through the variable
```

**Output:**
```
hello
```

### Exercise: `02-function-inside.js`

```js
function outer() {
  let message = "hello from outer";

  function inner() {
    console.log(message); // inner closes over `message`
  }

  return inner;
}

const myInner = outer();
myInner();
```

**Output:**
```
hello from outer
```

> `outer()` finishes executing, but `message` doesn't disappear.
> `myInner` holds a reference to `inner`, which holds a reference to `message`.
> The closure keeps `message` alive.

### Exercise: `03-closure-practice.js`

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

**Output:**
```
1
2
3
```

> Each call to `myCounter()` increments the same `count` variable.
> The variable is not reset between calls because the closure keeps it alive.
> If you called `createCounter()` again, you'd get a brand new counter starting at 0,
> completely independent of the first one.

---

## Biggest Struggle This Week

Functions calling functions on Day 12. Tracing where values flow when one function's
return value becomes another function's input requires holding multiple things in mind
at once. It takes deliberate practice, not just reading.

---

## Biggest Breakthrough This Week

Closure on Day 14. At first it sounds abstract — a function that "remembers" its environment.
But once the counter exercise ran and showed `1, 2, 3` (not `1, 1, 1`), it clicked.
The outer function is gone, but `count` is still alive inside the closure. That's not magic —
that's just how JavaScript manages references.

---

## Patterns I'm Starting to See

- **Every concept builds on the last.** Variables → Objects → Functions → Scope → Closure.
  You can't understand closure without scope. You can't understand scope without functions.
- **`const` by default, `let` when needed.** This rule keeps code predictable.
- **`===` always, `==` never.** Type coercion creates bugs that are hard to trace.
- **Functions are values.** They can be stored, passed, and returned. This is what makes closure possible.

---

## Open Questions Going into Week 3

- What are arrays, and how do they relate to objects?
- What is a loop, and how does it connect to functions?
- What does it actually mean for JavaScript to be single-threaded and asynchronous?
- When does closure become something I'll actually use in a real backend project?

---

## Goal for Week 3 (Days 15–21)

- Learn arrays and the methods that come with them (`map`, `filter`, `reduce`)
- Learn loops (`for`, `while`, `for...of`)
- Start building something slightly more substantial — a small data-processing script
- Begin understanding what makes backend JavaScript different from frontend JavaScript
