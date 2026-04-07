// Exercise 1: Age checker
const age = 20;

if (age >= 18) {
  console.log("Welcome!");
} else {
  console.log("Cannot enter.");
} // Output: "Welcome!" — age is above or equal to 18


// Exercise 2: Score grader
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
} // Output: "Grade: B" — score is 85, which matches >= 75. Once a match is found, the rest are skipped.


// Exercise 3: Simple login check
const inputPassword = "OpenSesame";
const correctPassword = "opensesame";

if (inputPassword === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Wrong password");
} // Output: "Wrong password" — === is case-sensitive, so "OpenSesame" !== "opensesame"
