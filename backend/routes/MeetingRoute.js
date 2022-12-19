import express from "express";
import {
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  getAllMeetings,
} from "../controllers/Meeting.js";
import { verifyToken} from "../middleware/authJwt.js";

const router = express.Router();

router.get("/", getAllMeetings, verifyToken);
router.get("/:id", getMeetingById, verifyToken);
router.post("/", createMeeting, verifyToken);
router.patch("/:id", updateMeeting, verifyToken);
router.delete("/:id", deleteMeeting, verifyToken);

export default router;
