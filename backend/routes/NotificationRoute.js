import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
  pushNotification,
  getNotificationsByUserId,
  addNotificationById,
} from "../controllers/Notification.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

router.post("/add", verifyUser, addNotification);
router.post("/addbyid", verifyUser, addNotificationById, pushNotification);

router.get("/get", verifyUser, getNotifications);
router.get("/getuser", verifyUser, getNotificationsByUserId);

router.delete("/delete", verifyUser, deleteNotification);

router.post("/push", verifyUser, pushNotification);

export default router;
