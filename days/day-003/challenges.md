# Day 3 — Challenges & Experiments

## HTTP vs HTTPS Experiment

### Commands run

```bash
curl -I http://github.com
curl -I https://github.com
```

### Results

| URL                     | Status Code |
|-------------------------|-------------|
| `http://github.com`     | `301`       |
| `https://github.com`    | `200`       |

### What happened?

The HTTP request returned `301 Moved Permanently`. The response included a `Location`
header pointing to the HTTPS version of the URL — meaning the server automatically
redirects all plain HTTP traffic to HTTPS.

The HTTPS request returned `200 OK` because it was using the correct protocol from
the start, so no redirect was needed.

### Takeaway

Most modern websites enforce HTTPS by redirecting all HTTP traffic. The `301` redirect
is essentially the server saying: *"Use HTTPS — come back with the secure URL."*
