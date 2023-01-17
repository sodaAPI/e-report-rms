import express from "express";
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  forgotPassword,
  resetPassword
} from "../controllers/User.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/", verifyUser, adminOnly, getAllUsers);
router.get("/:id", verifyUser, adminOnly, getUserById);
router.post("/", createUser);
router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:token", resetPassword);
router.patch("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, adminOnly, deleteUser);


export default router;
