// Closure exercise: a counter with persistent state
function createCounter() {
  let count = 0;

  function increment() {
    count = count + 1;
    return count;
  }

  return increment;
}

// createCounter() runs once and returns the increment function
// myCounter holds a reference to that function — and to its closed-over count
const myCounter = createCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
