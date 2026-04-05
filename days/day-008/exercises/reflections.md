# Day 8 — Reflections

## Yang Paling Mudah Dipahami
Variable — konsepnya straightforward. Data disimpan sementara di memori,
dikasih nama, dan bisa dipanggil kapanpun dibutuhkan.

## Yang Masih Membingungkan
Kenapa `typeof null` hasilnya `"object"` padahal null bukan object?

Ternyata ini bug lama JavaScript sejak 1995 yang sengaja tidak diperbaiki
karena alasan **backward compatibility** — kalau diperbaiki, semua website
lama yang sudah bergantung pada behavior ini akan rusak seketika.
Kadang di dunia software, mempertahankan bug lebih aman daripada memperbaikinya.

## Kalau Harus Jelasin Variable ke Orang Awam
Variable itu bagaikan toples berlabel. Toplesnya adalah variable-nya,
labelnya adalah nama yang kita kasih, dan isinya adalah nilai yang kita simpan.
Isi toples bisa diambil kapanpun dan diganti kapanpun — tergantung pakai
`let` atau `const`.
