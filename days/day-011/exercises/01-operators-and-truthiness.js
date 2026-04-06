// ============================================
// BAGIAN 1: == vs ===
// ============================================

// Loose equality — JavaScript ubah tipe dulu sebelum bandingkan
console.log(1 == "1");    // true  — berbahaya
console.log(0 == false);  // true  — berbahaya
console.log("" == false); // true  — berbahaya

// Strict equality — tipe dan nilai harus sama persis
console.log(1 === "1");   // false — 1 angka, "1" string
console.log(0 === false); // false — 0 angka, false boolean
console.log(1 === 1);     // true  — sama tipe, sama nilai

// Aturan: selalu pakai === tanpa terkecuali


// ============================================
// BAGIAN 2: Falsy values di dalam kondisi if
// ============================================

// Semua ini dievaluasi sebagai false
const emptyString = "";
const zero = 0;
const nullValue = null;
const undefinedValue = undefined;
const notANumber = NaN;
const falseBool = false;

if (emptyString) {
    console.log("emptyString: truthy");
} else {
    console.log("emptyString: falsy"); // ini yang jalan
}

if (zero) {
    console.log("zero: truthy");
} else {
    console.log("zero: falsy"); // ini yang jalan
}

if (nullValue) {
    console.log("nullValue: truthy");
} else {
    console.log("nullValue: falsy"); // ini yang jalan
}


// ============================================
// BAGIAN 3: Truthy values yang sering mengejutkan
// ============================================

const zeroAsString = "0";   // string berisi "0" — truthy!
const emptyArray = [];       // array kosong — truthy!
const emptyObject = {};      // object kosong — truthy!

if (zeroAsString) {
    console.log("zeroAsString: truthy"); // ini yang jalan
}

if (emptyArray) {
    console.log("emptyArray: truthy"); // ini yang jalan
}

if (emptyObject) {
    console.log("emptyObject: truthy"); // ini yang jalan
}


// ============================================
// BAGIAN 4: Contoh nyata — validasi input user
// ============================================

const username = "";       // user tidak mengisi username
const password = "abc123"; // user mengisi password

// Cek apakah kedua field sudah diisi
if (username && password) {
    console.log("Login diproses");
} else {
    console.log("Username atau password kosong"); // ini yang jalan
}

// Kenapa ini works?
// username = "" → falsy
// "" && "abc123" → langsung false, tidak perlu cek password
// Ini namanya short-circuit evaluation — akan dibahas lebih dalam nanti
