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
router.get("/:uuid", verifyUser, adminOnly, getUserById);
router.post("/", createUser);
router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:token", resetPassword);
router.patch("/:uuid", verifyUser, updateUser);
router.delete("/:uuid", verifyUser, adminOnly, deleteUser);


export default router;
