// Task:
// Create an object that represents your own data as a developer.
//
// Requirements:
// 1. The object must have at least 5 relevant keys (be creative).
// 2. Values must use at least 3 different data types:
//    - string
//    - number
//    - boolean
// 3. After the object is created, add one new key that wasn't there before.
// 4. Update one existing value.
// 5. Display the object's contents to the terminal:
//    - Not all at once
//    - One by one per key using dot notation
// 6. On the last line, display the full object all at once.
//
// Note:
// Don't ask for help before trying for at least 15 minutes.

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
