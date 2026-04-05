//My profile
const fullName = "Ihsan Maulana"; //Karna nama saya gamungkin berubah
let age = 23; //usia selalu berubah
let homeTown = "Tangerang Selatan"; //tempat tinggal juga selalu berubah
let isVerified = true; //karna bisa aja nanti dia berubah jadi gak verified lagi
let phoneNumber = "0823123123123"; //karna tidak akan mungkin dilakukan manipulasi perhitungan, lalu saya pakai let karna nomer hp saya juga bisa berubah kapanpun
let bio = null; //sesuai perintah, kenapa pakai let, kali aja nanti mau di isi

//Menampilkan menggunakan console
console.log(`Nama saya ${fullName}`);
console.log(`Umur saya ${age}`);
console.log(`Kota asal saya di ${homeTown}`);
console.log(`Apakah saya terverifikasi ${isVerified}`);
console.log(`Nomer hp saya ${phoneNumber}`);
console.log(`Bio saya ${bio}`);

//Cek tipe datanya
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof homeTown);
console.log(typeof isVerified);
console.log(typeof phoneNumber);
console.log(typeof bio);


