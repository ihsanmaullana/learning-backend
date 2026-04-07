# Day 8 — Reflections

## What Clicked Immediately
Variables — the concept is straightforward. Data gets stored temporarily in memory,
given a name, and can be retrieved whenever needed.

## What Was Still Confusing
Why does `typeof null` return `"object"` when null is clearly not an object?

Turns out this is a bug from 1995 that was intentionally never fixed due to
**backward compatibility** — if it were corrected, every website already relying on
that behavior would break. Sometimes in software, preserving a known bug is safer
than fixing it.

## How I Would Explain Variables to a Non-Developer
A variable is like a labeled jar. The jar itself is the variable, the label is the
name you give it, and whatever you put inside is the value. You can take the contents
out at any time, and you can swap them out too — depending on whether you used `let`
or `const`.
