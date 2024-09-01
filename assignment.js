// Try these out yourself.

// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
// 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");
const app = express();

function middleware(req, res, next) {
  console.log("method is " + req.method);
  console.log("host is " + req.hostname);
  console.log("timestamp is " + new Date());
  next();
}

app.use(middleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
