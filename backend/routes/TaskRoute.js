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
router.get("/:uuid", verifyUser, getTaskById);
router.post("/", verifyUser, createTask);
router.patch("/:uuid", verifyUser, updateTask);
router.delete("/:uuid", verifyUser, deleteTask);

export default router;
