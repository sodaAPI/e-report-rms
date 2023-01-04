import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
} from "../controllers/Notification";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/add", verifyUser, addNotification);
router.get("/get", verifyUser, getNotifications);
router.delete("/delete/:id", verifyUser, deleteNotification);

export default router;
