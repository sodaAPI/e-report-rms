import express from "express";
import {
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "../controllers/Task.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

router.get("/", verifyUser, getAllTasks);
router.get("/:id", verifyUser, getTaskById);
router.post("/", verifyUser, createTask);
router.patch("/:id", verifyUser, updateTask);
router.delete("/:id", verifyUser, deleteTask);

export default router;
