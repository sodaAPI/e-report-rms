import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
  pushNotification,
  getNotificationsByUserId,
  addNotificationById
} from "../controllers/Notification.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

//Add Notification
router.post("/add", verifyUser, addNotification);
router.post("/addbyid", verifyUser, addNotificationById);

//Get Notification
router.get("/get", verifyUser, getNotifications);
router.get("/getuser", verifyUser, getNotificationsByUserId);

//Delete Notification
router.delete("/delete", verifyUser, deleteNotification);

//Send Notification / Check Notification
router.post("/push", verifyUser, pushNotification);

export default router;
