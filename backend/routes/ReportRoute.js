import express from "express";
import {
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getAllReports,
} from "../controllers/Report.js";

const router = express.Router();

router.get("/", getAllReports);
router.get("/:id", getReportById);
router.post("/", createReport);
router.patch("/:id", updateReport);
router.delete("/:id", deleteReport);

export default router;
