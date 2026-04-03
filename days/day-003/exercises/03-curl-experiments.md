# curl Experiments

## curl -I https://github.com
- Status: 200
- What does it mean? Success — the request was fulfilled.

## curl -I https://github.com/halaman-yang-tidak-ada-sama-sekali
- Status: 404
- What does it mean? Page not found — the requested resource does not exist.

## curl -I https://google.com
- Status: 301
- What does it mean? The page has been moved or redirected.

## Observations
- The difference: 200 means success, 404 means the target page was not found or does not exist, and 301 means the page has been moved or redirected.
