// EXERCISE 1: Global vs Function Scope
const siteName = "capital-pulse";

function showSiteInfo() {
    const version = "1.0";
    console.log(siteName); // accessible — siteName is in global scope
    console.log(version);  // accessible — version is in the same function scope
}

showSiteInfo();
console.log(siteName); // accessible — still in global scope
// console.log(version); // would throw ReferenceError — version only exists inside showSiteInfo


// EXERCISE 2: Block Scope with a Conditional
function calculateTotal(price, quantity) {
    let total = 0; // declared in function scope with a default value

    if (quantity > 0) {
        total = price * quantity; // updates the existing variable — no let/const here
    }

    return total; // always returns, regardless of the condition
}

console.log(calculateTotal(50000, 3));  // 150000
console.log(calculateTotal(50000, 0));  // 0 — not undefined, because total was initialized above


// EXERCISE 3: Scope with Arrow Functions
const getUserSummary = (name, age) => {
  const summary = `Name: ${name}, Age: ${age}`;
  return summary;
};

console.log(getUserSummary("Ihsan", 24));
console.log(getUserSummary("Budi", 25));
console.log(getUserSummary("Sari", 30));
