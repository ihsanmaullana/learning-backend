//Latihan
function createCounter(){
  let count = 0;

  function increment(){
    count = count + 1;
    return count;
  }

  return increment;
}

const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
