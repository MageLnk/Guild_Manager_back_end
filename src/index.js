// Imports escenciales
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// Basic starting points
const app = express();
const PORT = 5000;
// Routes
import generalUsers from "./routes/generalUsers/index.js";
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Working routes
//app.use("/lostark", lostArkUsersRoutes);
app.use("/general", generalUsers);

// Aplication

// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: htttp://localhost:${PORT}. Everything is fine`);
});
