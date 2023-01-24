import { DocMiddleware } from "../controllers/doc/middleware/DocMiddleware.js";
import { DocAPI } from "../controllers/doc/api/DocAPI.js";
import { DocIloanConsumer } from "../controllers/doc/iloanconsumer/DocIloanConsumer.js";
import { verifyUser } from "../middleware/AuthUser.js";
import express from "express";
import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 60, // limit each IP to 5 attempts per windowMs
  message: "Too many attempts, please try again later",
});

router.post("/mid", DocMiddleware, limiter, verifyUser);
router.post("/api", DocAPI, limiter, verifyUser);
router.post("/iloancon", DocIloanConsumer, limiter, verifyUser);

export default router;
