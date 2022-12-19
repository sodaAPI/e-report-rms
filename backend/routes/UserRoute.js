import express from "express";
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUsers,
  allAccess,
  userBoard,
  adminBoard,
} from "../controllers/User.js";

import { verifyToken, isAdmin } from "../middleware/authJwt.js";

const router = express.Router();

//Authentication & Role
router.get("/all", allAccess);
router.get("/api/test/user", [verifyToken], userBoard);
router.get("/api/test/admin", [verifyToken, isAdmin], adminBoard);

//CRUD
router.get("/", [verifyToken], getAllUsers, getUsers);
router.get("/:id",[verifyToken], getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
