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
