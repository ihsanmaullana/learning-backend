# Exercise 2 — HTTP Request/Response Observation

## Website Observed: `github.com`

### Tool Used

Browser DevTools → Network tab (opened before page load, with cache disabled)

---

### First Request

| Property    | Value |
|-------------|-------|
| Method      | `GET` |
| Status Code | `200` |

---

### Total Requests to Load 1 Page

**267 requests**

---

### File Types Downloaded (approximate)

| Type         | Count |
|--------------|-------|
| HTML         | 1     |
| CSS          | 35    |
| JavaScript   | 198   |
| Images       | 6     |

---

## Observations

267 requests just to load a single page was genuinely surprising. The breakdown makes
sense in hindsight: only 1 HTML file is needed (the page structure), but a modern web
application pulls in dozens of stylesheets and nearly 200 JavaScript files for
interactivity, analytics, and feature modules.

This highlights why **performance optimization** (bundling, minification, lazy loading)
is such an important topic in web development — each network request adds latency.
