//
import express from "express";
// Internal imports
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../../controllers/users/index.js";

const router = express.Router();

// All roues in here are starting with /users for the index.js
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
