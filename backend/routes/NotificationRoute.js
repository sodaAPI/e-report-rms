import express from "express";
import {
  getNotifications,
  deleteNotification,
  pushNotification,
  getNotificationsByUserId,
  addNotificationById,
} from "../controllers/Notification.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

router.post("/addbyid", verifyUser, addNotificationById);

router.get("/get", verifyUser, getNotifications);
router.get("/getuser", verifyUser, getNotificationsByUserId);

router.delete("/delete", verifyUser, deleteNotification);

router.post("/push", verifyUser, pushNotification);

export default router;
