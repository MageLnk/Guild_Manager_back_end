const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Recibido");
});

app.listen(5000, () => {
  console.log("Server started OK");
});
