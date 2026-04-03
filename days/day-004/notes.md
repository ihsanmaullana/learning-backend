# Day 004 - Notes: What is a Program?

## Program itu apa?
Daftar instruksi yang dikerjakan komputer dari atas ke bawah,
satu per satu, tanpa skip.

## Yang saya pahami hari ini:

**`let` = menyimpan data dengan nama**
Komputer simpan nilai di memori, saya bisa panggil pakai namanya.
Contoh: `let totalSources = 50` → simpan angka 50 dengan nama `totalSources`

**`console.log()` = minta komputer print sesuatu ke terminal**
Cara saya lihat apa yang terjadi di dalam program.

**Node.js = yang jalanin file `.js` di terminal**
Tanpa Node.js, file `.js` cuma teks biasa.
Node.js yang "baca" dan eksekusi instruksinya.

**Error message itu teman, bukan musuh**
Error kasih tahu: masalahnya apa + di baris berapa.
`ReferenceError: greting is not defined` =
komputer cari variabel bernama `greting`, tidak ada.

## Cara baca error message

Lihat baris pertama yang menyebut nama file saya sendiri.
Di situ ada: nama file + nomor baris + karakter yang bermasalah.
Sisa stack trace = internal Node.js, abaikan dulu.
