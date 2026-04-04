# Exercise 3 — curl Experiments

## Commands Run

```bash
curl -I https://github.com
curl -I https://github.com/halaman-yang-tidak-ada-sama-sekali
curl -I https://google.com
```

## Results

| URL                                           | Status | Meaning                              |
|-----------------------------------------------|--------|--------------------------------------|
| `https://github.com`                          | `200`  | OK — request succeeded               |
| `https://github.com/halaman-yang-...`         | `404`  | Not Found — page does not exist      |
| `https://google.com`                          | `301`  | Moved Permanently — redirected       |

## Observations

- **200** means the server found the resource and returned it successfully.
- **404** means the server understood the request but could not find what was asked for.
  In this case, the path `/halaman-yang-tidak-ada-sama-sekali` simply does not exist on GitHub.
- **301** means the resource has moved to a new URL. Google redirects plain `http://google.com`
  traffic to `https://www.google.com` — two redirects (HTTP → HTTPS, and `google.com` → `www.google.com`).

The `curl -I` flag sends a **HEAD request** — it retrieves only the response headers
(status code, content type, etc.) without downloading the actual body. Useful for quickly
checking a URL's status without pulling all the content.
