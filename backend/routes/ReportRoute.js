import express from "express";
import {
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getAllReports,
} from "../controllers/Report.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/", verifyUser, getAllReports);
router.get("/:id", verifyUser, getReportById);
router.post("/", verifyUser, createReport);
router.patch("/:id", verifyUser, updateReport);
router.delete("/:id", verifyUser, deleteReport);

export default router;
