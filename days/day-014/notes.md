# Day 14 — Closure

## Apa itu Closure?
Closure adalah kondisi dimana sebuah fungsi di dalam fungsi tetap bisa mengakses variabel dari fungsi luarnya, bahkan setelah fungsi luar tersebut selesai dijalankan.

## Cara Kerjanya
Fungsi luar bertugas membuat “lingkungan” (scope) yang berisi variabel.
Lalu fungsi dalam “mengingat” lingkungan tersebut.
Jadi walaupun fungsi luar sudah selesai, fungsi dalam masih punya akses ke variabel itu.

## Analogi yang Membantu Gue Paham
Bayangin lo punya laci yang isinya data penting.
Terus lo kasih kunci laci itu ke asisten lo.

Walaupun lo pergi, asisten lo masih bisa buka laci itu karena dia pegang kuncinya.
Nah, fungsi dalam itu kayak asisten, dan variabel di fungsi luar itu kayak isi laci.

## Contoh Nyata
//Latihan
function createCounter(){
  let count = 0;

  function increment(){
    count = count + 1;
    return count;
  }

  return increment;
}

const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
