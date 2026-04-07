// ============================================
// PART 1: == vs ===
// ============================================

// Loose equality — JavaScript converts types before comparing
console.log(1 == "1");    // true  — dangerous
console.log(0 == false);  // true  — dangerous
console.log("" == false); // true  — dangerous

// Strict equality — type and value must match exactly
console.log(1 === "1");   // false — 1 is a number, "1" is a string
console.log(0 === false); // false — 0 is a number, false is a boolean
console.log(1 === 1);     // true  — same type, same value

// Rule: always use === without exception


// ============================================
// PART 2: Falsy values inside an if condition
// ============================================

// All of these evaluate as false
const emptyString = "";
const zero = 0;
const nullValue = null;
const undefinedValue = undefined;
const notANumber = NaN;
const falseBool = false;

if (emptyString) {
    console.log("emptyString: truthy");
} else {
    console.log("emptyString: falsy"); // this runs
}

if (zero) {
    console.log("zero: truthy");
} else {
    console.log("zero: falsy"); // this runs
}

if (nullValue) {
    console.log("nullValue: truthy");
} else {
    console.log("nullValue: falsy"); // this runs
}


// ============================================
// PART 3: Truthy values that often surprise people
// ============================================

const zeroAsString = "0";   // string containing "0" — truthy!
const emptyArray = [];       // empty array — truthy!
const emptyObject = {};      // empty object — truthy!

if (zeroAsString) {
    console.log("zeroAsString: truthy"); // this runs
}

if (emptyArray) {
    console.log("emptyArray: truthy"); // this runs
}

if (emptyObject) {
    console.log("emptyObject: truthy"); // this runs
}


// ============================================
// PART 4: Real example — user input validation
// ============================================

const username = "";       // user left username blank
const password = "abc123"; // user filled in password

// Check if both fields are filled
if (username && password) {
    console.log("Processing login...");
} else {
    console.log("Username or password is empty"); // this runs
}

// Why does this work?
// username = "" → falsy
// "" && "abc123" → immediately false, no need to check password
// This is called short-circuit evaluation
