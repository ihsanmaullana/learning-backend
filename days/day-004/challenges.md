# Day 004 - Challenges & Debugging

## Challenge 1: Variable name typo

**What I tried to do:**
Print a greeting message using a variable.

**The error I got:**

Error appeared at line :

/home/ihsanmaulana/projects/learning-backend/days/day-004/exercises/02-errors.js:5
console.log(greting);
            ^

ReferenceError: greting is not defined
    at Object.<anonymous> (/home/ihsanmaulana/projects/learning-backend/days/day-004/exercises/02-errors.js:5:13)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49

Node.js v18.19.1

**Why this happened:**
Saya menulis `greting` tapi nama variabelnya `greeting`.
Komputer tidak bisa tebak maksud saya — dia cari persis `greting`,
tidak ketemu, langsung berhenti.

**How I fixed it:**
Ganti `greting` jadi `greeting` — sesuai nama variabel yang dideklarasikan.

**What I learned:**
Komputer tidak punya konteks. Dia eksekusi persis apa yang ditulis,
bukan apa yang dimaksud. Typo sekecil apapun = error.
