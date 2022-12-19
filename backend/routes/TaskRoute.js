import express from "express";
import {
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "../controllers/Task.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
