//
import express from "express";
const router = express.Router();
// Internal imports
import { getUsers } from "../../controllers/lostArk/users/index.js";
// App
router.get("/users", getUsers);

export default router;
