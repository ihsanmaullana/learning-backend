function sayHello() {
  console.log("hello");
}

// Kita "titipkan resep" ke variabel lain
const myFunction = sayHello;

// Sekarang jalankan dari variabel itu
myFunction();
