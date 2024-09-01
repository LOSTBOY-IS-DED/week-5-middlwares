// ending the request

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.send("You are not allowed !!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
