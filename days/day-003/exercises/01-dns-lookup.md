# Exercise 1 — DNS Lookup

## Command Used

```bash
nslookup <domain>
```

## Results

| Domain       | IP Address        | DNS Server      |
|--------------|-------------------|-----------------|
| `github.com` | `20.205.243.166`  | `10.255.255.254`|
| `google.com` | `142.251.12.100`  | —               |
| `youtube.com`| `172.217.194.190` | —               |
| `detik.com`  | `103.49.221.211`  | —               |

## Observations

Different domains resolve to different IP addresses, and large platforms like Google
and YouTube often return different IPs depending on your location and the time of the request.
This is because they use **load balancers** and **CDNs (Content Delivery Networks)** to
distribute traffic — routing users to the nearest or least-congested server to improve
speed and prevent overload.
