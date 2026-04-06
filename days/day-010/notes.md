# Day 10 — Conditionals (if/else)

## Apa itu Conditional Statement?
Conditional statement itu dimana percabangan logika jika suatu kondisi tidak terpenuhi maka kondisi yang cocok akan dijalankan.

## Struktur if/else
strukturnya ada if, atau inisialisasi statement, lalu ada (), kondisi apa yang harus ada, lalu didalam {
  disini code akan dijalankan kalo kondisinya cocok
} else if(kondisi kedua){
  ini kalo kondisinya yang pertama tadi gak cocok dia akan coba cocokin di kondisi kedua ini
} kalo mau ditambah kondisi terus bisa, tapi bisa langsung else {
  kalo semua kondisi gak cocok maka akan lakukan apa
}

## Operator Perbandingan
ada beberapa operator perbandingan
== membandingkan apakah a itu sama dengan b, tapi tipe datanya kalo satunya "100" dan satunya 100, akan dianggap sama karna dia akan mengkonversi yang pertama tadi jadi sama
=== ini sangat strick jadi kalo tipe datanya beda itu ga akan dianggap sama
> ini lebih dari
< ini kurang dari
>= ini lebih dari sama dengan jadi misal apakah 80 itu >= 80, jawabannya iya
<= kalo itu sebaliknya tadi
dan lainnya seperti !=, !==

## Yang Perlu Diingat
- JavaScript baca kondisi dari atas ke bawah
- Begitu ketemu kondisi true, blok lain diabaikan
- === itu case-sensitive untuk string

## Catatan Tambahan
File 01-equality.js di folder ini dibuat lebih awal sebelum
materi if/else dibahas. Akan didalami lagi setelah kondisi
dan operator dipelajari dengan benar.
