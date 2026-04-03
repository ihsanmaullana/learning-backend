# Day 3 Challenges

## HTTP vs HTTPS experiment
- curl -I http://github.com → Status: 301
- curl -I https://github.com → Status: 200
- What happened? The HTTP request was redirected because the status code was 301. It redirected to HTTPS, as indicated by the `Location` header in the response. The HTTPS request was correct from the start, which is why it returned 200 — a successful response.
