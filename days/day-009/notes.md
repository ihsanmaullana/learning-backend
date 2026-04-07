# Day 9 — Objects

## What Is an Object?
An object is a collection of related data, where each piece of data is stored as a key-value pair.

## How to Create an Object
Similar to declaring a variable, but with curly braces `{}` after the `=`:

```js
const product = {
  name: "Laptop",
  quantity: 20
};
```

Each key-value pair is separated by a comma `,`.

## How to Access Data Inside an Object
There are two ways:

**Dot notation:**
```js
console.log(product.name);
```

**Bracket notation:**
```js
console.log(product["name"]);
```

Dot notation is cleaner and used most of the time. Bracket notation is useful when the key is dynamic (e.g., stored in a variable) or when the key contains special characters.

## null vs Empty String vs undefined

| Value       | Meaning                                          |
|-------------|--------------------------------------------------|
| `null`      | Data intentionally absent or cleared             |
| `""`        | Data exists, but the content is an empty string  |
| `undefined` | Data was never assigned — its existence is unclear |
