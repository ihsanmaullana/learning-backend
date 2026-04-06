# Day 11 — Operators & Conditionals (Lanjutan)

## == vs ===
Dua operator perbandingan di JavaScript dengan cara kerja berbeda.

`==` (loose equality) membandingkan nilai setelah tipe data disamakan
dulu secara otomatis oleh JavaScript. Proses ini disebut type coercion.
Berbahaya karena hasilnya tidak terduga.

`===` (strict equality) membandingkan nilai DAN tipe data sekaligus.
Tidak ada konversi otomatis. Ini yang selalu harus dipakai.

Aturan: gunakan === selalu, == tidak pernah.

## Type Coercion
Proses JavaScript mengubah tipe data secara otomatis saat membandingkan
dua nilai yang berbeda tipe. Terjadi diam-diam tanpa diminta.

Contoh:
- 1 == "1" → JavaScript ubah "1" jadi angka 1 → true
- 0 == false → JavaScript ubah false jadi 0 → true

## Falsy Values
Ada 6 nilai yang dievaluasi sebagai false di dalam kondisi if:
- false
- 0
- ""
- null
- undefined
- NaN

Semua nilai lain dianggap truthy — termasuk "0", [], dan {}.

## Jebakan Umum
Nilai 0 dan "" bukan berarti variabelnya tidak ada.
Variabelnya ada, nilainya ada, tapi JavaScript tetap evaluasi sebagai false.
Contoh: userAge = 0 akan dianggap "belum diisi" kalau tidak hati-hati.

## Short-circuit Evaluation
Saat pakai &&, JavaScript baca dari kiri ke kanan.
Kalau nilai pertama sudah falsy, langsung berhenti — tidak cek berikutnya.
Kalau pakai ||, kalau nilai pertama sudah truthy, langsung berhenti.

## Koneksi ke capital-pulse
Logika filter berita memakai semua konsep ini:
- Cek ageInHours > 24 → skip berita lama
- Cek !isVerified → skip sumber tidak terpercaya
- Cek !title → skip berita tanpa judul
- else → berita layak ditampilkan
