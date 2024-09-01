const express = require("express");
const app = express();

app.use(express.json()); //body parser does kinda same thing as express.json()

//express.json() middleware is used to parse the request body
// express.json is a function which itself returns a function

// in express if you want to send json data
// you have to parse it first

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    ans: a + b,
  });
});

app.listen(3000, () => {
  "server is running on port 3000";
});
