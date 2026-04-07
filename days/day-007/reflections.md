# Day 7 — Reflections

## What This Week Showed Me
The first week covered a lot of ground that felt abstract at the start — terminal commands,
Git, HTTP, Node.js — but by Day 7, these things are starting to feel like a natural
workflow rather than separate topics.

## Biggest Win of the Week
Day 3 — understanding the full request lifecycle. Before this week, "the internet" was
a black box. Now I understand what actually happens between typing a URL and seeing a page,
and I can name every step.

## Biggest Struggle of the Week
The `chalk` debugging on Day 5. The error message (`chalk.green is not a function`) pointed
nowhere obvious. It took reading the changelog to discover that `chalk` v5 switched to ESM,
which is incompatible with `require()`. The fix was pinning to v4. That experience taught me
to always check release notes, not just Stack Overflow.

## Questions Going into Week 2
- How is JavaScript on the backend different from JavaScript in a browser?
- What does asynchronous mean in practice — and why does it matter so much for backend?
- When should I use `const` vs `let`, and is there ever a reason to use `var`?

## Goal for Week 2
Start JavaScript fundamentals properly: variables, data types, objects, conditionals,
functions, scope, and closures. Write at least one real exercise per day, not just notes.
