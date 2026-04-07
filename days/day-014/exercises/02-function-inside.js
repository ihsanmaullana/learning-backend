function outer() {
  let message = "hello from outer";

  function inner() {
    console.log(message); // inner can access message even though it's defined in outer
  }

  return inner;
}

const myInner = outer();
myInner(); // prints: "hello from outer"
