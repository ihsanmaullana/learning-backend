# Day 5 — Challenges & Debugging Log

## Challenge 1: `chalk.green is not a function`

### Error Encountered

```
TypeError: chalk.green is not a function
```

### What I Tried

I initially used the modern ESM import syntax (`import chalk from 'chalk'`), but the project
was configured as CommonJS. After some investigation, I switched back to the older `require()`
syntax to make it compatible with the installed version.

### Root Cause

Chalk v5+ is an ESM-only package, meaning it no longer supports `require()`. The version I had
installed (`chalk@4.x`) does support `require()`, but the way I was calling it conflicted
with my project's module type setting.

### Solution

I downgraded to `chalk@4.1.2` (the latest CommonJS-compatible version) so the `require()` syntax
would work correctly. This resolved the error immediately.

```bash
npm install chalk@4.1.2
```

### Lesson Learned

Before upgrading or installing a package, always read the **changelog** and **README** to check
for breaking changes — especially around ESM vs CommonJS compatibility.

---

## Still Confused About

I'm still unclear about how modules work in production. If `node_modules/` is not pushed to
GitHub or a server, how does the server know which packages to install? And how do other
developers know what dependencies the project needs?

> *Note: This was answered later — `package.json` lists all dependencies, so anyone can run
> `npm install` to recreate the exact `node_modules/` folder. That's why `node_modules/` is
> always added to `.gitignore`.*
