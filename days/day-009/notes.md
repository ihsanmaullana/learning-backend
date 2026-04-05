# Day 9 — Objects

## Apa itu Object?
Object adalah sekumpulan data yang berhubungan yang di dalam data itu mengandung key dan value

## Cara membuat Object
Mirip seperti membuat variable, tapi bedanya adalah ini menggunakan {} setelah =
contoh:
const product = {
  name: "Laptop",
  quantity: 20
};

jadi untuk memisahkan satu key dan key lainnya dipisah pakai (,)

## Cara mengakses data dalam Object
ada 2
- dot notation, contohnya:
console.log(product.name);
satunya lagi:
console.log(product["name"]);

## Null vs string kosong vs undefined
kalo null itu emang sengaja dikosongin atau datanya ga ada
kalau string kosong itu datanya ada tapi ga ada isinya, cuma string kosong aja
kalo undefined gajelas datanya ada apa nggak
