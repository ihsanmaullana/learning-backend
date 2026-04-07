// Exercise: Equality and Type Coercion

// Part 1: Predict before running
// Before running each line, write your prediction as a comment

const a = "10";
const b = 10;

console.log(a == b);   // true  — loose equality, "10" coerced to number 10
console.log(a === b);  // false — strict equality, string !== number
console.log(a != b);   // false — loose not-equal, they are loosely equal so this is false
console.log(a !== b);  // true  — strict not-equal, different types

// Part 2: Falsy values check
// Loop through a list of values and check whether each is truthy or falsy
const values = [0, "", null, undefined, false, NaN, "0", [], {}];

for (const value of values) {
  if (value) {
    console.log(`${JSON.stringify(value)} → truthy`);
  } else {
    console.log(`${String(value)} → falsy`);
  }
}

// Expected output:
// 0 → falsy
//  → falsy          (empty string)
// null → falsy
// undefined → falsy
// false → falsy
// NaN → falsy
// "0" → truthy      (string "0" is NOT falsy)
// [] → truthy       (empty array is NOT falsy)
// {} → truthy       (empty object is NOT falsy)
