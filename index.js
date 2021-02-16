// server/index.js
var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
console.log("viewed at http://localhost:8080");

app.listen(8080);
