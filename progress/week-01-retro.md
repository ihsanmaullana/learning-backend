# Week 1 Retrospective — Days 1–7

## What I Learned This Week

- **Day 1:** Opened a terminal for the first time. Learned folder navigation, file creation,
  and installed VS Code. Discovered that most developers prefer the terminal over a GUI
  because it gives direct access to the system and enables many operations that simply
  aren't possible through a graphical interface.

- **Day 2:** Learned Git. Created the `learning-backend` repo, made my first commit, and
  pushed it to GitHub. This is where I understood version control — the ability to snapshot
  code, restore any previous state, and collaborate with a team. Every professional developer
  uses this.

- **Day 3:** Learned how the internet works — DNS, HTTP, and what actually happens when you
  type a URL in a browser. This was my favorite topic of the week. There are 7 steps running
  in milliseconds before a webpage appears on screen, and I finally understand each one.

- **Day 4:** Learned what a program is. Ran my first `.js` file with Node.js, encountered
  my first `ReferenceError`, and learned how to read an error message. Funny moment: Node.js
  wasn't installed yet, so the code couldn't run until I installed it via `curl`. After that,
  everything worked smoothly.

- **Day 5:** Explored npm and `package.json`. Installed `chalk`, ran into a module
  compatibility error (`chalk.green is not a function`), debugged it, and fixed it by
  pinning to `chalk@4.1.2`. First real debugging experience with a third-party package.

- **Day 6:** Deeper dive into npm. Practiced writing a proper `package.json`, understood
  the role of `node_modules/` vs `package.json` for managing dependencies, and confirmed
  the chalk fix was working in a fresh project context.

- **Day 7:** Review and consolidation of the week.

---

## Biggest Struggle This Week

Debugging the `chalk` compatibility error on Day 5. I didn't immediately understand the
difference between ESM and CommonJS modules, so the error message (`chalk.green is not a
function`) was confusing at first. It took reading the changelog and some trial and error
to figure out it was a version compatibility issue, not a syntax mistake.

---

## Biggest Breakthrough This Week

Understanding how the internet works end-to-end (Day 3). Before this week, I used websites
every day without thinking about what was happening underneath. Now I understand DNS lookups,
TCP handshakes, TLS encryption, HTTP requests, and server responses as a coherent flow —
not just isolated buzzwords.

---

## Questions I Still Have

- When `node_modules/` is not pushed to GitHub, how does a production server know which
  packages to install? *(Answered: `package.json` + `npm install`)*
- What is the real difference between ESM (`import`) and CommonJS (`require`) at a
  fundamental level — and when should I use each?
- Why is JavaScript the right language to learn first before TypeScript or pure Node.js?

---

## Goal for Next Week (Days 8–14)

- Start learning JavaScript fundamentals properly: variables, data types, functions,
  conditionals, and loops.
- Write at least one real mini-program per day, not just experiments.
- Understand the difference between synchronous and asynchronous code — this seems critical
  for backend work.
