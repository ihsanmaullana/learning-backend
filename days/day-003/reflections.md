# Day 3 — Reflections

## What went well

- Finally understood what actually happens when you type a URL and hit Enter.
  The 7-step breakdown (DNS → TCP → TLS → HTTP Request → Server Processing → HTTP Response → Rendering)
  made everything click into place.
- The hands-on exercises with `nslookup`, `curl`, and the browser DevTools made the theory
  feel real and grounded.

## What was hard

- Wrapping my head around the TCP 3-way handshake at first — the idea that both sides need to
  "agree" before any data is sent was a new concept.
- Seeing 267 requests just to load one GitHub page was genuinely surprising. Understanding
  *why* (CSS, JS bundles, images, fonts) took some time to process.

## One thing that clicked today

- DNS is basically a phone book for the internet. Before today, I thought the browser
  "just knew" where to find websites. Realizing there is a whole lookup system running
  behind every single URL request was a real eye-opener.

## Questions I still have

- How does a CDN (Content Delivery Network) fit into this flow? Does it change the DNS step
  or the TCP step — or both?
- What exactly happens during the TLS handshake at a deeper level? I understand the concept
  (certificates, encryption keys), but the cryptography underneath is still fuzzy.
