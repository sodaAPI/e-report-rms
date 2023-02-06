import express from "express";
import {
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  getAllMeetings,
} from "../controllers/Meeting.js";
import { verifyUser, unauthorizedGuest } from "../middleware/AuthUser.js";

import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.get("/", verifyUser, getAllMeetings);
router.get("/:uuid", verifyUser, getMeetingById);
router.post("/",limiter, verifyUser, createMeeting);
router.patch("/:uuid", verifyUser, updateMeeting);
router.delete("/:uuid", verifyUser, unauthorizedGuest, deleteMeeting);

export default router;
