import express from "express";
import { addMessage, getMessages } from "../controllers/Message.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/addmsg/", verifyUser, addMessage);
router.post("/getmsg/", verifyUser, getMessages);

export default router;
