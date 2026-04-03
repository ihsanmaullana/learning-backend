# Day 3 — How the Internet Works

## What happens when I type a URL in the browser?

When we type a URL (e.g. `github.com`) and press Enter, a series of complex processes happen behind the scenes. Here is the complete flow:

### 1. DNS Lookup
- The browser doesn't understand `github.com`, so it must be converted into an **IP address**.
- The browser will check the DNS records to resolve the domain.
- Result: an IP address is obtained, e.g. `140.82.114.4`

---

### 2. TCP Handshake
- Once the IP is known, the browser opens a connection to the server using TCP.
- This process is called the **3-way handshake**:
  1. Client → Server: SYN (request connection)
  2. Server → Client: SYN-ACK (agreed)
  3. Client → Server: ACK (confirmation)
- Purpose: to ensure a stable connection before sending data.

---

### 3. HTTPS / TLS Handshake
- If HTTPS is used, an additional security process is performed.
- The browser and server:
  - Exchange certificates
  - Verify the server's authenticity
  - Generate an encryption key
- Purpose: all data sent becomes **encrypted and secure**.

---

### 4. HTTP Request
- The browser sends a request to the server, for example:
  - Method: GET
- The request contains:
  - Headers (browser info, cookies, etc.)
  - Sometimes a body (for POST/PUT requests)

---

### 5. Server Processing
- The server receives the request and then:
  - Processes the application logic
  - Prepares a response based on the request.

---

### 6. HTTP Response
- The server sends back a response to the browser, containing:
  - Status code (200, 404, etc.)
  - Headers
  - Body (HTML, JSON, etc.)
- Examples:
  - 200 → success
  - 404 → page not found

---

### 7. Browser Rendering
- The browser receives the HTML and then parses and renders it.
- Everything is combined into a visual display.

---

### Final Result
- If all processes run smoothly, the browser will display the requested page to the user.

---

## Key Concepts

### DNS (Domain Name System)

- DNS is a system that translates **domain names** (like `google.com`) into **IP addresses**.
- Computers only understand numbers (IP addresses), not text.
- Since IP addresses are hard to remember, DNS acts as a "translator" so humans can use easy-to-remember domain names.
- So, `google.com` is actually just a human-friendly representation of a more complex IP address.

---

### HTTP Methods

- **GET** → Retrieve data from the server
- **POST** → Send or add data to the server
- **PUT** → Replace all data
- **PATCH** → Update part of the data
- **DELETE** → Delete data

---

### Status Codes

- **200** → OK (success)
- **301** → Redirected to another page
- **403** → Forbidden (access denied)
- **404** → Not Found (page does not exist)
- **500** → Server Error (something went wrong on the server)

---

### HTTPS vs HTTP

- **HTTP** → Data is sent without encryption (not secure)
- **HTTPS** → Data is encrypted, making it safer from eavesdropping
- HTTPS is especially important when sending sensitive data such as login credentials or passwords

---

## Connection to Previous Days

- **Day 1** → I learned how to install tools on Linux, such as `nslookup`, and understood how to check the IP of a domain via the command line.
- **Day 2** → I understood that when pushing to GitHub, HTTP requests like GET, POST, and others actually happen behind the scenes as part of client-server communication.
