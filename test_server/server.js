import http from "node:http";

const PORT = Number(process.env.PORT) || 4000;

const VALID_CREDENTIALS = {
  email: "admin@admin.com",
  password: "asd123",
};

const USER_PROFILE = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
  role: "admin",
};

function setCorsHeaders(res, origin) {
  const allowedOrigin = "http://localhost:5173";
  if (origin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
  setCorsHeaders(res, req.headers.origin);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/auth/login" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      let payload = {};
      try {
        payload = JSON.parse(body || "{}");
      } catch {
        sendJson(res, 400, { message: "Invalid JSON body." });
        return;
      }

      if (
        payload.email === VALID_CREDENTIALS.email &&
        payload.password === VALID_CREDENTIALS.password
      ) {
        sendJson(res, 200, { user: USER_PROFILE, token: "123" });
        return;
      }

      sendJson(res, 401, { message: "Invalid email or password." });
    });
    return;
  }

  if (req.url === "/auth/logout" && req.method === "POST") {
    sendJson(res, 200, { message: "Logged out." });
    return;
  }

  sendJson(res, 404, { message: "Not found." });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Test server running at http://localhost:${PORT}`);
});
