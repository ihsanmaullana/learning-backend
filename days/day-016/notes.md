# Day 16 — Higher-Order Functions & Array Methods

## Apa itu filter, map, dan forEach?
- filter → untuk menyaring data berdasarkan kondisi tertentu, tanpa mengubah data asli.
- map → untuk mengubah setiap data menjadi bentuk baru, hasilnya array baru.
- forEach → untuk menjalankan aksi pada setiap data, tapi tidak menghasilkan array baru.

## Perbedaan map dan forEach
- map → digunakan kalau kita ingin menghasilkan data baru (transformasi).
- forEach → digunakan kalau hanya ingin menjalankan aksi (misalnya console.log).

## Kenapa filter sebelum map?
Karena filter menentukan data mana yang lolos dulu, baru kemudian map mengubah datanya.

Kalau dibalik (map dulu baru filter), kita bisa mengubah data yang sebenarnya tidak perlu diproses, atau malah merusak kondisi filter.

Urutan yang benar:
data → filter (pilih) → map (ubah)
