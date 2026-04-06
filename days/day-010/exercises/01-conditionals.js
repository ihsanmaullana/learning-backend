// Exercise 1: Age checker
const age = 20;

if (age >= 18) {
  console.log("Welcome!");
} else {
  console.log("Cannot enter.");
} //Hasilnya pasti welcome!, karna age diatas atau sama dengan 18


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
} //Udah pasti hasilnya Grade B, karna nilainya score itu 85, dan kondisi diatas atau sama dengan 75 yang paling pas adalah grade B, setelah ketemu kode bawah kondisi lain akan diabaikan.


// Exercise 3: Simple login check
const inputPassword = "OpenSesame";
const correctPassword = "opensesame";

if (inputPassword === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Wrong password");
} //Pasti successful, karna pas dibandingkan itu sama secara tipe data atau isinya
