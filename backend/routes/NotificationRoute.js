import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
  pushNotification,
} from "../controllers/Notification.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

//Add Notification
router.post("/add", verifyUser, addNotification);

//Get Notification
router.get("/get", verifyUser, getNotifications);

//Delete Notification
router.delete("/delete/:id", verifyUser, deleteNotification);

//Send Notification / Check Notification
router.post("/push", verifyUser, pushNotification);

export default router;
