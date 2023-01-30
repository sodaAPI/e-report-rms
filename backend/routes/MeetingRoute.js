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
router.get("/:uuid", verifyUser, getMeetingById);
router.post("/", verifyUser, createMeeting);
router.patch("/:uuid", verifyUser, updateMeeting);
router.delete("/:uuid", verifyUser, deleteMeeting);

export default router;
