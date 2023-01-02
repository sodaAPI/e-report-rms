import express from "express";
import { addMessage, getMessages } from "../controllers/Message.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/add", verifyUser, addMessage);
router.get("/get", verifyUser, getMessages);

export default router;
