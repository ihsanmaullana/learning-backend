# Day 3 — How the Internet Works

## What happens when I type a URL in the browser?

When you type a URL (e.g. `github.com`) and press Enter, a series of complex processes
happen behind the scenes in a matter of milliseconds. Here is the complete flow:

---

### Step 1 — DNS Lookup

- The browser does not understand `github.com` — it must be converted into an **IP address**.
- The browser queries the **DNS (Domain Name System)** to resolve the domain name.
- Result: an IP address is returned, e.g. `140.82.114.4`.

---

### Step 2 — TCP Handshake

- Once the IP is known, the browser opens a connection to the server using **TCP**.
- This is called the **3-way handshake**:
  1. **Client → Server:** SYN (request to connect)
  2. **Server → Client:** SYN-ACK (acknowledged)
  3. **Client → Server:** ACK (confirmed)
- Purpose: ensures a stable, reliable connection before any data is transferred.

---

### Step 3 — HTTPS / TLS Handshake

- If HTTPS is used, an additional security layer is established.
- The browser and server:
  - Exchange certificates
  - Verify the server's identity
  - Negotiate an encryption key
- Purpose: all data transmitted is **encrypted**, protecting it from eavesdropping.

---

### Step 4 — HTTP Request

- The browser sends an HTTP request to the server, for example:
  - **Method:** `GET`
- The request includes:
  - **Headers** (browser information, cookies, accepted formats, etc.)
  - **Body** (only for methods like `POST` or `PUT`)

---

### Step 5 — Server Processing

- The server receives the request and:
  - Runs the application logic
  - Queries a database if needed
  - Prepares the appropriate response

---

### Step 6 — HTTP Response

- The server sends back a response containing:
  - **Status code** (e.g. `200`, `404`, `500`)
  - **Headers** (content type, caching rules, etc.)
  - **Body** (HTML, JSON, or other content)

---

### Step 7 — Browser Rendering

- The browser receives the HTML, parses it, and renders the page.
- Additional assets (CSS, JavaScript, images) trigger further requests.
- Everything is composed into the final visual display.

---

## Key Concepts

### DNS (Domain Name System)

DNS translates **domain names** (like `google.com`) into **IP addresses** that computers
understand. Since IP addresses are difficult to memorize, DNS acts as a global phonebook —
humans use readable domain names, and DNS resolves them to the underlying numeric address.

---

### HTTP Methods

| Method     | Purpose                                  |
|------------|------------------------------------------|
| `GET`      | Retrieve data from the server            |
| `POST`     | Send or create new data on the server    |
| `PUT`      | Replace an existing resource entirely    |
| `PATCH`    | Update part of an existing resource      |
| `DELETE`   | Remove a resource from the server        |

---

### HTTP Status Codes

| Code  | Meaning                                         |
|-------|-------------------------------------------------|
| `200` | OK — request succeeded                          |
| `301` | Moved Permanently — redirected to another URL   |
| `403` | Forbidden — access denied                       |
| `404` | Not Found — resource does not exist             |
| `500` | Internal Server Error — something broke on the server |

---

### HTTP vs HTTPS

| Protocol | Description                                                  |
|----------|--------------------------------------------------------------|
| HTTP     | Data is sent in plain text — **not secure**                  |
| HTTPS    | Data is encrypted via TLS — **safe from eavesdropping**      |

HTTPS is critical whenever sensitive data (passwords, payment info, personal details) is
being transmitted.

---

## Connection to Previous Days

- **Day 1:** Installed `nslookup` on Linux, which lets you manually check the IP address
  a domain resolves to — the same DNS lookup step that the browser does automatically.
- **Day 2:** When pushing to GitHub with `git push`, HTTP requests (GET, POST, etc.) are
  happening under the hood as part of the client-server communication between Git and the
  GitHub API.
