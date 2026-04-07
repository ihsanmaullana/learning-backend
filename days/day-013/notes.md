# Day 13 — Scope

## Apa itu Scope?
Scope itu tempat atau area di dalam kode yang menentukan sebuah variable bisa dipakai di mana.

## Tiga Jenis Scope
- **Global Scope**: variable yang dibuat di luar function atau block, jadi bisa dipakai di mana saja.
- **Function Scope**: variable yang dibuat di dalam function, cuma bisa dipakai di dalam function itu.
- **Block Scope**: variable yang dibuat di dalam block seperti `if`, `for`, atau `while`, cuma bisa dipakai di dalam block tersebut.

## Scope Chain
Kalau kita manggil sebuah variable, JavaScript bakal nyari dulu di scope saat ini.
Kalau nggak ketemu, dia bakal naik ke scope di luar, terus ke luar lagi, sampai ke global.

Kalau sampai global masih nggak ketemu, baru muncul error.

Sebaliknya, variable yang ada di dalam (inner scope) nggak bisa diakses dari luar (outer scope).

## var vs let vs const soal Scope
- `var` sekarang udah jarang dipakai karena dia nggak punya block scope, jadi bisa bikin bug.
- `let` dan `const` punya block scope, jadi lebih aman.
- Biasanya pakai `const` kalau nilainya nggak berubah, dan `let` kalau bisa berubah.
