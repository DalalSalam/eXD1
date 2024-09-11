const express = require("express");

const app = express();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/", (req, res) => {
  console.log("Dalal");
  return res.json("My Name is Dalal");
});
