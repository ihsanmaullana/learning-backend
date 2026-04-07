# Day 7 — Week 1 Review

## What This Day Is For
Day 7 is a consolidation day. No new material — the goal is to revisit everything
from Days 1–6 and make sure it all connects into a coherent picture.

---

## Topics Revisited

### Day 1 — Terminal & File System
The terminal gives direct access to the operating system. GUI tools abstract this away,
but most backend workflows depend on CLI fluency. Key commands: `pwd`, `ls`, `cd`, `mkdir`,
`touch`, `rm`. VS Code was set up as the main editor.

### Day 2 — Git & Version Control
Git is a snapshot system. Every commit is a saved state that can be restored.
The mental model: `git add` stages changes, `git commit` saves the snapshot,
`git push` syncs to the remote.

Three-line workflow used every day:
```
git add .
git commit -m "message"
git push
```

### Day 3 — How the Internet Works
Seven-step flow from URL to webpage:
1. Browser checks DNS cache
2. DNS lookup resolves domain to IP
3. TCP connection established
4. TLS handshake (HTTPS)
5. HTTP request sent
6. Server processes and responds
7. Browser renders the page

Tools used: `nslookup`, `curl`, browser DevTools.

### Day 4 — What Is a Program? Node.js Basics
A program is a set of instructions executed sequentially. Node.js is the runtime
that lets JavaScript run outside the browser — on a server, in a terminal, anywhere.

First `.js` file ran with `node filename.js`. First `ReferenceError` encountered and read.

### Day 5 — npm & package.json
npm is the package registry for JavaScript. `package.json` is the manifest that
describes your project and its dependencies.

First real debugging: `chalk` v5 uses ESM, which broke `require()`. Fixed by pinning to
`chalk@4.1.2`. Lesson: always check a package's changelog when something unexpected breaks.

### Day 6 — npm Deep Dive
Practiced writing `package.json` by hand. Understood the difference between
`node_modules/` (generated, never committed) and `package.json` (the source of truth).
`npm install` recreates `node_modules/` from `package.json` on any machine.

---

## Connections I Can See Now

- Terminal skills → run Node.js programs, use npm
- Git → every day's work gets committed and pushed
- Internet fundamentals → HTTP is how backend and frontend communicate
- Node.js → the runtime for everything JavaScript on the backend
- npm → how backend projects manage external code

Everything in Week 1 is foundational infrastructure. The actual JavaScript programming starts Week 2.
