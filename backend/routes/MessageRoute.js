import express from "express";
import {
  addMessage,
  getMessages,
  deleteMessage,
} from "../controllers/Message.js";
import { verifyUser, unauthorizedGuest } from "../middleware/AuthUser.js";

import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.post("/add", limiter, verifyUser, addMessage);
router.get("/get", verifyUser, getMessages);
router.delete("/delete/:uuid", verifyUser, unauthorizedGuest, deleteMessage);

export default router;
