import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Comentando la versión "Antigua" del API Rest. Funciona, pero es old.
// El chiste, es sacar el "type" del .json

/*
const express = require("express");
const cors = require("cors");
const indexRouter = require("./routers/index");
// Basic Statements
const app = express();
// Middle ware
app.use(cors());
app.use(express.json());
// App
app.use("/admin", indexRouter);

app.listen(5000, () => {
  console.log("Server started OK");
});
*/
