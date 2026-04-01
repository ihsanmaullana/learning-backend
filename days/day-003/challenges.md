# Day 3 Challenges

## HTTP vs HTTPS experiment
- curl -I http://github.com → Status: 301
- curl -I https://github.com → Status: 200
- Apa yang terjadi? Jadi pas di yang http itu halaman dialihkan karna status code 301, dialihkannya ke https, karna ada keterangannya di location untuk dialihkannya, sedangkan yang udah pakai https itu udah bener makannya statusnya 200 jadi berhasil masuk.
