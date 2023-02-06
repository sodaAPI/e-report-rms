import express from "express";
import {
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "../controllers/Task.js";
import { verifyUser } from "../middleware/AuthUser.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.get("/", verifyUser, getAllTasks);
router.get("/:uuid", verifyUser, getTaskById);
router.post("/", limiter, verifyUser, createTask);
router.patch("/:uuid", verifyUser, updateTask);
router.delete("/:uuid", verifyUser, deleteTask);

export default router;
