import { DocMiddleware } from "../controllers/doc/middleware/DocMiddleware.js";
import { DocAPI } from "../controllers/doc/api/DocAPI.js";
import { DocIloanConsumer } from "../controllers/doc/iloanconsumer/DocIloanConsumer.js";
import { DocAPIService } from "../controllers/doc/apiservice/DocAPIService.js";
import { verifyUser } from "../middleware/AuthUser.js";
import {
  ClearFileAPI,
  ClearFileAPIService,
  ClearFileMid,
  ClearFileiLoan,
} from "../controllers/doc/clearFile.js";
import express from "express";
import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.post("/mid", verifyUser, DocMiddleware, limiter);
router.post("/api", verifyUser, DocAPI, limiter);
router.post("/iloancon", verifyUser, DocIloanConsumer, limiter);
router.post("/apiservice", verifyUser, DocAPIService, limiter);
router.delete("/clear", verifyUser, ClearFileAPI, ClearFileAPIService, ClearFileMid, ClearFileiLoan);

export default router;
