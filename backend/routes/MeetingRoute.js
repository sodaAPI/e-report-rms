import express from "express";
import {
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  getAllMeetings,
} from "../controllers/Meeting.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/", verifyUser, getAllMeetings);
router.get("/:id", verifyUser, getMeetingById);
router.post("/", verifyUser, createMeeting);
router.patch("/:id", verifyUser, updateMeeting);
router.delete("/:id", verifyUser, deleteMeeting);

export default router;
