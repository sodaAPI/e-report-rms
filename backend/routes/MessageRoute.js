import express from "express";
import {
  addMessage,
  getMessages,
  deleteMessage,
} from "../controllers/Message.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/add", verifyUser, addMessage);
router.get("/get", verifyUser, getMessages);
router.delete("/delete", verifyUser, deleteMessage);

export default router;
