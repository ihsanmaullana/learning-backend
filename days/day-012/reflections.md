# Day 12 — Reflections

## What Clicked Immediately
Basic function declarations were easy to follow. Defining a function, passing arguments,
and getting a result back felt natural once I understood the structure.

## What Was Still Confusing
Functions calling other functions got tricky quickly — keeping track of which function
returns what and where those values flow takes some mental effort. I also wasn't always
sure when a function needs `return` and when it doesn't.

The key I've picked up so far: if you need the output to be used somewhere else in the
code, use `return`. If the function just needs to do something (like log to the console),
`return` isn't required.

## How I Would Explain Functions to a Non-Developer
A function is like a recipe. You write the recipe once, and you can cook that dish
as many times as you want without rewriting the steps. The ingredients are the parameters,
and the finished dish is what the function returns.
