// My profile
const fullName = "Ihsan Maulana"; // const because my name will never change
let age = 23;                      // let because age always changes
let homeTown = "Tangerang Selatan"; // let because where I live can change
let isVerified = true;             // let because verification status can change
let phoneNumber = "0823123123123"; // let because phone numbers can change, and it's a string since we won't do math on it
let bio = null;                    // null per the exercise instructions — let in case it gets filled in later

// Display using console.log
console.log(`My name is ${fullName}`);
console.log(`My age is ${age}`);
console.log(`My hometown is ${homeTown}`);
console.log(`Am I verified: ${isVerified}`);
console.log(`My phone number is ${phoneNumber}`);
console.log(`My bio is ${bio}`);

// Check data types
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof homeTown);
console.log(typeof isVerified);
console.log(typeof phoneNumber);
console.log(typeof bio);   // outputs "object" — this is a known JavaScript quirk
