//
import express from "express";
const router = express.Router();
// Internal imports
import { getAllGeneralUsers, getUser } from "../../controllers/users/index.js";
// App
router.get("/users", getAllGeneralUsers);

router.post("/user", getUser);

export default router;
