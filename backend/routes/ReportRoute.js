import express from "express";
import {
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getAllReports,
} from "../controllers/Report.js";
import { verifyUser, unauthorizedGuest } from "../middleware/AuthUser.js";

import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.get("/", verifyUser, getAllReports);
router.get("/:uuid", verifyUser, getReportById);
router.post("/", limiter, verifyUser, createReport);
router.patch("/:uuid", verifyUser, updateReport);
router.delete("/:uuid", verifyUser, unauthorizedGuest, deleteReport);

export default router;
