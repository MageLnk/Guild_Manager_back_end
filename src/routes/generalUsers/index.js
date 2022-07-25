//
import express from "express";
const router = express.Router();
// Internal imports
import { getAllGeneralUsers, getUser, activeGames } from "../../controllers/users/index.js";
// App
router.get("/users", getAllGeneralUsers);
// Get user for Login
router.post("/user", getUser);
// Get active Games for that user
router.post("/activegames", activeGames);

export default router;
