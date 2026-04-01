# Day 3 — How the Internet Works

## What happens when I type a URL in the browser?

Ketika kita mengetik URL (misalnya `github.com`) lalu menekan Enter, sebenarnya ada serangkaian proses kompleks yang terjadi di belakang layar. Berikut alur lengkapnya:

### 1. DNS Lookup
- Browser tidak memahami `github.com`, jadi harus diubah menjadi **IP address**.
- Browser akan mengecek:
- Hasilnya: didapat IP address, misalnya `140.82.114.4`

---

### 2. TCP Handshake
- Setelah tahu IP, browser membuka koneksi ke server menggunakan TCP.
- Proses ini disebut **3-way handshake**:
  1. Client → Server: SYN (minta koneksi)
  2. Server → Client: SYN-ACK (setuju)
  3. Client → Server: ACK (konfirmasi)
- Tujuannya: memastikan koneksi stabil sebelum kirim data.

---

### 3. HTTPS / TLS Handshake
- Jika menggunakan HTTPS, dilakukan proses keamanan tambahan.
- Browser dan server:
  - Bertukar sertifikat
  - Verifikasi keaslian server
  - Membuat kunci enkripsi
- Tujuannya: semua data yang dikirim jadi **terenkripsi dan aman**.

---

### 4. HTTP Request
- Browser mengirim request ke server, contohnya:
  - Method: GET
- Request ini berisi:
  - Header (informasi browser, cookies, dll)
  - Kadang body (untuk POST/PUT)

---

### 5. Server Processing
- Server menerima request lalu:
  - Memproses logika aplikasi
  - Server menyiapkan response berdasarkan request.

---

### 6. HTTP Response
- Server mengirim balik response ke browser, berisi:
  - Status code (200, 404, dll)
  - Header
  - Body (HTML, JSON, dll)
- Contoh:
  - 200 → berhasil
  - 404 → halaman tidak ditemukan

---

### 7. Browser Rendering
- Browser menerima HTML lalu:
- Semua digabung jadi tampilan visual.

---

### Final Result
- Jika semua proses berjalan lancar, browser akan menampilkan halaman yang diminta ke user.

---

## Key Concepts

### DNS (Domain Name System)

- DNS adalah sistem yang menerjemahkan **nama domain** (seperti `google.com`) menjadi **IP address**.
- Komputer hanya memahami angka (IP address), bukan teks.
- Karena IP address sulit diingat, DNS berfungsi sebagai “penerjemah” agar manusia bisa menggunakan nama domain yang mudah diingat.
- Jadi, `google.com` sebenarnya adalah representasi dari alamat IP yang lebih kompleks.

---

### HTTP Methods

- **GET** → Mengambil data dari server
- **POST** → Mengirim atau menambahkan data ke server
- **PUT** → Mengubah seluruh data
- **PATCH** → Mengubah sebagian data
- **DELETE** → Menghapus data

---

### Status Codes

- **200** → OK (berhasil)
- **301** → Dialihkan ke halaman lain
- **403** → Forbidden (akses ditolak)
- **404** → Not Found (halaman tidak ditemukan)
- **500** → Server Error (terjadi kesalahan di server)

---

### HTTPS vs HTTP

- **HTTP** → Data dikirim tanpa enkripsi (tidak aman)
- **HTTPS** → Data dienkripsi sehingga lebih aman dari penyadapan
- HTTPS penting terutama saat mengirim data sensitif seperti login atau password

---

## Connection to Previous Days

- **Day 1** → Saya belajar cara install tools di Linux, seperti `nslookup`, dan memahami bagaimana mengecek IP dari sebuah domain melalui command line.
- **Day 2** → Saya memahami bahwa ketika push ke GitHub, di belakang layar sebenarnya terjadi HTTP request seperti GET, POST, dan lainnya sebagai bagian dari komunikasi client-server.
