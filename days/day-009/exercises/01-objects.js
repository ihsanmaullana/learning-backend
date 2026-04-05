// Menyimpan data satu produk dalam sebuah Object
const product = {
    name: "Nike Air Max",
    price: 1200000,
    stock: 50,
    isAvailable: true,
    category: "Footwear"
};

// Mengakses data dengan dot notation
console.log("Nama produk:", product.name);
console.log("Harga:", product.price);
console.log("Stok:", product.stock);

// Mengubah nilai yang sudah ada
product.price = 1350000;
console.log("Harga setelah naik:", product.price);

// Menambah key baru yang belum ada sebelumnya
product.discount = 10;
console.log("Diskon:", product.discount, "%");

// Melihat seluruh isi object sekaligus
console.log("Data produk lengkap:", product);
