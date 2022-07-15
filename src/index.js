// Imports escenciales
import express from "express";
import bodyParser from "body-parser";
// Basic starting points
const app = express();
const PORT = 5000;
// Routes
import lostArkUsersRoutes from "./routes/users/index.js";
// Middleware
app.use(bodyParser.json());
// Working routes
app.use("/lostark", lostArkUsersRoutes);
// Aplication

// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: htttp://localhost:${PORT}`);
});
