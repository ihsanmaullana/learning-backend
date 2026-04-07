//LATIHAN 1
const siteName = "capital-pulse";

function showSiteInfo() {
    const version = "1.0";
    console.log(siteName); // Bisa diakses karna siteName ada di scope global
    console.log(version);  // Bisa diakses juga karna version ada satu scope di function ini
}

showSiteInfo();
console.log(siteName); // Bisa diakses karna sama sama di global scope
// console.log(version);  // tidak bisa diakses karna variable version ada di dalam scope function showSiteInfo

//LATIHAN 2
function calculateTotal(price, quantity) {
    let total = 0; // deklarasi di function scope, beri nilai default

    if (quantity > 0) {
        total = price * quantity; // isi nilainya — tanpa let/const
    }

    return total; // selalu return, apapun yang terjadi
}

console.log(calculateTotal(50000, 3));  // harusnya 150000
console.log(calculateTotal(50000, 0));  // harusnya 0, bukan undefined

//LATIHAN 3
const getUserSummary = (name, age) => {
  const summary = `Name: ${name}, Age: ${age}`
  return summary;
}

console.log(getUserSummary("Ihsan", 24));
console.log(getUserSummary("Budi", 25));
console.log(getUserSummary("Sari", 30));
