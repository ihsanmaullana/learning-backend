// Tugas:
// Buat sebuah object yang merepresentasikan data diri kamu sebagai seorang developer.
//
// Ketentuan:
// 1. Object harus memiliki minimal 5 key yang relevan (bebas dan kreatif).
// 2. Value dalam object harus menggunakan minimal 3 tipe data berbeda:
//    - string
//    - number
//    - boolean
// 3. Setelah object dibuat, tambahkan satu key baru yang sebelumnya belum ada.
// 4. Ubah salah satu value dari key yang sudah ada.
// 5. Tampilkan isi object ke terminal:
//    - Tidak sekaligus
//    - Tampilkan satu per satu per key menggunakan dot notation
// 6. Di baris terakhir, tampilkan seluruh object sekaligus.
//
// Catatan:
// Jangan langsung bertanya sebelum mencoba minimal 15 menit.

const engineer = {
  fullName: "Ihsan Maulana",
  age: 23,
  techStack: "JavaScript",
  isVerified: true,
  motto: null
};

engineer.hobby = "Traveling";
engineer.age = 24;

console.log(`Nama saya adalah ${engineer.fullName}`);
console.log(`Usia saya ${engineer.age} Tahun`);
console.log(`Teknologi yang saya gunakan ${engineer.techStack}`);
console.log(`Apakah saya terverifikasi ${engineer.isVerified}`);
console.log(`Motto saya ${engineer.motto}`);
console.log(`Hobby saya ${engineer.hobby}`);

console.log(engineer);
