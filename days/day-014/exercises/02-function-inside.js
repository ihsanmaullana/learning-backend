function outer() {
  let message = "hello dari outer";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myInner = outer();
myInner();
