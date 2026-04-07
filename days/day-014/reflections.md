# Day 14 — Reflections

## Yang Paling Mudah Dipahami
mudah karna analogi yang dipake enak dipahami walaupun masih agak sedikit bingung kapan dipakai closure ini

## Yang Masih Membingungkan
haruskah untuk pemanggilan harus dibungkus ke variable dulu pas di akhir di global scope bawahnya di
const myCouter = createCounter();
gabisa langsung console.log aja ya

## Kalau Harus Jelasin ke Orang Awam
## Analogi yang Membantu Gue Paham

### Analogi: ATM & PIN

Bayangin lo punya kartu ATM.

- Di dalam sistem bank, ada saldo lo
- Lo punya kartu + PIN untuk akses saldo itu

Walaupun lo nggak bisa lihat langsung sistem banknya, lo tetap bisa akses saldo kapan aja pakai kartu + PIN.

### Hubungannya dengan Closure

- Saldo di bank → variabel di fungsi luar
- Kartu + PIN → fungsi dalam (closure)
- Bisa cek saldo kapan aja → fungsi dalam tetap bisa akses variabel walaupun fungsi luar sudah selesai

### Intinya
Closure itu kayak lo punya akses ke sesuatu yang “disimpan di dalam”, tanpa harus lihat atau pegang langsung datanya.
