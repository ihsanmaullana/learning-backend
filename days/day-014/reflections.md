# Day 14 — Reflections

## What Clicked Immediately
The concept was approachable thanks to the analogy — once the mental model was clear,
the code made sense. The idea that a function can "remember" its surrounding context is
actually a powerful and elegant feature.

## What Was Still Confusing
Whether you always have to store the returned function in a variable before calling it.

Short answer: yes, if you want to reuse the same closure instance. Calling `createCounter()`
directly each time would create a fresh counter with its own separate `count` starting at 0.
Storing it in a variable (`const myCounter = createCounter()`) is how you keep the same instance alive.

## How I Would Explain Closure to a Non-Developer

### ATM & PIN Analogy

Think of an ATM card.

- Inside the bank's system, your balance lives
- Your card + PIN is what gives you access to it

Even though you can't see the bank's internal systems, you can still check and interact
with your balance anytime using your card.

### How This Maps to Closure

| Real World           | Code                                      |
|----------------------|-------------------------------------------|
| Balance in the bank  | Variable in the outer function            |
| Card + PIN           | Inner function (the closure)              |
| Check balance anytime | Inner function can access the variable even after the outer function is done |

The core idea: closure gives you access to something "stored inside",
without needing to touch or see the data directly.
